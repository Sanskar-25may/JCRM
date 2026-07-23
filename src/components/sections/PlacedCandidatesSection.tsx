'use client';

import React from 'react';
import { mockCandidates } from '@/data/mockData';
import styles from './PlacedCandidatesSection.module.css';

export default function PlacedCandidatesSection() {
  // Double the candidates array to create a seamless 100% infinite marquee loop
  const marqueeCandidates = [...mockCandidates, ...mockCandidates];

  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        {/* Greyish Glassmorphism Section Pane */}
        <div className={styles.glassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              Successfully Placed <span className={styles.titleHighlight}>Candidates</span>
            </h2>
            <p className={styles.subtitle}>
              Our students are working with leading companies across India.
            </p>
          </div>

          {/* Continuous Infinite Sliding Marquee */}
          <div className={styles.sliderViewport}>
            <div className={styles.marqueeTrack}>
              {marqueeCandidates.map((candidate, idx) => (
                <div key={`${candidate.id}-${idx}`} className={styles.card}>
                  <div className={styles.imageFrame}>
                    <img
                      src={candidate.imgUrl}
                      alt={candidate.name}
                      className={styles.candidateImg}
                      loading="lazy"
                    />
                  </div>
                  <h3 className={styles.name}>{candidate.name}</h3>
                  <p className={styles.position}>{candidate.position}</p>
                  <div className={styles.placedTag}>
                    {candidate.company ? candidate.company : 'Placed'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
