'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { mockCandidates } from '@/data/mockData';
import styles from './PlacedCandidatesSection.module.css';

export default function PlacedCandidatesSection() {
  // Multiply the candidates array to create a seamless infinite loop
  const marqueeCandidates = [
    ...mockCandidates,
    ...mockCandidates,
    ...mockCandidates,
  ];

  const viewportRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startXRef = useRef<number>(0);
  const scrollLeftRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Auto-scroll speed
  const speed = 1.2;

  // Auto-scroll loop
  const autoScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    if (!isMouseDown && !isHovered) {
      viewport.scrollLeft += speed;

      // Infinite loop check: when scrolled past half, reset seamlessly
      const maxScroll = viewport.scrollWidth / 3;
      if (viewport.scrollLeft >= maxScroll * 2) {
        viewport.scrollLeft -= maxScroll;
      }
    }

    animFrameIdRef.current = requestAnimationFrame(autoScroll);
  }, [isMouseDown, isHovered]);

  useEffect(() => {
    animFrameIdRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [autoScroll]);

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    setIsMouseDown(true);
    startXRef.current = e.pageX - viewport.offsetLeft;
    scrollLeftRef.current = viewport.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    e.preventDefault();
    const x = e.pageX - viewport.offsetLeft;
    const walk = (x - startXRef.current) * 1.6; // Scroll sensitivity multiplier
    viewport.scrollLeft = scrollLeftRef.current - walk;

    // Handle seamless infinite loop boundaries during drag
    const maxScroll = viewport.scrollWidth / 3;
    if (viewport.scrollLeft >= maxScroll * 2) {
      viewport.scrollLeft -= maxScroll;
      scrollLeftRef.current -= maxScroll;
    } else if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += maxScroll;
      scrollLeftRef.current += maxScroll;
    }
  };

  // Touch Event Handlers for Mobile & Tablet Swiping
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    setIsMouseDown(true);
    startXRef.current = e.touches[0].pageX - viewport.offsetLeft;
    scrollLeftRef.current = viewport.scrollLeft;
  };

  const handleTouchEnd = () => {
    setIsMouseDown(false);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isMouseDown) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const x = e.touches[0].pageX - viewport.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    viewport.scrollLeft = scrollLeftRef.current - walk;

    const maxScroll = viewport.scrollWidth / 3;
    if (viewport.scrollLeft >= maxScroll * 2) {
      viewport.scrollLeft -= maxScroll;
      scrollLeftRef.current -= maxScroll;
    } else if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += maxScroll;
      scrollLeftRef.current += maxScroll;
    }
  };

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

          {/* Interactive Mouse & Touch Drag Controlled Slider */}
          <div
            ref={viewportRef}
            className={`${styles.sliderViewport} ${isMouseDown ? styles.isDragging : ''}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onMouseEnter={() => setIsHovered(true)}
          >
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
