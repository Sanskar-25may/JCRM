'use client';

import React from 'react';
import Link from 'next/link';

export default function BentoGrid() {
  return (
    <section className="py-24 md:py-32 section-divider-top">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
            THE JCRM PLATFORM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#051937] tracking-tight">
            Designed for Enterprise Growth
          </h2>
          <p className="text-sm text-[#0a2e5c]/85 mt-3.5 leading-relaxed max-w-lg mx-auto">
            Vetted developer talents, modular cloud solutions, and hands-on professional mentorship combined into one robust network.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Enterprise ERP (Double-width) */}
          <div className="md:col-span-2 glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-lg shadow-primary/5 flex flex-col justify-between min-h-[320px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-bold text-[#051937] tracking-tight mt-4 mb-2">
                Production-Ready ERP Deployments
              </h3>
              <p className="text-xs leading-relaxed text-[#0a2e5c]/80 max-w-lg">
                We design and deploy modern modular software architectures for education, finance, logistics, and healthcare. All deployments are built with Next.js, TypeScript, and high-performance databases.
              </p>
            </div>
            
            {/* Mini visual indicator */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200/20 text-xs font-mono text-slate-500">
              <div>
                <span className="text-emerald-500 font-bold block">● Active Nodes</span>
                <span>12 Servers Online</span>
              </div>
              <div>
                <span className="text-[#0066ff] font-bold block">● Response Rate</span>
                <span>99.98% Uptime</span>
              </div>
              <div>
                <span className="text-[#ffb700] font-bold block">● Database</span>
                <span>Postgres Cluster</span>
              </div>
              <div>
                <span className="text-pink-500 font-bold block">● Security</span>
                <span>ISO SSL Verified</span>
              </div>
            </div>
          </div>

          {/* Card 2: Placement Success (Single-width) */}
          <div className="glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-lg shadow-primary/5 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div className="flex flex-col items-center">
              <span className="text-2xl">📈</span>
              <h3 className="text-lg font-bold text-[#051937] tracking-tight mt-4 mb-1">
                Trainee Placements
              </h3>
              <span className="text-xs text-slate-400 font-semibold block mb-4">Vetted &amp; Hired</span>
            </div>
            
            <div className="my-4">
              <span className="text-5xl md:text-6xl font-black text-[#0066ff] block bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">
                96%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mt-1">
                Placement Rate
              </span>
            </div>
            
            <div className="text-[10px] text-[#0a2e5c]/70 leading-relaxed bg-[#f3f0eb] px-3.5 py-2.5 rounded-xl border border-slate-200/50 mt-4">
              Hired at top giants: Oracle, Salesforce, Oracle CRM &amp; more.
            </div>
          </div>

          {/* Card 3: Practical Talent (Single-width) */}
          <div className="glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-lg shadow-primary/5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
            <div>
              <span className="text-2xl">💻</span>
              <h3 className="text-lg font-bold text-[#051937] tracking-tight mt-4 mb-2">
                100% Practical Training
              </h3>
              <p className="text-xs leading-relaxed text-[#0a2e5c]/80 mb-6">
                No dry theory. Trainees build production-ready modules, commit to live codebases, and participate in active pull requests.
              </p>
            </div>
            
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0 text-[10px] font-bold text-[#0a2e5c]/95">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
                <span>Weekly Interactive Sprint Reviews</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
                <span>Next.js App Router Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff]" />
                <span>Enterprise API Design</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Support Network (Double-width) */}
          <div className="md:col-span-2 glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-lg shadow-primary/5 flex flex-col sm:flex-row justify-between items-start sm:items-center min-h-[220px] transition-all duration-300 hover:shadow-xl hover:scale-[1.01] gap-6">
            <div className="max-w-md">
              <span className="text-2xl">🤝</span>
              <h3 className="text-xl font-bold text-[#051937] tracking-tight mt-4 mb-2">
                Post-Placement Mentorship
              </h3>
              <p className="text-xs leading-relaxed text-[#0a2e5c]/80">
                We believe learning is a lifetime journey. Our placed alumni receive dedicated weekly syncs, architecture consultations, and access to JCRM's code library as they transition to new corporate projects.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/join-us"
                className="w-full sm:w-auto text-center inline-flex justify-center items-center bg-[#ffb700] hover:bg-[#ffaa00] text-[#051937] font-bold px-7 py-3 rounded-full text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Join Our Talent Network
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
