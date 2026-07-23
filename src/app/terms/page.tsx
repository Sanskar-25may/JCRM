'use client';

import React from 'react';
import Link from 'next/link';
import styles from './terms.module.css';

export default function Terms() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.docCard}>
          <div className={styles.docHeader}>
            <h1 className={styles.title}>Terms &amp; Conditions</h1>
            <p className={styles.effectiveDate}>Effective Date: 15 June 2024</p>
            <p className={styles.preamble}>
              These Terms &amp; Conditions govern all services provided by JCRM Technologies for enterprise clients, trainees, and job candidates accessing our platforms.
            </p>
          </div>

          <div className={styles.sectionsList}>
            {/* 1. Eligibility */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. Eligibility</h2>
              <p className={styles.sectionText}>
                Applicants and trainees must be legally qualified to enter into a binding agreement. The Company reserves the right to decline or terminate enrollment based on incomplete or inaccurate information provided during application.
              </p>
            </div>

            {/* 2. Client Services */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. Client Services</h2>
              <p className={styles.sectionText}>
                All project scopes, deliverables, and timelines are detailed in the respective service level agreements (SLA). Modifications or additions outside the scope of a project may be subject to additional fees and adjusted timelines. JCRM Technologies retains ownership of proprietary codebase modules until full project fees are settled.
              </p>
            </div>

            {/* 3. Training and Internship */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Training and Internship</h2>
              <p className={styles.sectionText}>
                Admission to training and internship programs is subject to enrollment criteria and seat availability. Participants are expected to maintain satisfactory progress and attendance throughout the duration of the program. Certificates will only be awarded upon successful completion of required coursework and projects.
              </p>
            </div>

            {/* 4. Placement Assistance */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. Placement Assistance</h2>
              <p className={styles.sectionText}>
                Placement assistance is provided for eligible candidates who successfully complete training and pass internal mock evaluations. While we actively connect candidates with hiring partners, employment is subject to candidate performance and hiring partner requirements.
              </p>
            </div>

            {/* 5. Project Work */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>5. Project Work</h2>
              <p className={styles.sectionText}>
                Projects, source code, and frameworks created during training remain intellectual property of JCRM Technologies unless explicit license rights are granted in writing.
              </p>
            </div>

            {/* 6. Refund Policy */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>6. Refund Policy</h2>
              <p className={styles.sectionText}>
                All payments made towards training or services are non-refundable after commencement of the program or project.
              </p>
            </div>

            {/* 7. Confidentiality */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>7. Confidentiality</h2>
              <p className={styles.sectionText}>
                All parties agree to preserve strict confidentiality regarding proprietary software, client data, and business operations disclosed during training or client projects.
              </p>
            </div>

            {/* 8. Limitation of Liability */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>8. Limitation of Liability</h2>
              <p className={styles.sectionText}>
                JCRM Technologies shall not be liable for indirect, incidental, or consequential damages resulting from third-party server downtime, data loss, or external market conditions.
              </p>
            </div>

            {/* 9. Termination */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>9. Termination</h2>
              <p className={styles.sectionText}>
                JCRM reserves the right to terminate access to training portals or client services in cases of policy breach, non-payment, or unauthorized code distribution.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>10. Governing Law</h2>
              <p className={styles.sectionText}>
                These Terms &amp; Conditions are governed by the laws of India. Any legal disputes shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </div>

            {/* 11. Modifications */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>11. Modifications</h2>
              <p className={styles.sectionText}>
                JCRM reserves the right to update or modify these Terms &amp; Conditions at any time. Notice of revisions will be updated on this page.
              </p>
            </div>

            {/* 12. Contact */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>12. Contact</h2>
              <div className={styles.contactBlock}>
                <strong>JCRM Technologies</strong>
                <br />
                404, 1st floor, 4th A Cross Rd, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043
                <br />
                Email: hr@jcrm.in
                <br />
                Phone: +91 8310531309
              </div>
            </div>
          </div>

          <div className={styles.btnBox}>
            <Link href="/" className={styles.backHomeBtn}>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
