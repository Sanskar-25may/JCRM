'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { mockCourses } from '@/data/mockData';
import styles from './courses.module.css';

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI & ML',
    'Web Development',
    'Data Science',
    'Security & QA',
    'Business & Other',
  ];

  // Map categories to course ids or attributes for filtering
  const filterCourse = (course: typeof mockCourses[0]) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI & ML') return course.id === 'ai-ml' || course.id === 'zen-ai';
    if (selectedCategory === 'Web Development')
      return course.id === 'frontend' || course.id === 'backend' || course.id === 'cloud-devops';
    if (selectedCategory === 'Data Science') return course.id === 'datascience';
    if (selectedCategory === 'Security & QA')
      return (
        course.id === 'cyber-security' ||
        course.id === 'qa-automation' ||
        course.id === 'forensic-science'
      );
    if (selectedCategory === 'Business & Other')
      return course.id === 'personality-development' || course.id === 'graphic-design';

    return true;
  };

  const filteredCourses = mockCourses.filter(filterCourse);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Signature Glassmorphism Outer Pane Matching Homepage */}
        <div className={styles.glassPane}>
          {/* Section Header */}
          <div className={styles.header}>
            <h1 className={styles.title}>
              Professional Training <span className={styles.titleHighlight}>Courses</span>
            </h1>
            <p className={styles.subtitle}>
              Job-oriented syllabus engineered by industry experts with 100% placement assistance.
            </p>
          </div>

          {/* Controls Bar (Category Filter Chips + Search Bar) */}
          <div className={styles.controlsRow}>
            <div className={styles.categories}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryChip} ${
                    selectedCategory === cat ? styles.activeChip : ''
                  }`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.searchBox}>
              <i className="fa-solid fa-magnifying-glass" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* 3-Column Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className={styles.grid}>
              {filteredCourses.map((course) => (
                <div key={course.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.icon}>{course.icon}</span>
                    {course.badge && <span className={styles.badge}>{course.badge}</span>}
                  </div>
                  <div className={styles.cardBody}>
                    <h2 className={styles.courseTitle}>{course.title}</h2>
                    <p className={styles.desc}>{course.description}</p>
                    {course.tools && (
                      <div className={styles.tools}>
                        {course.tools.slice(0, 4).map((tool) => (
                          <span key={tool} className={styles.tool}>
                            {tool}
                          </span>
                        ))}
                        {course.tools.length > 4 && (
                          <span className={styles.toolMore}>
                            +{course.tools.length - 4} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      <i className="fa-solid fa-clock" /> {course.duration || '3 Months'}
                    </span>
                    <Link href={`/courses/${course.id}`} className={styles.exploreBtn}>
                      <span>Explore Syllabus</span>
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <i className="fa-solid fa-triangle-exclamation" />
              <h3>No Courses Found</h3>
              <p>
                We couldn&apos;t find any courses matching your search query or filters. Please try another search.
              </p>
              <button
                className={styles.clearBtn}
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
