'use client';

import React from 'react';
import { mockCandidates } from '@/data/mockData';
import styles from './PlacedCandidatesSection.module.css';

export default function PlacedCandidatesSection() {
  // Display top placed candidates (Simran Singh, Priya Sharma, Adityaraj Dwivedi, Aditya Srivastava, Vanshika Srivastava)
  const displayCandidates = mockCandidates.slice(0, 5);

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

          {/* Symmetrical Center-Aligned Candidate Cards */}
          <div className={styles.grid}>
            {displayCandidates.map((candidate) => (
              <div key={candidate.id} className={styles.card}>
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
                  {candidate.company ? `${candidate.company}` : 'Placed'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
