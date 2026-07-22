'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockCourses } from '@/data/mockData';
import styles from './courseDetail.module.css';

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export default function CourseDetailPage({ params }: PageProps) {
  const { courseId } = use(params);
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return (
    <div className={styles.detailPage}>
      {/* Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <div className={styles.bannerContent}>
            <span className={styles.badge}>{course.badge || 'Professional Course'}</span>
            <h1 className={styles.title}>
              <span className={styles.icon}>{course.icon}</span> {course.title}
            </h1>
            <p className={styles.subtitle}>{course.description}</p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left Content */}
            <div className={styles.leftCol}>
              {/* Overview Image */}
              <div className={styles.imageWrapper}>
                <img
                  src={
                    course.id === 'ai-ml' ? 'https://jcrm.in/uploads/profile/1779200699_343fb3c993abc88328a5.jpeg' :
                    course.id === 'frontend' ? 'https://res.cloudinary.com/dcd2rjd1x/image/upload/v1779995273/jcrm/profile/gcy2wmbjaiscaqyajc0q.jpg' :
                    course.id === 'backend' ? 'https://jcrm.in/uploads/profile/1778152018_e62753474594f2619563.jpg' :
                    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
                  }
                  alt={course.title}
                  className={styles.courseImg}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80';
                  }}
                />
              </div>

              {/* Instructor */}
              {course.instructor && (
                <div className={styles.instructorSection}>
                  <h3>Course Instructor</h3>
                  <div className={styles.instructorCard}>
                    <img
                      src={course.instructor.imgUrl}
                      alt={course.instructor.name}
                      className={styles.instructorImg}
                    />
                    <div className={styles.instructorInfo}>
                      <h5>{course.instructor.name}</h5>
                      <p>{course.instructor.role}</p>
                    </div>
                  </div>
                </div>
              )}

              <hr className={styles.divider} />

              {/* Course Overview */}
              <div className={styles.section}>
                <h3>Course Description</h3>
                <p className={styles.text}>
                  This course is designed to guide you step-by-step from zero foundation to absolute command of the topic. Engineered to meet modern enterprise demands, it focuses heavily on hands-on practical exercises, daily code challenges, and a capstone live project modeled after JCRM ERP applications. You will learn to deploy, audit, and scale applications in simulated production environments.
                </p>
              </div>

              <hr className={styles.divider} />

              {/* What you'll learn */}
              {course.syllabus && (
                <div className={styles.section}>
                  <h3>What you will learn in this program:</h3>
                  <div className={styles.learningChecklist}>
                    {course.syllabus.map((item, idx) => (
                      <div key={idx} className={styles.checkItem}>
                        <i className="fa-solid fa-circle-check"></i>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools Covered */}
              {course.tools && (
                <div className={styles.section}>
                  <h3>Technologies &amp; Tools Covered:</h3>
                  <div className={styles.toolsList}>
                    {course.tools.map((tool) => (
                      <span key={tool} className={styles.toolBadge}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (Sidebar Widget) */}
            <div className={styles.rightCol}>
              <div className={styles.enrollCard}>
                <h4 className={styles.enrollTitle}>This Program Includes:</h4>
                <ul className={styles.inclusions}>
                  <li>
                    <i className="fa-solid fa-video"></i>
                    <span>52+ Hours Live Lectures &amp; Videos</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-file-invoice"></i>
                    <span>75+ Assessment Sheets &amp; Mock Labs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>100% Guaranteed Job Placements Help</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-infinity"></i>
                    <span>Lifetime Access to Lectures &amp; Notes</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-mobile-screen-button"></i>
                    <span>Access on Mobile and TV Screen</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-trophy"></i>
                    <span>Verified Placement Certification</span>
                  </li>
                </ul>

                <div className={styles.enrollAction}>
                  <Link href="/join-us" className="btnCustom btnGold w-100 justify-content-center">
                    Enroll in this Course
                  </Link>
                  <p className={styles.enrollNote}>
                    * Our coordinators will review your application and schedule a 1-on-1 counseling call within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
