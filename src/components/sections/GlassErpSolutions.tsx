'use client';

import React, { useState } from 'react';
import { mockErpProducts } from '@/data/mockData';

export default function GlassErpSolutions() {
  const [selectedErp, setSelectedErp] = useState<string>(mockErpProducts[0].id);

  return (
    <section id="erp-solutions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-3">
          Enterprise Systems
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Cloud-Ready <span className="text-gradient-blue">ERP Solutions</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Powering modern academic institutions, corporate enterprises, and healthcare providers with automated management portals.
        </p>
      </div>

      {/* ERP Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {mockErpProducts.map((erp) => {
          const isSelected = selectedErp === erp.id;
          return (
            <div
              key={erp.id}
              onClick={() => setSelectedErp(erp.id)}
              className={`glass-card p-6 sm:p-8 cursor-pointer flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                isSelected ? 'border-[#0047ba] shadow-xl ring-2 ring-[#0047ba]/20' : ''
              }`}
            >
              {/* Top Row: Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-700 text-2xl">
                    <i className={`fas ${erp.icon}`} />
                  </div>
                  {erp.badge && (
                    <span className="px-3 py-1 text-xs font-bold text-blue-700 bg-blue-100/60 rounded-full border border-blue-200">
                      {erp.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                  {erp.name}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {erp.description}
                </p>

                {/* Feature Bullets */}
                <ul className="space-y-2 mb-6">
                  {(erp.features || []).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href="/contact-us"
                  className="w-full py-3 px-4 glass-btn-secondary text-xs sm:text-sm flex items-center justify-center gap-2 group"
                >
                  <span>Request Live Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
