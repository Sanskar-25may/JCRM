'use client';

import React from 'react';
import Link from 'next/link';
import styles from './TransformCtaSection.module.css';

export default function TransformCtaSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Highlighted Golden Glassmorphism Pane */}
        <div className={styles.goldenGlassPane}>
          <h2 className={styles.title}>
            Ready to Transform Your Business?
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
