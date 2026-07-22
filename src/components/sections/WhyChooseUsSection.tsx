'use client';

import React from 'react';
import styles from './WhyChooseUsSection.module.css';

export default function WhyChooseUsSection() {
  const checklist = [
    '100% Job Oriented Training',
    'Industry Oriented Curriculum',
    'Practical & Hands-on Knowledge',
    'Real-Time Live Projects',
    'Interview Preparation & Mock Rounds',
    'HR References & Placement Support',
    '1-on-1 Live Online Sessions',
    'Long-Term Career Guidance',
  ];

  const pillars = [
    {
      icon: 'fa-lock',
      title: 'Secure',
      desc: 'Role-based access & audit logs',
    },
    {
      icon: 'fa-cloud-arrow-up',
      title: 'Cloud Ready',
      desc: 'Scalable & fast deployment',
    },
    {
      icon: 'fa-chart-pie',
      title: 'Analytics',
      desc: 'Real-time insights & reports',
    },
    {
      icon: 'fa-handshake',
      title: 'Partnership',
      desc: 'Built for long-term success',
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Greyish Glassmorphism Section Pane */}
        <div className={styles.glassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              Why Choose <span className={styles.titleHighlight}>JCRM Technologies</span>
            </h2>
            <p className={styles.subtitle}>
              We focus on real-world skills, enterprise-grade ERP solutions, and long-term career & business growth.
            </p>
          </div>

          {/* 2-Column Split Content */}
          <div className={styles.contentGrid}>
            {/* Left Column: Checklist Features */}
            <div className={styles.leftCol}>
              <div className={styles.checkList}>
                {checklist.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <div className={styles.checkIcon}>
                      <i className="fa-solid fa-check" />
                    </div>
                    <span className={styles.checkText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: 4 Pillars Inner Glass Card */}
            <div className={styles.rightCol}>
              <div className={styles.pillarsCard}>
                {pillars.map((pillar, idx) => (
                  <div key={idx} className={styles.pillarItem}>
                    <div className={styles.pillarIconBox}>
                      <i className={`fa-solid ${pillar.icon}`} />
                    </div>
                    <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                    <p className={styles.pillarDesc}>{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
