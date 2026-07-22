'use client';

import React, { useState } from 'react';
import styles from './joinus.module.css';

export default function JoinUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: 'Frontend Development',
    note: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
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
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <h3 className={styles.formTitle}>Talent Enrollment Form</h3>
                    <p className={styles.formSubtitle}>Submit your application. Our recruitment coordinators review and respond in 1-3 working days.</p>

                    <div className={styles.formGroup}>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="domain">Domain of Expertise / Choice</label>
                      <select
                        name="domain"
                        id="domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                      >
                        {domains.map((dom) => (
                          <option key={dom} value={dom}>
                            {dom}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="note">Qualifications &amp; Experience Overview</label>
                      <textarea
                        name="note"
                        id="note"
                        rows={4}
                        placeholder="Tell us about your tech stack, projects you've built, or goals..."
                        value={formData.note}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="resume">Upload Resume / CV (PDF)</label>
                      <div className={styles.fileInputWrapper}>
                        <input
                          type="file"
                          name="resume"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          onChange={handleFileChange}
                          className={styles.fileInput}
                        />
                        <div className={styles.fileInputTrigger}>
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                          <span>
                            {resumeFile ? resumeFile.name : 'Select PDF or Document'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btnCustom btnGold w-100 justify-content-center mt-3">
                      Submit Application <i className="fa-solid fa-paper-plane ms-1"></i>
                    </button>
                  </form>
                ) : (
                  <div className={styles.success}>
                    <i className="fa-solid fa-circle-check"></i>
                    <h3>Application Submitted!</h3>
                    <p>
                      Thank you for applying to the JCRM Technologies IT Talent Network, <strong>{formData.name}</strong>.
                    </p>
                    <p>
                      Our talent acquisition coordinators will review your resume and experience overview for the <strong>{formData.domain}</strong> track. We will email or call you at <strong>{formData.email}</strong> within 48 hours to schedule your counseling session.
                    </p>
                    <button
                      className="btnCustom btnOutlineGold mt-4"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          domain: 'Frontend Development',
                          note: '',
                        });
                        setResumeFile(null);
                      }}
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
