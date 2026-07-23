'use client';

import React from 'react';
import Link from 'next/link';
import styles from './privacy.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.docCard}>
          <div className={styles.docHeader}>
            <h1 className={styles.title}>
              Privacy <span className={styles.titleHighlight}>Policy</span>
            </h1>
            <p className={styles.effectiveDate}>Effective Date: 15 June 2024</p>
            <p className={styles.preamble}>
              At JCRM Technologies Private Limited (&quot;JCRM&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to safeguarding the privacy and security of information provided by our enterprise clients, trainees, and website visitors. This Privacy Policy details how we collect, store, utilize, and protect your data.
            </p>
          </div>

          <div className={styles.sectionsList}>
            {/* 1. Information We Collect */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
              <p className={styles.sectionText}>
                We collect personal information necessary to deliver ERP software solutions, corporate training programs, and career placement services. This includes:
              </p>
              <ul className={styles.sectionText} style={{ paddingLeft: '20px' }}>
                <li>Contact Information: Name, work email address, phone/WhatsApp number, and location.</li>
                <li>Corporate &amp; Professional Data: Company name, job title, hiring preferences, education, and technical skill sets.</li>
                <li>System Usage &amp; Logs: IP address, browser metadata, session duration, and interactive feature usage on our web apps.</li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
              <p className={styles.sectionText}>
                The information gathered is utilized strictly for legitimate business purposes:
              </p>
              <ul className={styles.sectionText} style={{ paddingLeft: '20px' }}>
                <li>Provisioning, configuring, and maintaining custom enterprise ERP software suites.</li>
                <li>Enrolling students in IT training bootcamps, workshops, and evaluating project progress.</li>
                <li>Facilitating placement assistance and scheduling candidate interview sessions with partner employers through JCRM company authorization.</li>
                <li>Responding to demo requests, support inquiries, and technical consultation forms.</li>
              </ul>
            </div>

            {/* 3. Data Encryption & Security */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Data Encryption &amp; Security</h2>
              <p className={styles.sectionText}>
                JCRM Technologies implements enterprise-grade SSL/TLS encryption, secure cloud database access controls, and strict non-disclosure policies. Candidate contact details (phone numbers and email addresses) are encrypted and masked on public portals to prevent unauthorized solicitation and preserve company ownership of placement pipelines.
              </p>
            </div>

            {/* 4. Information Sharing & Third Parties */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. Information Sharing &amp; Non-Disclosure</h2>
              <p className={styles.sectionText}>
                We do not sell, rent, or trade your personal information to third-party marketing agencies. Data is shared exclusively with verified hiring partners for job interviews or cloud service providers required to host enterprise ERP infrastructure, subject to strict confidentiality agreements.
              </p>
            </div>

            {/* 5. Cookies & Tracking Technologies */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>5. Cookies &amp; Web Analytics</h2>
              <p className={styles.sectionText}>
                Our website utilizes essential cookies to maintain user authentication sessions, remember filter preferences, and analyze page performance. You may modify your browser settings to disable non-essential cookies.
              </p>
            </div>

            {/* 6. User Rights & Data Retention */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>6. User Rights &amp; Data Retention</h2>
              <p className={styles.sectionText}>
                You retain the right to request access to your stored personal records, request corrections to inaccurate data, or request the deletion of your account records by contacting our Data Officer. We retain records only for as long as necessary to fulfill active service contracts or regulatory requirements.
              </p>
            </div>

            {/* 7. Policy Modifications */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>7. Updates to This Policy</h2>
              <p className={styles.sectionText}>
                JCRM reserves the right to update this Privacy Policy to reflect changing legal standards or platform enhancements. Revised policies will be published on this page with an updated effective date.
              </p>
            </div>

            {/* 8. Contact Information */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>8. Contact Information</h2>
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
