'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockErpProducts } from '@/data/mockData';
import styles from './erpsolutions.module.css';

export default function ErpSolutions() {
  const [activeId, setActiveId] = useState<string>(mockErpProducts[0]?.id || 'lms');

  const selectedProduct =
    mockErpProducts.find((prod) => prod.id === activeId) || mockErpProducts[0];

  const activeIndex = mockErpProducts.findIndex((prod) => prod.id === activeId);

  const handlePrev = () => {
    const prevIdx = activeIndex === 0 ? mockErpProducts.length - 1 : activeIndex - 1;
    setActiveId(mockErpProducts[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = activeIndex === mockErpProducts.length - 1 ? 0 : activeIndex + 1;
    setActiveId(mockErpProducts[nextIdx].id);
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

        {/* Dedicated 2-Column App View: Fixed ERP CATALOG Side Panel + Dedicated Active ERP Tab */}
        <div className={styles.contentGrid}>
          {/* Left Column: Fixed ERP CATALOG Side Panel */}
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
                    onClick={() => setActiveId(prod.id)}
                  >
                    <span>{shortName}</span>
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right Column: Dedicated Active ERP Solution Display */}
          <main className={styles.detailsCol}>
            <article key={selectedProduct.id} className={styles.activeErpCard}>
              {/* Navigation Header between ERPs */}
              <div className={styles.cardTopNav}>
                <span className={styles.erpCount}>
                  ERP System {activeIndex + 1} of {mockErpProducts.length}
                </span>
                <div className={styles.navBtnGroup}>
                  <button
                    type="button"
                    className={styles.prevNextBtn}
                    onClick={handlePrev}
                    title="Previous ERP"
                  >
                    <i className="fa-solid fa-chevron-left" /> Previous
                  </button>
                  <button
                    type="button"
                    className={styles.prevNextBtn}
                    onClick={handleNext}
                    title="Next ERP"
                  >
                    Next <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
              </div>

              {/* Main Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <i className={`fa-solid ${selectedProduct.icon}`} />
                </div>
                <div className={styles.titleArea}>
                  <h2 className={styles.cardTitle}>{selectedProduct.name}</h2>
                  {selectedProduct.badge && (
                    <span className={styles.badge}>{selectedProduct.badge}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className={styles.description}>{selectedProduct.description}</p>

              {/* Features Grid */}
              {selectedProduct.features && selectedProduct.features.length > 0 && (
                <div className={styles.featuresSection}>
                  <h3 className={styles.featuresTitle}>KEY SYSTEM MODULES &amp; CAPABILITIES</h3>
                  <div className={styles.featuresGrid}>
                    {selectedProduct.features.map((feat, idx) => (
                      <div key={idx} className={styles.featureItem}>
                        <i className="fa-solid fa-circle-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Action */}
              <div className={styles.cardActions}>
                <Link
                  href={`/contact-us?product=${selectedProduct.id}`}
                  className={styles.demoBtn}
                >
                  <span>Request Demo for {selectedProduct.name.split(' (')[0]}</span>
                  <i className="fa-solid fa-arrow-pointer" />
                </Link>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
