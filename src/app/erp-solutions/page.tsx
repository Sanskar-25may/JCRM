'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { mockErpProducts } from '@/data/mockData';
import styles from './erpsolutions.module.css';

export default function ErpSolutions() {
  const [activeId, setActiveId] = useState<string>(mockErpProducts[0]?.id || 'lms');

  // Automatically track scroll position to update active catalog item as user scrolls
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    mockErpProducts.forEach((prod) => {
      const el = document.getElementById(prod.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSelectCatalog = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Header Banner Matching Homepage */}
        <div className={styles.glassBanner}>
          <h1 className={styles.bannerTitle}>
            Enterprise ERP <span className={styles.titleHighlight}>Solutions</span>
          </h1>
          <p className={styles.bannerSubtitle}>
            Secure, cloud-ready, and purpose-built software systems designed to scale your operations.
          </p>
        </div>

        {/* 2-Column Split Content: Stationary Sticky ERP CATALOG Side Panel + Movable Details Column */}
        <div className={styles.contentGrid}>
          {/* Stationary Sticky ERP CATALOG Side Panel */}
          <aside className={styles.sidePanel}>
            <div className={styles.panelHeader}>
              <i className={`fa-solid fa-layer-group ${styles.panelIcon}`} />
              <h2 className={styles.panelTitle}>ERP CATALOG</h2>
            </div>
            <nav className={styles.catalogMenu}>
              {mockErpProducts.map((prod) => {
                const shortName = prod.name.split(' (')[0];
                const isActive = activeId === prod.id;
                return (
                  <button
                    key={prod.id}
                    type="button"
                    className={`${styles.menuItem} ${isActive ? styles.activeMenuItem : ''}`}
                    onClick={() => handleSelectCatalog(prod.id)}
                  >
                    <span>{shortName}</span>
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Movable ERP Product Details Column */}
          <main className={styles.detailsCol}>
            {mockErpProducts.map((prod) => (
              <article key={prod.id} id={prod.id} className={styles.erpCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconBox}>
                    <i className={`fa-solid ${prod.icon}`} />
                  </div>
                  <div className={styles.titleArea}>
                    <h2 className={styles.cardTitle}>{prod.name}</h2>
                    {prod.badge && <span className={styles.badge}>{prod.badge}</span>}
                  </div>
                </div>

                <p className={styles.description}>{prod.description}</p>

                {prod.features && prod.features.length > 0 && (
                  <div className={styles.featuresSection}>
                    <h3 className={styles.featuresTitle}>KEY SYSTEM MODULES &amp; CAPABILITIES</h3>
                    <div className={styles.featuresGrid}>
                      {prod.features.map((feat, idx) => (
                        <div key={idx} className={styles.featureItem}>
                          <i className="fa-solid fa-circle-check" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className={styles.cardActions}>
                  <Link href={`/contact-us?product=${prod.id}`} className={styles.demoBtn}>
                    <span>Request Demo</span>
                    <i className="fa-solid fa-arrow-pointer" />
                  </Link>
                </div>
              </article>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
