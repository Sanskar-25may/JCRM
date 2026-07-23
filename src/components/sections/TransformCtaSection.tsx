'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TransformCtaSection.module.css';

export default function TransformCtaSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Unified Signature Glassmorphism Pane */}
        <div className={styles.goldenGlassPane}>
          <h2 className={styles.title}>
            Ready to <span className={styles.goldHighlight}>Transform Your Business?</span>
          </h2>
          <p className={styles.subtitle}>
            Schedule a free demo and see how JCRM ERP can simplify your operations.
          </p>
          <Link href="/contact-us" className={styles.actionBtn}>
            <span>Get Started Today</span>
            <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}
