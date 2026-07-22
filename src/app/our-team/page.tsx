'use client';

import React from 'react';
import styles from './ourteam.module.css';

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Yogendra Singh',
      role: 'Founder & Director',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1783926278/jcrm/profile/wujkoqgrbnaxd3xteoca.jpg',
      bio: 'Yogendra leads the strategic direction of JCRM Technologies, driving ERP deployment architectures and corporate alliances across India.',
    },
    {
      name: 'Samantha Ray',
      role: 'Co-Founder & Chief HR Officer',
      imgUrl: 'https://jcrm.in/uploads/profile/1770543699_858dc4b8834b55529273.jpeg',
      bio: 'Samantha manages our hiring partner network, matching trained candidates to prospective companies and handling organizational recruitment.',
    },
    {
      name: 'Dr. Sarah Connor',
      role: 'Principal AI Mentor',
      imgUrl: 'https://jcrm.in/uploads/profile/1779200699_343fb3c993abc88328a5.jpeg',
      bio: 'Sarah leads our machine learning training tracks, focusing on neural network optimizations, PyTorch model flows, and prompt design.',
    },
    {
      name: 'Alex Mercer',
      role: 'Lead Developer & Frontend Mentor',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
      bio: 'Alex guides frontend trainees, sharing his deep knowledge of React component lifecycles, CSS modules, and Next.js SSR implementations.',
    },
  ];

  return (
    <div className={styles.teamPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Meet Our Team</h1>
          <p className="reveal delay-1">Architects, engineers, and mentors committed to business and career transformation</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className={styles.teamList}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {teamMembers.map((member, idx) => (
              <div key={member.name} className={`${styles.card} reveal`} style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className={styles.imgWrapper}>
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className={styles.profileImg}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80';
                    }}
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <span className={styles.role}>{member.role}</span>
                  <p className={styles.bio}>{member.bio}</p>
                  <div className={styles.socials}>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
