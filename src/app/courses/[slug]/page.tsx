'use client';

import React, { use, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockCourses } from '@/data/mockData';
import styles from './courseDetail.module.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { slug } = use(params);
  
  // Find matching course or construct fallback matching slug
  const matchedCourse = mockCourses.find(
    (c) => c.id.toLowerCase() === slug.toLowerCase()
  );

  const course = matchedCourse || {
    id: slug,
    title: slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    heroTagline: 'Master Next-Gen Tech Skills & Secure 100% Placement',
    icon: '💻',
    description:
      'Engineered to meet modern enterprise demands, this program focuses heavily on hands-on practical exercises, live project implementation, and 1-on-1 industry mentorship.',
    badge: 'Popular Program',
    duration: '90 Days',
    instructor: {
      name: 'Alex Mercer',
      role: 'Lead Architect & Senior Tech Mentor at JCRM Technologies',
      experience: '12+ Years Industry Experience',
      imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
    },
  };

  // State to handle accordion toggles for week-wise modules
  const [expandedWeeks, setExpandedWeeks] = useState<{ [key: number]: boolean }>({
    0: true, // First week expanded by default
  });

  const toggleWeek = (index: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // 1. Tagline logic
  const titleTagline =
    course.heroTagline ||
    (course.id === 'personality-development'
      ? 'Transform Yourself in 90 Days'
      : course.id === 'ai-ml'
      ? 'Master Next-Gen Artificial Intelligence'
      : course.id === 'frontend'
      ? 'Build Modern Scalable Web Interfaces'
      : course.id === 'backend'
      ? 'Architect Secure Enterprise Cloud APIs'
      : 'Master Real-World Enterprise Skills');

  // 2. Gains pillars (Matching Screenshot 2)
  const defaultGains = [
    {
      icon: 'fa-microphone',
      title: 'Communication & Technical Presentation',
      desc: 'Master verbal, written, and technical presentation skills to articulate complex architectural decisions confidently in corporate rounds.',
    },
    {
      icon: 'fa-user-tie',
      title: 'Leadership & Real-World System Design',
      desc: 'Learn team collaboration, agile project management, decision-making, and production system design on live ERP platforms.',
    },
    {
      icon: 'fa-star',
      title: 'Confidence Building & Placement Assurance',
      desc: 'Enhance self-confidence through mock interviews, resume refinement, portfolio building, and guaranteed 100% placement support.',
    },
  ];

  const gains = course.gains || defaultGains;

  // 3. Week-wise development modules (Matching Screenshot 3)
  const defaultModules = [
    {
      week: 'Week 1',
      title: 'Self Awareness, Architecture & Goal Setting',
      description:
        'Industry overview, identifying core strengths, setting performance benchmarks, environment setup, and fundamental architecture walkthrough.',
    },
    {
      week: 'Week 2',
      title: 'Core Technical Command & Hands-on Coding',
      description:
        'Deep dive into essential tools, syntax, design patterns, data handling, and building robust components from scratch.',
    },
    {
      week: 'Week 3',
      title: 'Advanced System Integration & API Workflows',
      description:
        'Integrating backend microservices, database schemas, authentication layers, state management, and real-time data streams.',
    },
    {
      week: 'Week 4',
      title: 'Real-World ERP & Live Project Implementation',
      description:
        'Collaborative team sprint building live ERP modules, code reviews, bug hunting, and automated testing frameworks.',
    },
    {
      week: 'Week 5',
      title: 'Performance Optimization & Cloud Deployment',
      description:
        'Containerization with Docker, CI/CD pipeline automation, caching strategies, security audits, and cloud hosting.',
    },
    {
      week: 'Week 6',
      title: 'Interview Preparation & Portfolio Finalization',
      description:
        'Technical mock interviews, hiring manager Q&A strategies, portfolio website deployment, and resume design.',
    },
    {
      week: 'Week 7',
      title: 'Professional Etiquette & Hiring Partner Referrals',
      description:
        'LinkedIn networking strategies, corporate communication etiquette, salary negotiation, and direct hiring referrals.',
    },
    {
      week: 'Week 8',
      title: 'Final Assessment & Placement Certification',
      description:
        'Capstone project defense, final technical evaluation, issuance of verified industry certificate, and onboarding support.',
    },
  ];

  const modules = course.weeklyModules || defaultModules;

  // Instructor details
  const instructor = course.instructor || {
    name: 'Alex Mercer',
    role: 'Lead Architect & Senior Tech Mentor at JCRM Technologies',
    experience: '10+ Years Industry Experience',
    imgUrl: 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg',
  };

  const scrollToLastCall = () => {
    const el = document.getElementById('last-call-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* ==================================================================
           SECTION 1: COURSE HERO SECTION (Glassmorphic Pane)
           ================================================================== */}
        <div className={styles.heroPane}>
          <div className={styles.heroBadge}>
            <i className="fa-solid fa-graduation-cap" />
            <span>{course.badge || `${course.duration || '90 Days'} Program`}</span>
          </div>

          <h1 className={styles.heroTitle}>
            {course.title} — <span className={styles.heroTagline}>{titleTagline}</span>
          </h1>

          <p className={styles.heroSubtitle}>{course.description}</p>

          <button className={styles.enrollHeroBtn} onClick={scrollToLastCall}>
            <i className="fa-solid fa-paper-plane" />
            <span>Enroll Now</span>
          </button>
        </div>

        {/* ==================================================================
           SECTION 2: WHAT WILL YOU GAIN SECTION
           ================================================================== */}
        <div className={styles.gainsSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              🌟 {course.duration || '90 Days'} {course.title} Program Gains
            </h2>
          </div>

          <div className={styles.gainsGrid}>
            {gains.map((gain, idx) => (
              <div key={idx} className={styles.gainCard}>
                <div className={styles.gainIconBox}>
                  <i className={`fa-solid ${gain.icon}`} />
                </div>
                <h3 className={styles.gainTitle}>{gain.title}</h3>
                <p className={styles.gainDesc}>{gain.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================================
           SECTION 3: WEEK-WISE DEVELOPMENT MODULES SECTION
           ================================================================== */}
        <div className={styles.modulesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              📘 Week-wise Development Modules
            </h2>
          </div>

          <div className={styles.modulesList}>
            {modules.map((mod, idx) => {
              const isExpanded = !!expandedWeeks[idx];
              return (
                <div key={idx} className={styles.moduleBlock}>
                  <button
                    className={styles.moduleHeader}
                    onClick={() => toggleWeek(idx)}
                    aria-expanded={isExpanded}
                  >
                    <div className={styles.moduleHeaderLeft}>
                      <i
                        className={`fa-solid fa-caret-right ${styles.playArrow} ${
                          isExpanded ? styles.expanded : ''
                        }`}
                      />
                      <span className={styles.moduleWeekTitle}>
                        {mod.week} - {mod.title}
                      </span>
                    </div>
                  </button>

                  {isExpanded && (
                    <div className={styles.moduleBody}>
                      <p>{mod.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================================
           SECTION 4: TRAINER / INSTRUCTOR INFO SECTION
           ================================================================== */}
        <div className={styles.instructorSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              👨‍🏫 Learn From Industry Experts
            </h2>
          </div>

          <div className={styles.instructorCard}>
            <div className={styles.instructorPhotoFrame}>
              <img
                src={instructor.imgUrl}
                alt={instructor.name}
                className={styles.instructorPhoto}
                onError={(e) => {
                  e.currentTarget.src =
                    'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg';
                }}
              />
            </div>
            <div className={styles.instructorDetails}>
              <h3 className={styles.instructorName}>{instructor.name}</h3>
              <div className={styles.instructorRole}>{instructor.role}</div>
              <p className={styles.instructorBio}>
                {instructor.experience
                  ? instructor.experience
                  : 'Experienced Tech Lead with a proven track record of mentoring top software engineers and architects at global firms.'}
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================================
           SECTION 5: LAST CALL / CONCLUDE SECTION (Golden Glass Pane)
           ================================================================== */}
        <div id="last-call-section" className={styles.lastCallPane}>
          <h2 className={styles.lastCallTitle}>
            Unlock Your Potential & Build a Better Future
          </h2>
          <p className={styles.lastCallSubtitle}>
            Develop confidence, technical command, leadership, and professional excellence through our comprehensive {course.title} Program.
          </p>

          <div className={styles.lastCallBtnGroup}>
            <Link href="/join-us" className={styles.enrollBtnPrimary}>
              <i className="fa-solid fa-user-check" />
              <span>Enroll Now</span>
            </Link>
            <a
              href="https://jcrm.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.syllabusBtnSecondary}
            >
              <i className="fa-solid fa-file-pdf" />
              <span>Request Syllabus PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
