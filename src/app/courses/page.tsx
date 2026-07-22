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
    // Search query check
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    // Category filter check
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI & ML') return course.id === 'ai-ml' || course.id === 'zen-ai';
    if (selectedCategory === 'Web Development') return course.id === 'frontend' || course.id === 'backend' || course.id === 'cloud-devops';
    if (selectedCategory === 'Data Science') return course.id === 'datascience';
    if (selectedCategory === 'Security & QA') return course.id === 'cyber-security' || course.id === 'qa-automation' || course.id === 'forensic-science';
    if (selectedCategory === 'Business & Other') return course.id === 'personality-development' || course.id === 'graphic-design';

    return true;
  };

  const filteredCourses = mockCourses.filter(filterCourse);

  return (
    <div className={styles.coursesPage}>
      {/* Header Banner */}
      <section className={styles.banner}>
        <div className={styles.container}>
          <h1 className="reveal">Professional Training Courses</h1>
          <p className="reveal delay-1">Job-oriented syllabus engineered by industry experts with 100% placement help</p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className={styles.controls}>
        <div className={styles.container}>
          <div className={styles.controlsRow}>
            {/* Category Chips */}
            <div className={styles.categories}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`${styles.categoryChip} ${selectedCategory === cat ? styles.activeChip : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className={styles.searchBox}>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className={styles.listing}>
        <div className={styles.container}>
          {filteredCourses.length > 0 ? (
            <div className={styles.grid}>
              {filteredCourses.map((course) => (
                <div key={course.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.icon}>{course.icon}</span>
                    {course.badge && <span className={styles.badge}>{course.badge}</span>}
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.title}>{course.title}</h3>
                    <p className={styles.desc}>{course.description}</p>
                    {course.tools && (
                      <div className={styles.tools}>
                        {course.tools.slice(0, 4).map((tool) => (
                          <span key={tool} className={styles.tool}>{tool}</span>
                        ))}
                        {course.tools.length > 4 && (
                          <span className={styles.toolMore}>+{course.tools.length - 4} more</span>
                        )}
                      </div>
                    )}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.duration}>
                      <i className="fa-solid fa-clock me-1"></i> {course.duration || '3 Months'}
                    </span>
                    <Link href={`/courses/${course.id}`} className={styles.exploreBtn}>
                      Explore Syllabus <i className="fa-solid fa-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <i className="fa-solid fa-triangle-exclamation"></i>
              <h3>No Courses Found</h3>
              <p>We couldn't find any courses matching your search query or filters. Please try another search.</p>
              <button
                className="btnCustom btnGold"
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
      </section>
    </div>
  );
}
