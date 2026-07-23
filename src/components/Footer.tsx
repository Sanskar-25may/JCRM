'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Strip */}
      <div className={styles.topStrip}>
        <div className={styles.container}>
          <span>Empowering Businesses with Smart ERP Solutions</span>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Company Info */}
            <div className={`${styles.col} ${styles.colLarge}`}>
              <div className={styles.brand}>
                <img
                  src="https://jcrm.in/assets/img/logo.jpeg"
                  alt="JCRM Logo"
                  className={styles.logo}
                />
                <h4 className={styles.brandText}>JCRM TECHNOLOGIES</h4>
              </div>
              <p className={styles.description}>
                We build powerful ERP systems and digital solutions that help businesses scale,
                automate workflows, and achieve operational excellence.
              </p>
              <div className={styles.socials}>
                <a
                  href="https://youtu.be/AHzgyPR-Cy4?si=R0mJhdJ3DVLZGhSt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.youtube}`}
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://x.com/Yogsathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.twitter}`}
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/jcrm-technologies-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.linkedin}`}
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/jcrm_technologies?igsh=N2YydHQwdmNxN2Rx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} ${styles.instagram}`}
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.col}>
              <h5 className={styles.heading}>Company</h5>
              <ul className={styles.links}>
                <li>
                  <Link href="/about-us" className={styles.link}>About Us</Link>
                </li>
                <li>
                  <Link href="/courses" className={styles.link}>Courses</Link>
                </li>
                <li>
                  <Link href="/our-team" className={styles.link}>Our Team</Link>
                </li>
                <li>
                  <Link href="/contact-us" className={styles.link}>Contact</Link>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div className={styles.col}>
              <h5 className={styles.heading}>Solutions</h5>
              <ul className={styles.links}>
                <li>
                  <Link href="/erp-solutions" className={styles.link}>ERP Software</Link>
                </li>
                <li>
                  <Link href="/courses" className={styles.link}>Automation</Link>
                </li>
                <li>
                  <Link href="/courses" className={styles.link}>Cloud Services</Link>
                </li>
                <li>
                  <Link href="/workshops" className={styles.link}>Workshops</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className={`${styles.col} ${styles.colLarge}`}>
              <h5 className={styles.heading}>Contact Us</h5>
              <ul className={styles.contactInfo}>
                <li className={styles.contactItem}>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>
                    404, 1st floor, 4th A Cross Rd, HRBR Layout, 2nd Block, Kalyan Nagar, Bengaluru, Karnataka 560043
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:hr@jcrm.in">hr@jcrm.in</a>
                </li>
                <li className={styles.contactItem}>
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+918310531309">+91 8310531309</a>
                </li>
              </ul>

              {/* Newsletter */}
              <form
                className={styles.newsletter}
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                  required
                />
                <button type="submit" className={styles.newsletterBtn}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} JCRM TECHNOLOGIES &bull; All Rights Reserved
            </p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms">Terms &amp; Conditions</Link>
              <span>|</span>
              <Link href="/disclaimer">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
