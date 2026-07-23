'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TrainingPlacementSection.module.css';

export default function TrainingPlacementSection() {
  const programs = [
    {
      name: 'Frontend Development',
      icon: 'fa-code',
      link: '/courses/frontend',
    },
    {
      name: 'Backend Development',
      icon: 'fa-database',
      link: '/courses/backend',
    },
    {
      name: 'AI & Machine Learning',
      icon: 'fa-robot',
      link: '/courses/ai-ml',
    },
    {
      name: 'Data Science',
      icon: 'fa-chart-line',
      link: '/courses/datascience',
    },
    {
      name: 'Cyber Security',
      icon: 'fa-shield-halved',
      link: '/courses/cyber-security',
    },
    {
      name: 'Forensic Science',
      icon: 'fa-user-secret',
      link: '/courses/forensic-science',
    },
    {
      name: 'Cloud & DevOps',
      icon: 'fa-cloud',
      link: '/courses/cloud-devops',
    },
    {
      name: 'QA Automation',
      icon: 'fa-vial',
      link: '/courses/qa-automation',
    },
    {
      name: 'Digital Marketing',
      icon: 'fa-bullhorn',
      link: '/courses/graphic-design',
    },
    {
      name: 'Gen AI',
      icon: 'fa-brain',
      link: '/courses/zen-ai',
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
              Training & <span className={styles.titleHighlight}>100% Placement Assistance</span>
            </h2>
            <p className={styles.subtitle}>
              Hands-on learning with real projects and strong hiring support in India and abroad.
            </p>
          </div>

          {/* 2-Column Split Content Grid */}
          <div className={styles.contentGrid}>
            {/* Left Column: Internship & Training Programs */}
            <div className={styles.innerGlassCard}>
              <div>
                <div className={styles.cardHeader}>
                  <i className={`fa-solid fa-laptop-code ${styles.cardHeaderIcon}`} />
                  <h3 className={styles.cardTitle}>Internship & Training Programs</h3>
                </div>

                <div className={styles.programsGrid}>
                  {programs.map((program, idx) => (
                    <div key={idx} className={styles.programItem}>
                      <div className={styles.programLeft}>
                        <i className={`fa-solid ${program.icon} ${styles.programIcon}`} />
                        <span className={styles.programName}>{program.name}</span>
                      </div>
                      <Link href={program.link} className={styles.viewBtn}>
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.leftFooterNote}>
                Real-time projects • Mentor guidance • Interview preparation • Hiring partner referrals
              </div>
            </div>

            {/* Right Column: Join Our IT Talent Network */}
            <div className={styles.innerGlassCard}>
              <div>
                <div className={styles.cardHeader}>
                  <i className={`fa-solid fa-users-viewfinder ${styles.cardHeaderIcon}`} />
                  <h3 className={styles.cardTitle}>Join Our IT Talent Network</h3>
                </div>

                <p className={styles.rightDesc}>
                  Work on live ERP projects, collaborate with experienced mentors, and grow your career with flexible learning and placement support.
                </p>

                <ul className={styles.stepsList}>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>1</span>
                    <span>Click <strong>Apply Now</strong> on the Join Us page</span>
                  </li>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>2</span>
                    <span>Fill the form and upload your resume</span>
                  </li>
                  <li className={styles.stepItem}>
                    <span className={styles.stepNumber}>3</span>
                    <span>Our team reviews and responds within 1–3 days</span>
                  </li>
                </ul>

                <Link href="/join-us" className={styles.applyNowBtn}>
                  <span>Apply Now</span>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>

              <div className={styles.rightFooterNote}>
                We provide training & placement support across multiple IT domains.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
