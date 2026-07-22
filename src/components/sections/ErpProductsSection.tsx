'use client';

import React from 'react';
import Link from 'next/link';
import { mockErpProducts } from '@/data/mockData';
import styles from './ErpProductsSection.module.css';

export default function ErpProductsSection() {
  return (
    <section className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.glassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h2 className={styles.title}>
              Our <span className={styles.titleHighlight}>ERP Products</span>
            </h2>
            <p className={styles.subtitle}>
              Purpose-built solutions for every business need
            </p>
          </div>

          {/* Efficient Dynamic Grid (Auto-arranging cards for CMS expansion) */}
          <div className={styles.grid}>
            {mockErpProducts.map((product) => (
              <Link
                key={product.id}
                href="/erp-solutions"
                className={styles.card}
              >
                <div className={styles.iconBox}>
                  <i className={`fa-solid ${product.icon}`} />
                </div>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <div className={styles.tagline}>
                  Secure • Scalable • User-Friendly
                </div>
                <p className={styles.cardDescription}>{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
