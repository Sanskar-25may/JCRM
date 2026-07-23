'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import styles from './workshops.module.css';

interface WorkshopItem {
  id: string;
  title: string;
  category: string;
  status: 'LIVE NOW' | 'UPCOMING' | 'RECORDED';
  date: string;
  time: string;
  location: string;
  mentor: string;
  desc: string;
  icon: string;
  videoUrl?: string;
}

export default function Workshops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (!activeVideoUrl) return;

    const origOverflow = document.body.style.overflow;
    const origHtmlOverflow = document.documentElement.style.overflow;
    const origTouch = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const preventScroll = (e: Event) => e.preventDefault();
    const preventKey = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
      }
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventKey, { passive: false });

    return () => {
      document.body.style.overflow = origOverflow;
      document.documentElement.style.overflow = origHtmlOverflow;
      document.body.style.touchAction = origTouch;

      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKey);
    };
  }, [activeVideoUrl]);

  const workshopList: WorkshopItem[] = [
    {
      id: 'ws-1',
      title: 'Docker & Kubernetes Pod Orchestration Masterclass',
      category: 'DevOps & Cloud',
      status: 'LIVE NOW',
      date: 'Aug 10, 2026',
      time: '10:00 AM - 4:00 PM IST',
      location: 'Live Virtual Bootcamp (Zoom)',
      mentor: 'Yogendra Singh',
      desc: 'Learn containerization from scratch. Write multi-stage Dockerfiles, build images, push to AWS ECR, and orchestrate pod replicas in production Kubernetes clusters.',
      icon: 'fa-cubes',
    },
    {
      id: 'ws-2',
      title: 'Generative AI & LangChain Application Architectures',
      category: 'AI & Machine Learning',
      status: 'UPCOMING',
      date: 'Sep 05, 2026',
      time: '2:00 PM - 6:00 PM IST',
      location: 'Live Online Masterclass',
      mentor: 'Dr. Sarah Connor',
      desc: 'Build enterprise RAG applications. Understand Pinecone vector storage, document embedding pipelines, LangChain agents, and server deployments of AI assistants.',
      icon: 'fa-robot',
    },
    {
      id: 'ws-3',
      title: 'Next.js 16 App Router & High-Performance UI Masterclass',
      category: 'Full Stack Web',
      status: 'RECORDED',
      date: 'Jun 15, 2026',
      time: 'Recorded Bootcamp (2.5 Hrs)',
      location: 'On-Demand HD Video',
      mentor: 'Alex Mercer',
      desc: 'Migrate React apps to Next.js App Router. Master Server Components, Turbopack, dynamic routes, state optimization, and clean Vercel deployments.',
      icon: 'fa-code',
      videoUrl: 'https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1',
    },
    {
      id: 'ws-4',
      title: 'Enterprise ERP Implementation & Data Migration Seminar',
      category: 'ERP Systems',
      status: 'UPCOMING',
      date: 'Sep 20, 2026',
      time: '11:00 AM - 3:00 PM IST',
      location: 'Hybrid (Noida Campus & Online)',
      mentor: 'Yogendra Singh',
      desc: 'Deep dive into JCRM ERP module integration, HRMS database schemas, financial ledger auditing, and multi-tenant security architecture.',
      icon: 'fa-layer-group',
    },
    {
      id: 'ws-5',
      title: 'Cyber Security Penetration Testing & API Hardening',
      category: 'Security & QA',
      status: 'RECORDED',
      date: 'May 28, 2026',
      time: 'Recorded Masterclass (3.0 Hrs)',
      location: 'On-Demand Video Track',
      mentor: 'Adityaraj Dwivedi',
      desc: 'Hands-on OWASP Top 10 vulnerability mitigation, Burp Suite API interception, JWT authentication security, and network audit reporting.',
      icon: 'fa-shield-halved',
      videoUrl: 'https://www.youtube.com/embed/AHzgyPR-Cy4?autoplay=1',
    },
    {
      id: 'ws-6',
      title: 'Data Analytics & BigQuery SQL Pipeline Automation',
      category: 'Data Science',
      status: 'UPCOMING',
      date: 'Oct 02, 2026',
      time: '3:00 PM - 7:00 PM IST',
      location: 'Live Virtual Workshop',
      mentor: 'Satyam Upadhyay',
      desc: 'Master SQL aggregation, window functions, BigQuery ML models, and automated Looker Studio executive dashboard creation.',
      icon: 'fa-chart-column',
    },
  ];

  const filterCategories = [
    'All',
    'Live Bootcamps',
    'Upcoming',
    'Recorded Seminars',
    'DevOps & Cloud',
    'AI & Machine Learning',
    'ERP Systems',
  ];

  const filteredWorkshops = workshopList.filter((ws) => {
    // Category Filter
    if (selectedFilter === 'Live Bootcamps' && ws.status !== 'LIVE NOW') return false;
    if (selectedFilter === 'Upcoming' && ws.status !== 'UPCOMING') return false;
    if (selectedFilter === 'Recorded Seminars' && ws.status !== 'RECORDED') return false;
    if (
      !['All', 'Live Bootcamps', 'Upcoming', 'Recorded Seminars'].includes(selectedFilter) &&
      ws.category !== selectedFilter
    ) {
      return false;
    }

    // Search Query
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      ws.title.toLowerCase().includes(q) ||
      ws.desc.toLowerCase().includes(q) ||
      ws.mentor.toLowerCase().includes(q) ||
      ws.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Section Pane */}
        <div className={styles.glassPane}>
          {/* Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              Technical &amp; ERP <span className={styles.titleHighlight}>Workshops</span>
            </h1>
            <p className={styles.subtitle}>
              Interactive bootcamps, hands-on masterclasses, and corporate tech seminars hosted by industry leaders.
            </p>
          </div>

          {/* Controls Bar (Filter Chips + Search Input) */}
          <div className={styles.controlsRow}>
            <div className={styles.filterChips}>
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.chip} ${selectedFilter === cat ? styles.activeChip : ''}`}
                  onClick={() => setSelectedFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <i className="fa-solid fa-magnifying-glass" />
              <input
                type="text"
                placeholder="Search workshops or mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* 3-Column Workshop Cards Grid */}
          <div className={styles.grid}>
            {filteredWorkshops.map((ws) => (
              <div key={ws.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <i className={`fa-solid ${ws.icon}`} />
                  </div>
                  <span
                    className={`${styles.statusBadge} ${
                      ws.status === 'LIVE NOW'
                        ? styles.statusLive
                        : ws.status === 'UPCOMING'
                        ? styles.statusUpcoming
                        : styles.statusCompleted
                    }`}
                  >
                    {ws.status === 'LIVE NOW' && <span className={styles.liveDot} />}
                    {ws.status}
                  </span>
                </div>

                <div className={styles.cardBody}>
                  <h2 className={styles.workshopTitle}>{ws.title}</h2>
                  <p className={styles.desc}>{ws.desc}</p>

                  <div className={styles.metaList}>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-calendar" />
                      <span>{ws.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-clock" />
                      <span>{ws.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <i className="fa-solid fa-location-dot" />
                      <span>{ws.location}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-user" />
                      <span>Mentor: {ws.mentor}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  {ws.status === 'RECORDED' && ws.videoUrl ? (
                    <button
                      type="button"
                      className={styles.recordingBtn}
                      onClick={() => setActiveVideoUrl(ws.videoUrl!)}
                    >
                      <i className="fa-brands fa-youtube" />
                      <span>Watch Recording</span>
                    </button>
                  ) : (
                    <Link
                      href={`/contact-us?workshop=${encodeURIComponent(ws.title)}`}
                      className={styles.actionBtn}
                    >
                      <span>Reserve Seat Now</span>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* In-Tab Video Player Modal - Appended directly to document.body */}
      {activeVideoUrl &&
        isMounted &&
        createPortal(
          <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
              <button
                className={styles.closeModalBtn}
                onClick={() => setActiveVideoUrl(null)}
                aria-label="Close video player"
              >
                <i className="fa-solid fa-xmark" />
              </button>
              <iframe
                src={activeVideoUrl}
                className={styles.videoIframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Workshop Video Player"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
