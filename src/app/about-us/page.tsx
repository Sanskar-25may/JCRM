'use client';

import React from 'react';
import styles from './aboutus.module.css';

export default function AboutUs() {
  const trustPartners = [
    { name: 'Partner 1', url: 'https://jcrm.in/assets/img/trust%20%281%29.png' },
    { name: 'Partner 2', url: 'https://jcrm.in/assets/img/trust%20%282%29.png' },
    { name: 'Partner 3', url: 'https://jcrm.in/assets/img/trust%20%283%29.png' },
    { name: 'Partner 4', url: 'https://jcrm.in/assets/img/trust%20%284%29.png' },
    { name: 'Partner 5', url: 'https://jcrm.in/assets/img/trust%20%285%29.png' },
    { name: 'Partner 6', url: 'https://jcrm.in/assets/img/trust%20%286%29.png' },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">About JCRM Technologies</h1>
          <p className="reveal delay-1">Driving Enterprise Innovation & Empowering IT Careers</p>
        </div>
      </section>

      {/* Intro Content */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={`${styles.left} reveal`}>
              <div className={styles.imageWrapper}>
                <img
                  src="https://jcrm.in/assets/img/about-img.jpg"
                  onError={(e) => {
                    // Fallback to stock illustration if the jpg is not live
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }}
                  alt="Team Collaboration"
                  className={styles.introImg}
                />
              </div>
            </div>
            <div className={`${styles.right} reveal delay-1`}>
              <span className={styles.badge}>WHO WE ARE</span>
              <h2>Enhance Your Skills & Scale Your Business Operation</h2>
              <p className={styles.text}>
                At JCRM Technologies, we operate at the intersection of business automation and professional career building. We believe that modern enterprises deserve smart, secure, and custom-tailored ERP workflows, while developers deserve practical, live-project-driven mentorship to build robust careers in IT.
              </p>
              <div className={styles.featureBox}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
                <div className={styles.featureText}>
                  <h5>Enterprise-Grade Syllabus</h5>
                  <p>Our courses are crafted by active developers using AWS, Python, React, and Terraform.</p>
                </div>
              </div>
              <div className={styles.featureBox}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-infinity"></i>
                </div>
                <div className={styles.featureText}>
                  <h5>Life-Long Career Guidance</h5>
                  <p>Gain access to resume-building rounds, mock interviews, and our hiring partner database.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.visionMission}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            <div className={`${styles.visionCard} reveal`}>
              <i className="fa-solid fa-eye"></i>
              <h3>Our Vision</h3>
              <p>
                To be the globally trusted standard in cloud-native business automation systems and a launchpad for world-class developer talent.
              </p>
            </div>
            <div className={`${styles.missionCard} reveal delay-1`}>
              <i className="fa-solid fa-bullseye"></i>
              <h3>Our Mission</h3>
              <p>
                To build secure, fast, and scalable enterprise ERP products that streamline complex workflows, and to equip learners with direct, hands-on, job-oriented technical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className={styles.trust}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <span className={styles.badge}>OUR PARTNERS</span>
            <h2>Trusted By Leading Organizations</h2>
            <p className={styles.subtitle}>We collaborate with verified tech partners to facilitate excellent student placements.</p>
          </div>
          <div className={styles.partnerLogoGrid}>
            {trustPartners.map((partner, idx) => (
              <div key={idx} className={styles.logoCard}>
                <img
                  src={partner.url}
                  alt={partner.name}
                  className={styles.partnerImg}
                  onError={(e) => {
                    // Fallback to text box if image doesn't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const textSpan = document.createElement('span');
                      textSpan.innerText = `Partner Logo #${idx + 1}`;
                      textSpan.className = styles.fallbackText;
                      parent.appendChild(textSpan);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
