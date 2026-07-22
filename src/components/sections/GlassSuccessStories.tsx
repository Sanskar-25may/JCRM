'use client';

import React from 'react';
import { mockCandidates } from '@/data/mockData';

export default function GlassSuccessStories() {
  const corporatePartners = [
    'Wipro', 'TCS', 'Infosys', 'Cognizant', 'Accenture', 'HDFC Bank', 'KPMG', 'Tech Mahindra'
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-3">
          Proven Track Record
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Our Placed <span className="text-gradient-blue">Candidates</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Real students who transformed their careers and got hired at top tier MNCs and Fortune 500 companies.
        </p>
      </div>

      {/* Candidates Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
        {mockCandidates.slice(0, 12).map((candidate) => (
          <div
            key={candidate.id}
            className="glass-card p-4 text-center group hover:scale-105 transition-all duration-300 flex flex-col items-center"
          >
            {/* Candidate Photo */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-3 border-2 border-blue-600/30 shadow-md">
              <img
                src={candidate.imgUrl}
                alt={candidate.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Name & Position */}
            <h4 className="text-sm font-bold text-slate-900 line-clamp-1 mb-0.5">
              {candidate.name}
            </h4>
            <p className="text-[11px] font-medium text-slate-600 line-clamp-1 mb-2">
              {candidate.position}
            </p>

            {/* Company Badge */}
            <span className="px-2 py-0.5 text-[10px] font-bold text-blue-800 bg-blue-100/80 rounded-full border border-blue-200 w-full truncate">
              {candidate.company}
            </span>
          </div>
        ))}
      </div>

      {/* Corporate Hiring Partners Strip */}
      <div className="glass-panel p-8 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
          Our Alumini Work At Leading Corporate Enterprises
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {corporatePartners.map((partner, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 glass-card text-sm sm:text-base font-extrabold text-slate-800 hover:text-blue-700 hover:scale-105 transition-all"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
