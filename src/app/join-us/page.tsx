'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { joinUsFormSchema, type JoinUsFormData } from '@/lib/validations';
import { submitTalentApplication } from '@/lib/actions/formSubmit';

export default function JoinUs() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<JoinUsFormData>({
    resolver: zodResolver(joinUsFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      domain: 'Frontend Development',
      note: '',
      resume: undefined,
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedDomain, setSubmittedDomain] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const resumeFile = watch('resume') as File | undefined;
  const selectedDomain = watch('domain');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setValue('resume', e.target.files[0], { shouldValidate: true });
    }
  };

  const onSubmit = async (data: JoinUsFormData) => {
    setSubmitError(null);
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('domain', data.domain);
      formData.append('note', data.note || '');
      formData.append('resume', data.resume);

      const response = await submitTalentApplication(formData);
      if (response.success) {
        setSubmittedName(data.name);
        setSubmittedDomain(data.domain);
        setSubmittedEmail(data.email);
        setSubmitted(true);
        reset();
      } else {
        if (response.errors) {
          const errorMsg = Object.values(response.errors).flat().join(', ');
          setSubmitError(errorMsg);
        } else {
          setSubmitError('Validation check failed. Please verify submission details.');
        }
      }
    } catch (err) {
      console.error(err);
      setSubmitError('An unexpected server connection error occurred.');
    }
  };

  const domains = [
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
    'AI & Machine Learning',
    'Data Science',
    'Cloud & DevOps',
    'Cyber Security',
    'Forensic Science',
    'QA Automation / Testing',
    'UI/UX & Graphic Design',
    'Digital Marketing',
    'Content Writing / Support',
  ];

  return (
    <div className="pt-24 font-sans bg-transparent">
      {/* Header Banner */}
      <section className="py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-5xl font-black text-[#051937] tracking-tight">
            Join Our <span className="bg-gradient-to-r from-[#0066ff] to-[#38bdf8] bg-clip-text text-transparent">Talent Network</span>
          </h1>
          <p className="text-sm text-slate-500 mt-3.5 max-w-xl mx-auto leading-relaxed">
            Work on live projects, receive active mentorship, and connect with global hiring partners.
          </p>
        </div>
      </section>

      {/* Main Form Content */}
      <section className="py-16 bg-white/30 backdrop-blur-sm border-t border-slate-200/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left side checklist */}
            <div className="flex flex-col items-start text-left">
              <span className="inline-block text-xs font-bold text-[#0066ff] bg-[#0066ff]/8 border border-[#0066ff]/15 px-4.5 py-1.5 rounded-full uppercase tracking-wider mb-4">
                WHY JOIN JCRM?
              </span>
              <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight mb-4">
                A Launchpad For World-Class Developers
              </h2>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/85 mb-8">
                We do not teach abstract theories. When you join the JCRM IT Talent Network, you are immediately integrated into our live development teams:
              </p>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-code-fork"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">Live Production Pipelines</h5>
                    <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">Commit code directly to Git, write Dockerfiles, configure AWS, and deploy live packages.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">1-on-1 Development Reviews</h5>
                    <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">Get daily feedback from principal developers and system architects.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start p-5 glass rounded-2xl border border-slate-200/30">
                  <div className="w-10 h-10 rounded-full bg-[#0066ff]/8 text-[#0066ff] flex items-center justify-center flex-shrink-0 text-sm">
                    <i className="fa-solid fa-building-user"></i>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[#051937] mb-1">Direct Partner Referrals</h5>
                    <p className="text-xs text-[#0a2e5c]/80 leading-relaxed">We work with HR professionals in tech hubs like Bengaluru, Pune, and Noida for immediate hiring help.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full">
              <div className="glass p-8 md:p-10 rounded-[32px] border border-slate-200/40 shadow-xl">
                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 text-left">
                    <div>
                      <h3 className="text-xl font-bold text-[#051937] tracking-tight">Talent Enrollment Form</h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">Submit your application. Our recruitment coordinators review and respond in 1-3 working days.</p>
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-xs font-semibold flex items-center gap-2">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        {submitError}
                      </div>
                    )}

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-[#051937]">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.name ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-[#051937]">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.email ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-[#051937]">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 9876543210"
                        className={`w-full text-xs font-semibold py-3 px-4 rounded-xl border bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 ${
                          errors.phone ? "border-red-400 focus:border-red-500" : "border-slate-200"
                        }`}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="domain" className="text-xs font-bold text-[#051937]">Domain of Expertise / Choice</label>
                      <select
                        id="domain"
                        value={selectedDomain}
                        onChange={(e) => setValue('domain', e.target.value)}
                        className="w-full text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200"
                      >
                        {domains.map((dom) => (
                          <option key={dom} value={dom}>
                            {dom}
                          </option>
                        ))}
                      </select>
                      {errors.domain && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.domain.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="note" className="text-xs font-bold text-[#051937]">Qualifications &amp; Experience Overview</label>
                      <textarea
                        id="note"
                        rows={4}
                        placeholder="Tell us about your tech stack, projects you've built, or goals..."
                        className="w-full text-xs font-semibold py-3 px-4 rounded-xl border border-slate-200 bg-white/40 focus:border-[#0066ff] focus:bg-white outline-none transition-all duration-200 resize-none"
                        {...register('note')}
                      ></textarea>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="resume" className="text-xs font-bold text-[#051937]">Upload Resume / CV (PDF)</label>
                      <div className="relative w-full">
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className={`w-full text-xs font-semibold py-4 px-4 rounded-xl border border-dashed bg-white/40 text-slate-500 hover:bg-white transition-all duration-200 flex flex-col items-center justify-center gap-2 text-center ${
                          errors.resume ? "border-red-400" : "border-slate-300"
                        }`}>
                          <i className="fa-solid fa-cloud-arrow-up text-xl text-[#0066ff]"></i>
                          <span>
                            {resumeFile ? resumeFile.name : 'Select PDF or Document'}
                          </span>
                        </div>
                      </div>
                      {errors.resume && (
                        <p className="text-[10px] text-red-500 font-bold mt-1">{errors.resume.message as string}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ffb700] hover:bg-[#ffaa00] disabled:bg-slate-300 text-[#051937] font-bold px-8 py-3.5 rounded-full text-sm transition-all w-full flex items-center justify-center gap-1.5 mt-3 shadow-md hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      <i className="fa-solid fa-paper-plane text-xs"></i>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 flex flex-col items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mb-5">
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h3 className="text-xl font-bold text-[#051937] mb-2">Application Submitted!</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      Thank you for applying to the JCRM Technologies IT Talent Network, <strong>{submittedName}</strong>. Our coordinators will review your resume for the <strong>{submittedDomain}</strong> track and contact you at <strong>{submittedEmail}</strong>.
                    </p>
                    <button
                      className="inline-flex justify-center items-center bg-white border border-slate-200 text-slate-800 font-bold px-7 py-3 rounded-full text-xs transition-all hover:bg-slate-50 shadow-sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Apply Again
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
