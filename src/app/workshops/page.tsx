'use client';

import React from 'react';
import Link from 'next/link';

export default function Workshops() {
  const workshops = [
    {
      title: 'Docker & Kubernetes Orchestration Masterclass',
      status: 'Live & Registering',
      date: 'Aug 10, 2026',
      time: '10:00 AM - 4:00 PM IST',
      mentor: 'Yogendra Singh',
      desc: 'Learn containerization from scratch. Write Dockerfiles, build multi-stage builds, push images, and orchestrate pod replicas in a Kubernetes cluster.',
      icon: 'fa-cubes',
    },
    {
      title: 'Generative AI & LangChain Application Architectures',
      status: 'Upcoming',
      date: 'Sep 05, 2026',
      time: '2:00 PM - 6:00 PM IST',
      mentor: 'Dr. Sarah Connor',
      desc: 'Build RAG apps. Understand Pinecone vector storage, document embedding models, LangChain chains, and server deployments of AI chat assistants.',
      icon: 'fa-robot',
    },
    {
      title: 'Next.js App Router, TypeScript & Tailwind CSS',
      status: 'Completed (Recorded)',
      date: 'Jun 15, 2026',
      time: 'Completed',
      mentor: 'Alex Mercer',
      desc: 'Migrate classic React apps to Next.js. Master Server Components, dynamic routes, state optimization, and clean deployment pipelines to Vercel.',
      icon: 'fa-code',
    },
  ];

  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            Technical <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Masterclasses</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Learn critical cloud, programming, and AI tools in hands-on practical technical workshops.
          </p>
        </div>
      </section>

      {/* Workshop List */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {workshops.map((ws) => (
              <div key={ws.title} className="glass card-hover rounded-[28px] border border-slate-200/40 p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl">
                <div>
                  <div className="flex justify-between items-center pb-4 border-b border-slate-200/20">
                    <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center text-sm">
                      <i className={`fa-solid ${ws.icon}`}></i>
                    </div>
                    <span
                      className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                        ws.status.includes('Live') ? 'bg-emerald-100 text-emerald-600 border border-emerald-200/30' :
                        ws.status.includes('Upcoming') ? 'bg-blue-100 text-blue-600 border border-blue-200/30' :
                        'bg-slate-100 text-slate-500 border border-slate-200/30'
                      }`}
                    >
                      {ws.status}
                    </span>
                  </div>
                  
                  <div className="text-left mt-6">
                    <h3 className="text-lg font-bold text-[#051937] leading-snug mb-2.5">{ws.title}</h3>
                    <p className="text-xs text-[#0a2e5c]/85 leading-relaxed mb-6">{ws.desc}</p>

                    <div className="flex flex-col gap-2.5 text-[10px] font-bold text-slate-500 font-mono">
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-calendar text-[#0066ff]"></i>
                        <span>{ws.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-clock text-[#0066ff]"></i>
                        <span>{ws.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="fa-regular fa-user text-[#0066ff]"></i>
                        <span>Mentor: {ws.mentor}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  {ws.status.includes('Completed') ? (
                    <a href="https://youtu.be/AHzgyPR-Cy4?feature=shared" target="_blank" rel="noopener noreferrer" className="w-full text-center inline-flex justify-center items-center bg-white border border-slate-200 text-slate-800 font-bold py-3 rounded-xl text-xs transition-all hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm">
                      Watch Recording
                    </a>
                  ) : (
                    <Link href="/join-us" className="w-full text-center inline-flex justify-center items-center bg-[#0066ff] hover:bg-[#0055ee] text-white font-bold py-3 rounded-xl text-xs transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-[#0066ff]/10">
                      Reserve Seat Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
