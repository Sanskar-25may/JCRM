'use client';

import React from 'react';
import Link from 'next/link';
import styles from './disclaimer.module.css';

export default function Disclaimer() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.docCard}>
          <div className={styles.docHeader}>
            <h1 className={styles.title}>
              Website <span className={styles.titleHighlight}>Disclaimer</span>
            </h1>
            <p className={styles.effectiveDate}>Effective Date: 15 June 2024</p>
            <p className={styles.preamble}>
              The information provided on this website by JCRM Technologies Private Limited (&quot;JCRM&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is for general informational, educational, and corporate demonstration purposes only. All content on this site is published in good faith.
            </p>
          </div>

          <div className={styles.sectionsList}>
            {/* 1. General Information Disclaimer */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. General Information</h2>
              <p className={styles.sectionText}>
                While we endeavor to keep all information, course details, ERP software features, and company specifications accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability with respect to the website or the information contained on the website for any purpose.
              </p>
            </div>

            {/* 2. Educational & Career Placement Disclaimer */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. Educational &amp; Placement Outcomes</h2>
              <p className={styles.sectionText}>
                Participation in JCRM training programs, bootcamps, or internships is designed to provide practical, industry-aligned software engineering skills. While placement assistance and candidate scheduling are provided through JCRM Talent Desk, employment outcomes depend on individual student performance, interview evaluations, and hiring partner prerequisites.
              </p>
            </div>

            {/* 3. ERP Software Demonstrations */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Enterprise ERP Software Demonstrations</h2>
              <p className={styles.sectionText}>
                Software module descriptions, screenshots, interactive demos, and pricing models displayed on this website represent sample enterprise configurations. Final project deliverables, system SLAs, custom feature development, and cloud hosting terms are governed exclusively by formal Service Level Agreements (SLAs) executed between JCRM Technologies and the client.
              </p>
            </div>

            {/* 4. External Links Disclaimer */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. External Hyperlinks</h2>
              <p className={styles.sectionText}>
                This website may contain links to external third-party websites or services (e.g., video demonstration streams, cloud storage providers, or partner portals) that are not owned or controlled by JCRM. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites.
              </p>
            </div>

            {/* 5. Intellectual Property Rights */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>5. Intellectual Property &amp; Trademarks</h2>
              <p className={styles.sectionText}>
                All trademarks, service marks, logos, software codebase modules, course materials, and visual design assets featured on this site are the exclusive intellectual property of JCRM Technologies Private Limited unless explicitly credited otherwise. Unauthorized copying or redistribution is strictly prohibited.
              </p>
            </div>

            {/* 6. Limitation of Liability */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
              <p className={styles.sectionText}>
                In no event shall JCRM Technologies, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, or use of, this website or reliance on any material contained herein.
              </p>
            </div>

            {/* 7. Contact Information */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>7. Contact Us</h2>
              <div className={styles.contactBlock}>
                <strong>JCRM Technologies Private Limited</strong>
                <br />
                404, 1st Floor, 4th A Cross Rd, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043
                <br />
                Corporate Email: hr@jcrm.in | info@jcrm.in
                <br />
                Support Helpline: +91 8310531309
              </div>
            </div>
          </div>

          <div className={styles.btnBox}>
            <Link href="/" className={styles.backHomeBtn}>
              <i className="fa-solid fa-arrow-left" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
