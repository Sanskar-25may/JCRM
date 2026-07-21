'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [simulatorTab, setSimulatorTab] = useState<'lms' | 'hr' | 'chatbot'>('lms');

  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28 text-center flex flex-col items-center">
      <div className="container-custom">
        {/* Top Accent Badge */}
        <div className="inline-flex items-center justify-center">
          <span className="inline-flex items-center gap-2 bg-[#0066ff]/8 border border-[#0066ff]/15 px-5 py-1.5 rounded-full text-xs font-bold text-[#0066ff] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0066ff] animate-pulse" />
            Enterprise SaaS ERP &amp; Developer Hub
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#051937] leading-[1.1] mb-6 tracking-tight max-w-4xl mx-auto">
          Scale Operations with <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#0066ff] via-[#38bdf8] to-[#ffb700] bg-clip-text text-transparent">Smart ERP Software</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#0a2e5c]/80 mb-10 max-w-2xl mx-auto">
          Discover modern modular enterprise architectures for logistics, healthcare, and education. Backed by practical developer mentorship and automated invoice extraction pipelines.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16 max-w-md mx-auto">
          <Link
            href="/contact-us"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0066ff] hover:bg-[#0055ee] text-white font-bold px-8 py-4 rounded-full text-sm transition-all shadow-lg shadow-[#0066ff]/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Request Free Demo
          </Link>
          <Link
            href="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white border border-slate-200 text-slate-800 font-bold px-8 py-4 rounded-full text-sm transition-all hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
          >
            Explore Courses
          </Link>
        </div>

        {/* Interactive Full-Width Mockup Console */}
        <div className="w-full max-w-5xl mx-auto px-2">
          <div className="bg-slate-900/95 backdrop-blur-md rounded-[32px] border border-slate-700/40 shadow-2xl p-6 md:p-8 relative overflow-hidden text-left">
            
            {/* Console Header / Window Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-5 mb-5 gap-4">
              <div className="flex gap-1.5 items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444] shadow-md shadow-red-500/20" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#ffb700] shadow-md shadow-yellow-500/20" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#10b981] shadow-md shadow-green-500/20" />
                <span className="text-[11px] font-mono text-slate-500 ml-3.5 hidden sm:inline">jcrm-erp-simulator (~/demo)</span>
              </div>
              
              {/* Tab Selector */}
              <div className="flex bg-white/5 p-1 rounded-2xl w-full sm:w-auto border border-white/5">
                {(['lms', 'hr', 'chatbot'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSimulatorTab(tab)}
                    className={`text-xs font-bold py-2 px-4 rounded-xl capitalize transition-all duration-200 flex-1 sm:flex-initial ${
                      simulatorTab === tab
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white hover:bg-white/2'
                    }`}
                  >
                    {tab === 'lms' ? 'LMS Portal' : tab === 'hr' ? 'Placement Stats' : 'AI OCR Sandbox'}
                  </button>
                ))}
              </div>
            </div>

            {/* Console Body Area */}
            <div className="min-h-[220px] text-xs font-mono text-slate-300">
              
              {/* LMS PORTAL TAB */}
              {simulatorTab === 'lms' && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800/40 p-4 rounded-xl border border-white/10 gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">📚</span>
                      <div>
                        <span className="text-[#38bdf8] font-bold block">Active Training Cohort</span>
                        <span className="text-slate-400 text-[10px]">Syllabus matching oracle &amp; next.js roadmap</span>
                      </div>
                    </div>
                    <span className="text-[#ffb700] font-bold bg-[#ffb700]/10 border border-[#ffb700]/20 px-3 py-1 rounded-full text-[10px]">Week 5/12 in progress</span>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 bg-slate-800/20 p-3 rounded-lg border border-slate-700/10">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>Module 04: Advanced API Integrations &amp; Microservices (REST/GraphQL)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/35 p-3 rounded-lg border-l-2 border-[#0066ff] border-y border-r border-slate-700/10">
                      <span className="text-amber-400 animate-pulse">●</span>
                      <span className="text-white font-semibold">Module 05: Next.js App Router, SSR &amp; Server Actions (Active Batch)</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/10 p-3 rounded-lg opacity-40 border border-slate-700/5">
                      <span className="text-slate-500">○</span>
                      <span>Module 06: CI/CD Deployment, Vercel Pipelines &amp; Cloud Databases</span>
                    </div>
                  </div>
                </div>
              )}

              {/* PLACEMENT STATS TAB */}
              {simulatorTab === 'hr' && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center bg-slate-800/40 p-4 rounded-xl border border-white/10">
                    <span className="text-[#38bdf8] font-bold">📊 Corporate Hiring Network</span>
                    <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-[10px]">Live placement active</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-slate-800/20 p-4 rounded-2xl border border-slate-700/20 text-center">
                      <span className="text-2xl md:text-3xl font-extrabold text-white block">96%</span>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mt-1">Placement Rate</span>
                    </div>
                    <div className="bg-slate-800/20 p-4 rounded-2xl border border-slate-700/20 text-center">
                      <span className="text-2xl md:text-3xl font-extrabold text-[#0066ff] block">8.5 LPA</span>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mt-1">Avg CTC Package</span>
                    </div>
                    <div className="bg-slate-800/20 p-4 rounded-2xl border border-slate-700/20 text-center">
                      <span className="text-2xl md:text-3xl font-extrabold text-[#ffb700] block">24 LPA</span>
                      <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block mt-1">Highest Package</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#0066ff]/8 p-3 rounded-xl text-center border border-[#0066ff]/20 text-xs">
                    <span className="text-[#38bdf8] font-bold">💡 Recruiter Feed:</span> Candidate hired at Oracle Bangalore as Systems Engineer-1
                  </div>
                </div>
              )}

              {/* AI OCR SANDBOX TAB */}
              {simulatorTab === 'chatbot' && (
                <div className="flex flex-col gap-4 animate-fadeIn">
                  <div className="flex justify-between items-center bg-slate-800/40 p-4 rounded-xl border border-white/10">
                    <span className="text-[#38bdf8] font-bold">🤖 OCR AI Pipeline Sandbox</span>
                    <span className="text-emerald-400 font-bold animate-pulse">● Scanning Docs</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4">
                    {/* Left: Code File Preview */}
                    <div className="bg-slate-950/70 p-4 rounded-xl border border-white/5 text-[11px] leading-relaxed text-slate-400 overflow-x-auto font-mono">
                      <span className="text-pink-400 block mb-1.5">// extract_invoice.py</span>
                      <span className="text-[#0066ff]">import</span> ocr_agent<br />
                      <span className="text-amber-400">client</span> = ocr_agent.Client(version=<span className="text-emerald-400">"v2.0"</span>)<br />
                      <span className="text-amber-400">data</span> = client.parse(<span className="text-emerald-400">"invoice_982.pdf"</span>)<br />
                      <span className="text-pink-400">print</span>(data.mapping(<span className="text-emerald-400">"ERP_LEDGER"</span>))
                    </div>
                    
                    {/* Right: Simulation output */}
                    <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 text-[11px] flex flex-col gap-3 justify-center">
                      <div className="flex justify-between">
                        <span className="text-slate-500">File Name:</span>
                        <span className="text-white">invoice_982.pdf</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Vendor ID:</span>
                        <span className="text-[#ffb700] font-bold">JCRM Systems Ltd</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Amount:</span>
                        <span className="text-emerald-400 font-bold">$12,450.00</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 mt-1">
                        <div className="bg-[#0066ff] h-1.5 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
