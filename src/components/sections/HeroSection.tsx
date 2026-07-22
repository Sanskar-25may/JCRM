'use client';

import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const featureChips = [
    { icon: '💼', label: 'HR Management ERP' },
    { icon: '🎓', label: 'LMS Academic Portal' },
    { icon: '🏥', label: 'Hospital Health Suite' },
    { icon: '📊', label: 'Accounting & Billing' },
    { icon: '🚀', label: 'Job-Oriented IT Training' },
  ];

  const stats = [
    { number: '50+', label: 'ERP Deployments' },
    { number: '10+', label: 'Industry Modules' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24×7', label: 'Technical Support' },
  ];

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        {/* 1. Highlighted Tagline / Badge Pill */}
        <Link href="/erp-solutions" className={styles.badgeLink}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Enterprise ERP & Professional IT Training</span>
          <span className={styles.badgeArrow}>→</span>
        </Link>

        {/* 2. Main Hero Heading (H1) */}
        <h1 className={styles.title}>
          Build Smarter Enterprises.{' '}
          <span className={styles.titleGradient}>Master Next-Gen Tech.</span>
        </h1>

        {/* 3. Sub-heading / Description Content */}
        <p className={styles.description}>
          JCRM Technologies delivers cloud-ready, enterprise-grade ERP systems for HR, Accounting,
          Hospitality, LMS, and E-Commerce — while empowering ambitious professionals with
          job-oriented IT training and 100% placement support.
        </p>

        {/* 4. Call-to-Action (CTA) Button Group */}
        <div className={styles.ctaGroup}>
          <Link href="/contact-us" className={styles.primaryBtn}>
            <span>Request Free Demo</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
          <Link href="/erp-solutions" className={styles.secondaryBtn}>
            <span>Explore ERP Solutions</span>
          </Link>
        </div>

        {/* 5. Floating Feature Chips */}
        <div className={styles.featureChips}>
          {featureChips.map((chip, idx) => (
            <div key={idx} className={styles.chip}>
              <span className={styles.chipIcon}>{chip.icon}</span>
              <span>{chip.label}</span>
            </div>
          ))}
        </div>

        {/* 6. Key Metrics Stats Strip */}
        <div className={styles.statsStrip}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statItem}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
