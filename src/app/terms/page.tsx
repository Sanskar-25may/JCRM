'use client';

import React from 'react';
import styles from './terms.module.css';

export default function Terms() {
  return (
    <div className={styles.termsPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Terms &amp; Legal Policies</h1>
          <p className="reveal delay-1">Privacy Policy, Terms of Service, and Disclaimer</p>
        </div>
      </section>

      {/* Policies Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <div className={`${styles.section} reveal`}>
              <h2>Privacy Policy</h2>
              <p className={styles.date}>Last Updated: June 1, 2026</p>
              <p>
                At JCRM Technologies Private Limited, we prioritize the privacy of our clients, trainees, and website visitors. We collect name, email, phone number, and professional documents (such as resumes) solely for ERP demo setup and talent network registrations.
              </p>
              <p>
                Your data is stored securely in role-based encrypted databases and is never sold, shared, or distributed to third-party marketing services without your explicit consent.
              </p>
            </div>

            <hr className={styles.divider} />

            <div className={`${styles.section} reveal`}>
              <h2>Terms of Service</h2>
              <p className={styles.date}>Last Updated: June 1, 2026</p>
              <p>
                By enrolling in our internship and training programs or requesting custom ERP solutions, you agree to comply with JCRM Technologies Pvt Ltd intellectual property guidelines. The course syllabus, live code repositories, and ERP custom code modules are protected by copyright laws.
              </p>
              <p>
                Trainees are prohibited from distributing proprietary JCRM ERP codes, database schemas, or learning course modules externally without prior written approval from the directors.
              </p>
            </div>

            <hr className={styles.divider} />

            <div className={`${styles.section} reveal`}>
              <h2>Disclaimer</h2>
              <p className={styles.date}>Last Updated: June 1, 2026</p>
              <p>
                JCRM Technologies makes every effort to secure placement interviews through our dedicated partner networks. However, course completion certificates do not guarantee employment, as successful placements depend entirely on the candidate&apos;s interview performance and mock rounds.
              </p>
              <p>
                Our ERP applications are delivered as-is with ongoing maintenance contracts. JCRM Technologies does not assume liability for operational downtime caused by client-managed server hosting or cloud credentials anomalies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
