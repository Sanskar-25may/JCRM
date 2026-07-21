'use client';

import React, { useRef, useEffect } from 'react';
import { Candidate } from '@/types';
import styles from './CandidateSlider.module.css';

interface CandidateSliderProps {
  candidates: Candidate[];
}

export default function CandidateSlider({ candidates }: CandidateSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 250;
      sliderRef.current.scrollBy({ left: -(cardWidth + 20), behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstElementChild?.clientWidth || 250;
      const container = sliderRef.current;
      
      // If we are at the end, scroll back to the start
      if (container.scrollLeft + container.clientWidth >= container.scrollHeight - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth + 20, behavior: 'smooth' });
      }
    }
  };

  // Autoplay function
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        if (sliderRef.current) {
          const container = sliderRef.current;
          const cardWidth = container.firstElementChild?.clientWidth || 250;
          const maxScrollLeft = container.scrollWidth - container.clientWidth;
          
          if (container.scrollLeft >= maxScrollLeft - 10) {
            // Loop back to start
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
        const cardWidth = container.firstElementChild?.clientWidth || 250;
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
    <div 
      className={styles.sliderWrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Controls */}
      <button 
        className={`${styles.controlBtn} ${styles.prevBtn}`} 
        onClick={scrollLeft}
        aria-label="Previous Placed Candidate"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Slider viewport */}
      <div className={styles.sliderContainer} ref={sliderRef}>
        {candidates.map((candidate) => (
          <div key={candidate.id} className={styles.card}>
            <div className={styles.imageBox}>
              <img 
                src={candidate.imgUrl} 
                alt={candidate.name} 
                className={styles.candidateImg}
                loading="lazy"
              />
            </div>
            <div className={styles.info}>
              <h5 className={styles.name}>{candidate.name}</h5>
              <p className={styles.position}>{candidate.position}</p>
              {candidate.company && <div className={styles.company}>{candidate.company}</div>}
              {candidate.package && <div className={styles.package}>{candidate.package}</div>}
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`${styles.controlBtn} ${styles.nextBtn}`} 
        onClick={scrollRight}
        aria-label="Next Placed Candidate"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}
