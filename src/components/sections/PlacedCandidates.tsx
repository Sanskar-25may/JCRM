'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '../../lib/sanity/image';

interface CandidateData {
  _id: string;
  name: string;
  company: string;
  package?: string;
  role?: string;
  image?: any;
}

interface PlacedCandidatesProps {
  candidates?: CandidateData[];
}

export default function PlacedCandidates({ candidates = [] }: PlacedCandidatesProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 240;
      sliderRef.current.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 240;
      const container = sliderRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (sliderRef.current) {
          const container = sliderRef.current;
          const cardWidth = container.firstElementChild?.clientWidth || 240;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;

          if (container.scrollLeft >= maxScrollLeft - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
          }
        }
      }, 3500);
    };

    startAutoplay();

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const handleMouseLeave = () => {
    autoplayRef.current = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const cardWidth = container.firstElementChild?.clientWidth || 240;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
        }
      }
    }, 3500);
  };

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-16 glass p-8 shadow-lg shadow-primary/5">
          <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
            Our Placed Alumni
          </span>
          <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight">
            Recent Placements
          </h2>
          <p className="text-sm text-[#0a2e5c]/85 mt-2.5 leading-relaxed">
            Our students are hired at global tech giants and high-growth ERP enterprises.
          </p>
        </div>

        {candidates.length > 0 ? (
          <div
            className="relative w-full overflow-hidden px-12 group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Prev Button */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-md transition-all hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] opacity-0 group-hover:opacity-100 z-10 focus:outline-none"
              onClick={scrollLeft}
              aria-label="Previous"
            >
              <i className="fas fa-chevron-left text-xs"></i>
            </button>

            {/* Viewport */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto scrollbar-none py-4 px-1 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {candidates.map((cand) => {
                const imgUrl = cand.image
                  ? urlFor(cand.image).width(120).height(120).url()
                  : 'https://jcrm.in/assets/img/avatar.png'; // fallback avatar

                return (
                  <div
                    key={cand._id}
                    className="flex-shrink-0 w-[240px] glass card-hover p-6 rounded-[24px] flex flex-col items-center justify-between"
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        src={imgUrl}
                        alt={cand.name}
                        width={64}
                        height={64}
                        unoptimized
                        className="rounded-full border border-slate-100 object-cover mb-4"
                      />
                      <h5 className="text-sm font-bold text-[#051937] text-center line-clamp-1">{cand.name}</h5>
                      {cand.role && (
                        <p className="text-xs text-slate-500 text-center mt-0.5 line-clamp-1">{cand.role}</p>
                      )}
                    </div>
                    <div className="w-full mt-4">
                      <div className="text-xs font-bold text-[#0066ff] bg-[#0066ff]/6 py-1.5 px-3 rounded-full text-center truncate">
                        {cand.company}
                      </div>
                      {cand.package && (
                        <div className="text-[10px] font-extrabold text-[#ffb700] uppercase tracking-wider text-center mt-2">
                          {cand.package}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next Button */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-md transition-all hover:bg-[#0066ff] hover:text-white hover:border-[#0066ff] opacity-0 group-hover:opacity-100 z-10 focus:outline-none"
              onClick={scrollRight}
              aria-label="Next"
            >
              <i className="fas fa-chevron-right text-xs"></i>
            </button>
          </div>
        ) : (
          <div className="text-center text-slate-400 py-10">
            No candidates configured. Load them inside Sanity Studio.
          </div>
        )}
      </div>
    </section>
  );
}
