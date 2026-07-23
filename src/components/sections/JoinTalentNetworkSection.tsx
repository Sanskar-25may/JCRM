'use client';

import React from 'react';
import Link from 'next/link';
import styles from './JoinTalentNetworkSection.module.css';

export default function JoinTalentNetworkSection() {
  const perks = [
    'Real, impactful ERP projects',
    'Industry exposure & growth',
    'Mentorship by industry leaders',
    'Flexible & remote-friendly culture',
    'Competitive compensation & benefits',
  ];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Greyish Glassmorphism Section Pane */}
        <div className={styles.glassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              Join Our <span className={styles.titleHighlight}>Talent Network</span>
            </h2>
            <p className={styles.subtitle}>
              We welcome UI/UX, Graphic Design, Frontend/Backend, Full Stack, Content Writing, Software Testing/QA, and Technical Support talent.
            </p>
          </div>

          {/* 2-Column Split Content Grid */}
          <div className={styles.contentGrid}>
            {/* Left Column: Perks & Action Buttons */}
            <div className={styles.leftCol}>
              <div className={styles.checkList}>
                {perks.map((perk, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <div className={styles.checkIcon}>
                      <i className="fa-solid fa-check" />
                    </div>
                    <span className={styles.checkText}>{perk}</span>
                  </div>
                ))}
              </div>

              <div className={styles.btnGroup}>
                <Link href="/join-us" className={styles.primaryBtn}>
                  <i className="fa-solid fa-paper-plane" />
                  <span>Send Resume</span>
                </Link>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  <i className="fa-brands fa-linkedin" />
                  <span>Connect</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inspired Quote Card */}
            <div className={styles.rightCol}>
              <div className={styles.quoteCard}>
                <div className={styles.quoteIcon}>
                  <i className="fa-solid fa-quote-left" />
                </div>
                <p className={styles.quoteText}>
                  “Alone we can do so little; together we can do so much.”
                </p>
                <div className={styles.quoteAuthor}>— Helen Keller</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
