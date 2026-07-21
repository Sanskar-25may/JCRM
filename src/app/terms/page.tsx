'use client';

import React from 'react';

export default function Terms() {
  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            Terms &amp; <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Legal Policies</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Privacy Policy, Terms of Service, and Disclaimer
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="glass p-8 md:p-12 rounded-[32px] border border-slate-200/40 shadow-xl max-w-3xl mx-auto text-left flex flex-col gap-8">
            <div>
              <h2 className="text-xl font-bold text-[#051937] mb-1">Privacy Policy</h2>
              <span className="text-[10px] font-bold text-slate-400 block mb-4">Last Updated: June 1, 2026</span>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed mb-3">
                At JCRM Technologies Private Limited, we prioritize the privacy of our clients, trainees, and website visitors. We collect name, email, phone number, and professional documents (such as resumes) solely for ERP demo setup and talent network registrations.
              </p>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed">
                Your data is stored securely in role-based encrypted databases and is never sold, shared, or distributed to third-party marketing services without your explicit consent.
              </p>
            </div>

            <hr className="border-slate-200/40" />

            <div>
              <h2 className="text-xl font-bold text-[#051937] mb-1">Terms of Service</h2>
              <span className="text-[10px] font-bold text-slate-400 block mb-4">Last Updated: June 1, 2026</span>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed mb-3">
                By enrolling in our internship and training programs or requesting custom ERP solutions, you agree to comply with JCRM Technologies Pvt Ltd intellectual property guidelines. The course syllabus, live code repositories, and ERP custom code modules are protected by copyright laws.
              </p>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed">
                Trainees are prohibited from distributing proprietary JCRM ERP codes, database schemas, or learning course modules externally without prior written approval from the directors.
              </p>
            </div>

            <hr className="border-slate-200/40" />

            <div>
              <h2 className="text-xl font-bold text-[#051937] mb-1">Disclaimer</h2>
              <span className="text-[10px] font-bold text-slate-400 block mb-4">Last Updated: June 1, 2026</span>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed mb-3">
                JCRM Technologies makes every effort to secure placement interviews through our dedicated partner networks. However, course completion certificates do not guarantee employment, as successful placements depend entirely on the candidate&apos;s interview performance and mock rounds.
              </p>
              <p className="text-xs text-[#0a2e5c]/85 leading-relaxed">
                Our ERP applications are delivered as-is with ongoing maintenance contracts. JCRM Technologies does not assume liability for operational downtime caused by client-managed server hosting or cloud credentials anomalies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
