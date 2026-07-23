'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        {/* Main Glassmorphism Pane for Text Bifurcation & Enhanced Visibility */}
        <div className={styles.glassPane}>
          {/* Main Hero Heading (H1) divided into two parts */}
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>Build Smarter Enterprises.</span>
            <span className={styles.titleGradient}>Master Next-Gen Tech.</span>
          </h1>

          {/* Sub-heading / Description Content */}
          <p className={styles.description}>
            JCRM Technologies delivers cloud-ready, enterprise-grade ERP systems for HR, Accounting,
            Hospitality, LMS, and E-Commerce — while empowering ambitious professionals with
            job-oriented IT training and 100% placement support.
          </p>

          {/* Call-to-Action (CTA) Button Group */}
          <div className={styles.ctaGroup}>
            <Link href="/contact-us" className={styles.primaryBtn}>
              <span>Request Free Demo</span>
              <i className="fa-solid fa-arrow-right" />
            </Link>
            <button
              type="button"
              className={styles.youtubeBtn}
              onClick={() => setIsVideoOpen(true)}
            >
              <i className="fa-brands fa-youtube" />
              <span>Why JCRM?</span>
            </button>
          </div>

          {/* Floating Feature Chips */}
          <div className={styles.featureChips}>
            {featureChips.map((chip, idx) => (
              <div key={idx} className={styles.chip}>
                <span className={styles.chipIcon}>{chip.icon}</span>
                <span>{chip.label}</span>
              </div>
            ))}
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
      </div>

      {/* Embedded Video Modal - Plays strictly in the same tab */}
      {isVideoOpen && (
        <div className={styles.modalBackdrop} onClick={() => setIsVideoOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeModalBtn}
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1"
              className={styles.videoIframe}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Why JCRM Video Player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
