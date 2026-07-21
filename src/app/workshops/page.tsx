'use client';

import React from 'react';
import Link from 'next/link';
import styles from './workshops.module.css';

export default function Workshops() {
  const workshops = [
    {
      title: 'Docker & Kubernetes Orchestration Masterclass',
      status: 'Live & Registering',
      date: 'Aug 10, 2026',
      time: '10:00 AM - 4:00 PM IST',
      mentor: 'Yogendra Singh',
      desc: 'Learn containerization from scratch. Write Dockerfiles, build multi-stage builds, push images, and orchestrate pod replicas in a Kubernetes cluster.',
      icon: 'fa-cubes',
    },
    {
      title: 'Generative AI & LangChain Application Architectures',
      status: 'Upcoming',
      date: 'Sep 05, 2026',
      time: '2:00 PM - 6:00 PM IST',
      mentor: 'Dr. Sarah Connor',
      desc: 'Build RAG apps. Understand Pinecone vector storage, document embedding models, LangChain chains, and server deployments of AI chat assistants.',
      icon: 'fa-robot',
    },
    {
      title: 'Next.js App Router, TypeScript & Tailwind CSS',
      status: 'Completed (Recorded)',
      date: 'Jun 15, 2026',
      time: 'Completed',
      mentor: 'Alex Mercer',
      desc: 'Migrate classic React apps to Next.js. Master Server Components, dynamic routes, state optimization, and clean deployment pipelines to Vercel.',
      icon: 'fa-code',
    },
  ];

  return (
    <div className={styles.workshopPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Technical Workshops</h1>
          <p className="reveal delay-1">Learn critical cloud, programming, and AI tools in hands-on practical masterclasses</p>
        </div>
      </section>

      {/* Workshop List */}
      <section className={styles.listSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {workshops.map((ws, idx) => (
              <div key={ws.title} className={`${styles.card} reveal`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <i className={`fa-solid ${ws.icon}`}></i>
                  </div>
                  <span
                    className={`${styles.statusBadge} ${
                      ws.status.includes('Live') ? styles.statusLive :
                      ws.status.includes('Upcoming') ? styles.statusUpcoming :
                      styles.statusCompleted
                    }`}
                  >
                    {ws.status}
                  </span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.title}>{ws.title}</h3>
                  <p className={styles.desc}>{ws.desc}</p>

                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-calendar"></i>
                      <span>{ws.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-clock"></i>
                      <span>{ws.time}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <i className="fa-regular fa-user"></i>
                      <span>Mentor: {ws.mentor}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  {ws.status.includes('Completed') ? (
                    <a href="https://youtu.be/AHzgyPR-Cy4?feature=shared" target="_blank" rel="noopener noreferrer" className="btnCustom btnOutlineGold w-100 justify-content-center">
                      Watch Recording
                    </a>
                  ) : (
                    <Link href="/joinus" className="btnCustom btnGold w-100 justify-content-center">
                      Reserve Seat Now
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
