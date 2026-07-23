'use client';

import React from 'react';
import Link from 'next/link';
import styles from './aboutus.module.css';

export default function AboutUs() {
  const stats = [
    { number: '50+', label: 'ERP Deployments' },
    { number: '10+', label: 'Industry Modules' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24×7', label: 'Technical Support' },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Section Pane Matching Homepage */}
        <div className={styles.glassPane}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              About JCRM <span className={styles.titleHighlight}>Technologies</span>
            </h1>
            <p className={styles.subtitle}>
              Empowering global enterprises with cloud-ready ERP systems and building India&apos;s next generation of job-ready software engineers.
            </p>
          </div>

          {/* Company Story & Feature List Split Section */}
          <div className={styles.storyGrid}>
            <div className={styles.imgWrapper}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="JCRM Team Collaboration"
                className={styles.introImg}
              />
            </div>

            <div className={styles.storyContent}>
              <span className={styles.badge}>WHO WE ARE</span>
              <h2 className={styles.storyHeading}>
                Enhance Your Skills &amp; Scale Your Business Operation
              </h2>
              <p className={styles.storyText}>
                At JCRM Technologies, we operate at the intersection of business automation and professional career building. We believe modern enterprises deserve smart, secure, and custom-tailored ERP workflows — while developers deserve practical, live-project-driven mentorship to build robust tech careers.
              </p>

              <div className={styles.featureList}>
                <div className={styles.featureBox}>
                  <div className={styles.featureIcon}>
                    <i className="fa-solid fa-graduation-cap" />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>Enterprise-Grade Syllabus</h3>
                    <p className={styles.featureDesc}>
                      Our tracks are crafted by active developers using Next.js, Python AI, PostgreSQL, and AWS.
                    </p>
                  </div>
                </div>

                <div className={styles.featureBox}>
                  <div className={styles.featureIcon}>
                    <i className="fa-solid fa-infinity" />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>Life-Long Career Guidance</h3>
                    <p className={styles.featureDesc}>
                      Gain access to resume-building rounds, mock interviews, and our hiring partner database.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards Grid */}
          <div className={styles.visionMissionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-eye" />
              </div>
              <h2 className={styles.cardTitle}>Our Vision</h2>
              <p className={styles.cardDesc}>
                To be the globally trusted standard in cloud-native business automation systems and a premiere launchpad for world-class developer talent.
              </p>
            </div>

            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <i className="fa-solid fa-bullseye" />
              </div>
              <h2 className={styles.cardTitle}>Our Mission</h2>
              <p className={styles.cardDesc}>
                To build secure, fast, and scalable enterprise ERP products that streamline complex workflows, and to equip learners with direct, hands-on, job-oriented technical skills.
              </p>
            </div>
          </div>

          {/* Key Metrics Stats Strip */}
          <div className={styles.statsStrip}>
            {stats.map((stat, idx) => (
              <div key={idx} className={styles.statItem}>
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action Buttons */}
          <div className={styles.ctaGroup}>
            <Link href="/join-us" className={styles.primaryBtn}>
              <span>Join Our Talent Network</span>
              <i className="fa-solid fa-arrow-right" />
            </Link>
            <Link href="/erp-solutions" className={styles.secondaryBtn}>
              <span>Explore ERP Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
