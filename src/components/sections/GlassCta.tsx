'use client';

import React, { useState } from 'react';

export default function GlassCta() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 mb-12">
      <div className="glass-panel p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ready to <span className="text-gradient-blue">Transform</span> Your Business or Career?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            Contact JCRM Technologies today for custom ERP consultations or enrollment details for our job-oriented IT training programs.
          </p>

          {submitted ? (
            <div className="p-6 glass-card text-emerald-800 font-semibold text-lg max-w-md mx-auto">
              🎉 Thank you! Our team will contact you within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/80 border border-blue-900/15 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
              />
              <button
                type="submit"
                className="px-8 py-3.5 glass-btn-primary text-sm font-bold shrink-0"
              >
                Request Call
              </button>
            </form>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs sm:text-sm font-medium text-slate-600">
            <span>📍 Bengaluru, Karnataka</span>
            <span>📞 +91 99999 88888</span>
            <span>✉️ contact@jcrm.in</span>
          </div>
        </div>
      </div>
    </section>
  );
}
