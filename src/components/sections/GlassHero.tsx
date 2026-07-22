'use client';

import React from 'react';
import Link from 'next/link';

export default function GlassHero() {
  const stats = [
    { label: 'Placement Guarantee', value: '100%', icon: '🎯' },
    { label: 'Graduates Placed', value: '500+', icon: '🎓' },
    { label: 'Hiring Partners', value: '50+', icon: '🤝' },
    { label: 'ERP Deployment Uptime', value: '99.9%', icon: '⚡' },
  ];

  return (
    <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-panel p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        {/* Decorative Glass Glow Circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass-pill text-xs sm:text-sm font-semibold text-[#0047ba] uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#0047ba] animate-ping" />
            <span>Bengaluru's Premier IT & Enterprise ERP Partner</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0f172a] leading-[1.1] mb-6">
            Architecting <span className="text-gradient-blue">Enterprise ERPs</span> & Elevating Tech Careers
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#334155] font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
            JCRM Technologies delivers cloud-ready, scalable ERP systems for modern enterprises while empowering developers with job-guaranteed IT training and 100% placement support.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="#erp-solutions"
              className="w-full sm:w-auto px-8 py-4 glass-btn-primary text-base flex items-center justify-center gap-3"
            >
              <span>Explore ERP Solutions</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="#courses"
              className="w-full sm:w-auto px-8 py-4 glass-btn-secondary text-base flex items-center justify-center gap-3"
            >
              <span>Browse IT Courses</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 620v-6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h55a2 2 0 012 2v10a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>

          {/* Live Metric Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-blue-900/10">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl sm:text-4xl font-extrabold text-gradient-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
