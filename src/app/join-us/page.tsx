'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { joinUsFormSchema, type JoinUsFormData } from '@/lib/validations';
import { submitTalentApplication } from '@/lib/actions/formSubmit';
import styles from './joinus.module.css';

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
    <div className={styles.joinPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Join Our Talent Network</h1>
          <p className="reveal delay-1">Work on live projects, receive active mentorship, and connect with global hiring partners</p>
        </div>
      </section>

      {/* Main Form Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left side checklist */}
            <div className={`${styles.left} reveal`}>
              <span className={styles.badge}>WHY JOIN JCRM?</span>
              <h2>A Launchpad For World-Class Developers</h2>
              <p className={styles.text}>
                We do not teach abstract theories. When you join the JCRM IT Talent Network, you are immediately integrated into our live development teams:
              </p>

              <div className={styles.perk}>
                <div className={styles.perkIcon}>
                  <i className="fa-solid fa-code-fork"></i>
                </div>
                <div className={styles.perkText}>
                  <h5>Live Production Pipelines</h5>
                  <p>Commit code directly to Git, write Dockerfiles, configure AWS, and deploy live packages.</p>
                </div>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkIcon}>
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className={styles.perkText}>
                  <h5>1-on-1 Development Reviews</h5>
                  <p>Get daily feedback from principal developers and system architects.</p>
                </div>
              </div>

              <div className={styles.perk}>
                <div className={styles.perkIcon}>
                  <i className="fa-solid fa-building-user"></i>
                </div>
                <div className={styles.perkText}>
                  <h5>Direct Partner Referrals</h5>
                  <p>We work with HR professionals in tech hubs like Bengaluru, Pune, and Noida for immediate hiring help.</p>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className={`${styles.right} reveal delay-1`}>
              <div className={styles.formCard}>
                {!submitted ? (
                  <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <h3 className={styles.formTitle}>Talent Enrollment Form</h3>
                    <p className={styles.formSubtitle}>Submit your application. Our recruitment coordinators review and respond in 1-3 working days.</p>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-xs font-semibold mb-5 flex items-center gap-2">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        {submitError}
                      </div>
                    )}

                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className={errors.name ? "border-red-400 focus:border-red-500" : ""}
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john.doe@example.com"
                        className={errors.email ? "border-red-400 focus:border-red-500" : ""}
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 9876543210"
                        className={errors.phone ? "border-red-400 focus:border-red-500" : ""}
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="domain">Domain of Expertise / Choice</label>
                      <select
                        id="domain"
                        value={selectedDomain}
                        onChange={(e) => setValue('domain', e.target.value)}
                      >
                        {domains.map((dom) => (
                          <option key={dom} value={dom}>
                            {dom}
                          </option>
                        ))}
                      </select>
                      {errors.domain && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.domain.message}</p>
                      )}
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="note">Qualifications &amp; Experience Overview</label>
                      <textarea
                        id="note"
                        rows={4}
                        placeholder="Tell us about your tech stack, projects you've built, or goals..."
                        {...register('note')}
                      ></textarea>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="resume">Upload Resume / CV (PDF)</label>
                      <div className={styles.fileInputWrapper}>
                        <input
                          type="file"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className={styles.fileInput}
                        />
                        <div className={`${styles.fileInputTrigger} ${errors.resume ? "border-red-400" : ""}`}>
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                          <span>
                            {resumeFile ? resumeFile.name : 'Select PDF or Document'}
                          </span>
                        </div>
                      </div>
                      {errors.resume && (
                        <p className="text-[11px] text-red-500 font-medium mt-1">{errors.resume.message as string}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#ffb700] hover:bg-[#d97706] disabled:bg-slate-300 text-[#051937] font-bold px-6 py-3 rounded-full text-xs transition-all w-full flex items-center justify-center gap-1.5 mt-3 shadow-md hover:-translate-y-0.5"
                    >
                      {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                      <i className="fa-solid fa-paper-plane text-[10px]"></i>
                    </button>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Application Submitted!</h3>
                    <p>
                      Thank you for applying to the JCRM Technologies IT Talent Network, <strong>{submittedName}</strong>.
                    </p>
                    <p>
                      Our talent acquisition coordinators will review your resume and experience overview for the <strong>{submittedDomain}</strong> track. We will email or call you at <strong>{submittedEmail}</strong> within 48 hours to schedule your counseling session.
                    </p>
                    <button
                      className="btnCustom btnOutlineGold mt-4"
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
