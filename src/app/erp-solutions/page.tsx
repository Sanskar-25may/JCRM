'use client';

import React from 'react';
import Link from 'next/link';
import { mockErpProducts } from '@/data/mockData';
import styles from './erpsolutions.module.css';

export default function ErpSolutions() {
  return (
    <div className={styles.erpPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Enterprise ERP Solutions</h1>
          <p className="reveal delay-1">Secure, cloud-ready, and purpose-built software systems designed to scale your operations</p>
        </div>
      </section>

      {/* Main Grid: Sidebar Index & Product Details */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.layout}>
            {/* Sidebar Navigation Index */}
            <aside className={styles.sidebar}>
              <h5 className={styles.indexTitle}>ERP Catalog</h5>
              <div className={styles.indexLinks}>
                {mockErpProducts.map((prod) => (
                  <a key={prod.id} href={`#${prod.id}`} className={styles.indexLink}>
                    <i className="fa-solid fa-angle-right me-2"></i> {prod.name.split(' (')[0]}
                  </a>
                ))}
              </div>
            </aside>

            {/* Products Detail Column */}
            <div className={styles.detailsCol}>
              {mockErpProducts.map((prod) => (
                <div key={prod.id} id={prod.id} className={`${styles.productSection} reveal`}>
                  <div className={styles.productHeader}>
                    <div className={styles.titleArea}>
                      <div className={styles.iconBox}>
                        <i className={`fa-solid ${prod.icon}`}></i>
                      </div>
                      <div>
                        <h2>{prod.name}</h2>
                        <span className={styles.badge}>{prod.badge}</span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.description}>{prod.description}</p>

                  <div className={styles.featuresSection}>
                    <h4>Key System Modules &amp; Capabilities</h4>
                    <div className={styles.featuresGrid}>
                      {prod.features?.map((feat, idx) => (
                        <div key={idx} className={styles.featureItem}>
                          <i className="fa-solid fa-circle-check"></i>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <Link href="/contact-us?product=lms" className="btnCustom btnGold">
                      Request Demo <i className="fa-solid fa-arrow-pointer ms-1"></i>
                    </Link>
                  </div>
                  <hr className={styles.divider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
