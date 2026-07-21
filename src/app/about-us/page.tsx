'use client';

import React from 'react';

export default function AboutUs() {
  const trustPartners = [
    { name: 'Oracle', url: 'https://jcrm.in/assets/img/trust%20%281%29.png' },
    { name: 'Salesforce', url: 'https://jcrm.in/assets/img/trust%20%282%29.png' },
    { name: 'AWS Cloud', url: 'https://jcrm.in/assets/img/trust%20%283%29.png' },
    { name: 'Oracle CRM', url: 'https://jcrm.in/assets/img/trust%20%284%29.png' },
    { name: 'Vercel Systems', url: 'https://jcrm.in/assets/img/trust%20%285%29.png' },
    { name: 'Postgres Inc', url: 'https://jcrm.in/assets/img/trust%20%286%29.png' },
  ];

  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            About <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">JCRM Tech</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Driving Enterprise Innovation &amp; Empowering IT Careers
          </p>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-y border-slate-200/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Illustration / Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-slate-200/50">
                <img
                  src="https://jcrm.in/assets/img/about-img.jpg"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }}
                  alt="Team Collaboration"
                  className="w-full object-cover aspect-video sm:aspect-square"
                />
              </div>
            </div>
            
            {/* Right Details */}
            <div className="flex flex-col items-start text-left">
              <span className="inline-block text-xs font-bold text-[#0066ff] bg-[#0066ff]/8 border border-[#0066ff]/15 px-4.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight mb-4">
                Enhance Your Skills &amp; Scale Your Business Operation
              </h2>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/85 mb-8">
                At JCRM Technologies, we operate at the intersection of business automation and professional career building. We believe that modern enterprises deserve smart, secure, and custom-tailored ERP workflows, while developers deserve practical, live-project-driven mentorship to build robust careers in IT.
              </p>
              
              <div className="flex gap-4.5 items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 border border-[#0066ff]/15 text-[#0066ff] flex items-center justify-center text-sm flex-shrink-0">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#051937] mb-1">Enterprise-Grade Syllabus</h5>
                  <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">Our courses are crafted by active developers using AWS, Python, React, and Terraform.</p>
                </div>
              </div>
              
              <div className="flex gap-4.5 items-start">
                <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 border border-[#0066ff]/15 text-[#0066ff] flex items-center justify-center text-sm flex-shrink-0">
                  <i className="fa-solid fa-infinity"></i>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-[#051937] mb-1">Life-Long Career Guidance</h5>
                  <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">Gain access to resume-building rounds, mock interviews, and our hiring partner database.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-8 md:p-10 rounded-[28px] border border-slate-200/40 shadow-lg shadow-primary/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="text-lg font-bold text-[#051937] mb-2.5">Our Vision</h3>
              <p className="text-xs leading-relaxed text-[#0a2e5c]/80">
                To be the globally trusted standard in cloud-native business automation systems and a launchpad for world-class developer talent.
              </p>
            </div>
            
            <div className="glass p-8 md:p-10 rounded-[28px] border border-slate-200/40 shadow-lg shadow-primary/5 text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#ffb700]/8 text-[#ffb700] flex items-center justify-center text-lg mb-4">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="text-lg font-bold text-[#051937] mb-2.5">Our Mission</h3>
              <p className="text-xs leading-relaxed text-[#0a2e5c]/80">
                To build secure, fast, and scalable enterprise ERP products that streamline complex workflows, and to equip learners with direct, hands-on, job-oriented technical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Partners */}
      <section className="py-20 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold text-[#0066ff] bg-[#0066ff]/8 border border-[#0066ff]/15 px-4.5 py-1.5 rounded-full uppercase tracking-wider mb-2.5">
              OUR PARTNERS
            </span>
            <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight">Trusted By Leading Organizations</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto">We collaborate with verified tech partners to facilitate excellent student placements.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {trustPartners.map((partner, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl border border-slate-200/30 flex items-center justify-center h-20 transition-all duration-300 hover:shadow-md hover:scale-[1.03]">
                <img
                  src={partner.url}
                  alt={partner.name}
                  className="max-h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const textSpan = document.createElement('span');
                      textSpan.innerText = partner.name;
                      textSpan.className = "text-xs font-bold text-slate-400";
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
