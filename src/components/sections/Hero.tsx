'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [simulatorTab, setSimulatorTab] = useState<'lms' | 'hr' | 'chatbot'>('lms');

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Hero Left Content Column */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-flex items-center gap-2 bg-[#0066ff]/8 border border-[#0066ff]/15 px-5 py-1.5 rounded-full text-xs font-bold text-[#0066ff] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" />
              Enterprise SaaS ERP &amp; Developer Hub
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-[#051937] leading-[1.15] mb-6 tracking-tight">
              Scale Operations with <br />
              <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Smart ERP Systems</span>
            </h1>
            <p className="text-base lg:text-lg leading-relaxed text-[#0a2e5c]/85 mb-8 max-w-xl">
              Discover modern modular software architectures for education, finance, logistics, and healthcare. Backed by job-oriented talent training and mentorship.
            </p>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center bg-[#ffb700] hover:bg-[#ffaa00] text-[#051937] font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg shadow-[#ffb700]/15 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                Request Free Demo
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center justify-center border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff] hover:text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Courses
              </Link>
            </div>
          </div>

          {/* Interactive Workspace Mockup Console */}
          <div className="w-full">
            <div className="bg-slate-900/95 backdrop-blur-md rounded-3xl border border-slate-700/40 shadow-2xl p-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 mb-4 gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444] shadow-md shadow-red-500/20" />
                  <span className="w-3 h-3 rounded-full bg-[#ffb700] shadow-md shadow-yellow-500/20" />
                  <span className="w-3 h-3 rounded-full bg-[#10b981] shadow-md shadow-green-500/20" />
                </div>
                <div className="flex bg-white/5 p-1 rounded-2xl w-full sm:w-auto border border-white/5">
                  {(['lms', 'hr', 'chatbot'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setSimulatorTab(tab)}
                      className={`text-xs font-bold py-1.5 px-3.5 rounded-xl capitalize transition-all duration-200 flex-1 sm:flex-initial ${
                        simulatorTab === tab
                          ? 'bg-white/10 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white hover:bg-white/2'
                      }`}
                    >
                      {tab === 'lms' ? 'LMS Portal' : tab === 'hr' ? 'HR Analytics' : 'AI Assistant'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Console Body Area */}
              <div className="min-h-[220px] text-xs font-mono text-slate-300">
                {simulatorTab === 'lms' && (
                  <div className="flex flex-col gap-3.5 animate-fadeIn">
                    <div className="flex justify-between items-center bg-slate-800/40 p-3 rounded-xl border border-white/10">
                      <span className="text-[#38bdf8] font-bold">📚 Active Batch Syllabus</span>
                      <span className="text-[#ffb700] font-bold">Week 5/12</span>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3 bg-slate-800/20 p-2.5 rounded-lg border border-slate-700/10">
                        <span className="text-emerald-400">✓</span>
                        <span>Module 04: Advanced API Integrations (REST/GraphQL)</span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800/30 p-2.5 rounded-lg border-l-2 border-[#0066ff] border-y border-r border-slate-700/10">
                        <span className="text-amber-400 animate-pulse">●</span>
                        <span className="text-white">Module 05: Next.js SSR &amp; Server Actions (In Progress)</span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-800/10 p-2.5 rounded-lg opacity-40 border border-slate-700/5">
                        <span className="text-slate-500">○</span>
                        <span>Module 06: CI/CD Pipelines &amp; Cloud Deployment</span>
                      </div>
                    </div>
                  </div>
                )}

                {simulatorTab === 'hr' && (
                  <div className="flex flex-col gap-3.5 animate-fadeIn">
                    <div className="flex justify-between items-center bg-slate-800/40 p-3 rounded-xl border border-white/10">
                      <span className="text-[#38bdf8] font-bold">📊 Placement Success Metrics</span>
                      <span className="text-emerald-400 font-bold">Live Data</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3.5">
                      <div className="bg-slate-800/20 p-3 rounded-xl border border-slate-700/20 text-center animate-pulse">
                        <span className="text-lg font-bold text-white block">96%</span>
                        <span className="text-slate-400 text-[10px]">Placement Rate</span>
                      </div>
                      <div className="bg-slate-800/20 p-3 rounded-xl border border-slate-700/20 text-center animate-pulse">
                        <span className="text-lg font-bold text-white block">8.5 LPA</span>
                        <span className="text-slate-400 text-[10px]">Avg Package</span>
                      </div>
                    </div>
                    <div className="bg-[#0066ff]/8 p-2.5 rounded-lg text-center border border-[#0066ff]/20">
                      <span className="text-[#38bdf8] font-bold">💡 Latest Placement:</span> Candidate hired at Oracle Bangalore as SDE-1
                    </div>
                  </div>
                )}

                {simulatorTab === 'chatbot' && (
                  <div className="flex flex-col gap-3 animate-fadeIn">
                    <div className="flex gap-2">
                      <span className="text-emerald-400 font-bold">System:</span>
                      <span className="text-slate-400">Database connected. Waiting for prompts...</span>
                    </div>
                    <div className="bg-slate-800/30 p-3 rounded-xl border border-slate-700/20 text-slate-200">
                      <span className="text-[#ffb700] font-bold block mb-1">User Query:</span>
                      <span>"How can I integrate an ERP chatbot for invoice processing?"</span>
                    </div>
                    <div className="bg-blue-950/30 p-3 rounded-xl border border-blue-900/30 text-white">
                      <span className="text-[#38bdf8] font-bold block mb-1">JCRM-AI Response:</span>
                      <span>"We deploy dynamic LLM agents with OCR mapping nodes to parse PDF attachments..."</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
