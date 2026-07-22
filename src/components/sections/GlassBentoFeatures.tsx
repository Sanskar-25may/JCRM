'use client';

import React from 'react';

export default function GlassBentoFeatures() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 glass-pill text-xs font-bold text-[#0047ba] uppercase tracking-widest mb-3">
          Why Choose JCRM
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          The <span className="text-gradient-blue">JCRM Advantage</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 font-normal">
          Empowering organizations and software professionals through industry-grade technology solutions.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Feature Card 1 */}
        <div className="md:col-span-2 glass-panel p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-[#0047ba] text-3xl mb-6">
              🎯
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Dedicated Placement Cell & 100% Hiring Support
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our placement officers actively connect graduates with top MNCs and startups. From resume optimization and LinkedIn branding to technical mock interviews and direct referral drives, we ensure your transition into software engineering is seamless.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-blue-800">
            <span className="px-3 py-1 glass-pill">Resume Building</span>
            <span className="px-3 py-1 glass-pill">Mock Interviews</span>
            <span className="px-3 py-1 glass-pill">MNC Referrals</span>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="glass-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-600 text-2xl mb-4">
              💻
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Real Industrial Capstone Projects
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Work on enterprise-scale production codebases rather than basic tutorial apps. Deploy real microservices, APIs, and AI models to cloud platforms.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-700">Live Cloud Environments →</span>
        </div>

        {/* Feature Card 3 */}
        <div className="glass-card p-8 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#0047ba]/10 border border-[#0047ba]/20 flex items-center justify-center text-[#0047ba] text-2xl mb-4">
              🏢
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Custom Enterprise ERP Engineering
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              We engineer tailor-made ERPs for schools, colleges, hospitals, and corporate firms with modular APIs and high-availability architecture.
            </p>
          </div>
          <span className="text-xs font-bold text-blue-700">Multi-tenant Cloud ERP →</span>
        </div>

        {/* Large Feature Card 4 */}
        <div className="md:col-span-2 glass-panel p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-600/20 flex items-center justify-center text-indigo-700 text-3xl mb-6">
              👩‍🏫
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
              Mentorship from Senior MNC Engineers
            </h3>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Learn directly from principal architects and senior developers working at companies like Vercel, AWS, Tesla, and Microsoft. Gain practical insights, code review feedback, and real-world architectural expertise.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-indigo-800">
            <span className="px-3 py-1 glass-pill">1-on-1 Code Reviews</span>
            <span className="px-3 py-1 glass-pill">System Design</span>
            <span className="px-3 py-1 glass-pill">Live Q&A</span>
          </div>
        </div>
      </div>
    </section>
  );
}
