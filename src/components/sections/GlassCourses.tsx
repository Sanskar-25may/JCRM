'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockCourses } from '@/data/mockData';

export default function GlassCourses() {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'ai', label: 'AI & Data Science' },
    { id: 'dev', label: 'Development & QA' },
    { id: 'cloud', label: 'Cloud & Security' },
  ];

  const filteredCourses = mockCourses.filter((course) => {
    if (filter === 'ai') return ['ai-ml', 'datascience', 'zen-ai'].includes(course.id);
    if (filter === 'dev') return ['frontend', 'backend', 'qa-automation'].includes(course.id);
    if (filter === 'cloud') return ['cyber-security', 'cloud-devops', 'forensic-science'].includes(course.id);
    return true;
  });

  return (
    <section id="courses" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-3">
          100% Placement Assured
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Job-Oriented <span className="text-gradient-blue">IT Training Courses</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Designed by industry architects to transform students into high-earning software professionals.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              filter === cat.id
                ? 'bg-[#0047ba] text-white shadow-lg shadow-blue-600/30'
                : 'glass-btn-secondary text-slate-700 hover:text-blue-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="glass-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Top Row: Icon & Duration */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{course.icon}</span>
                <span className="px-3 py-1 text-xs font-bold text-slate-700 glass-pill">
                  ⏱️ {course.duration}
                </span>
              </div>

              {/* Title & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {course.title}
                </h3>
                {course.badge && (
                  <span className="px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wide bg-blue-100 text-blue-800 rounded-md">
                    {course.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {course.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {(course.tools || []).slice(0, 4).map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium text-slate-700 bg-slate-100/80 rounded-md border border-slate-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                <span>✓</span> 100% Placement
              </span>
              <Link
                href={`/courses/${course.id}`}
                className="px-4 py-2 text-xs font-bold glass-btn-primary flex items-center gap-1"
              >
                <span>View Syllabus</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
