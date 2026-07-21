'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface CourseData {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  duration?: string;
  features?: string[];
  accentColor?: string;
  icon?: string;
}

interface CoursesClientProps {
  courses: CourseData[];
}

export default function CoursesClient({ courses }: CoursesClientProps) {
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

  const filterCourse = (course: CourseData) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'AI & ML') return course.slug === 'ai-ml' || course.slug === 'zen-ai';
    if (selectedCategory === 'Web Development')
      return course.slug === 'frontend' || course.slug === 'backend' || course.slug === 'cloud-devops';
    if (selectedCategory === 'Data Science') return course.slug === 'datascience';
    if (selectedCategory === 'Security & QA')
      return (
        course.slug === 'cyber-security' ||
        course.slug === 'qa-automation' ||
        course.slug === 'forensic-science'
      );
    if (selectedCategory === 'Business & Other')
      return course.slug === 'personality-development' || course.slug === 'graphic-design';

    return true;
  };

  const filteredCourses = courses.filter(filterCourse);

  return (
    <div className="pt-24 font-sans bg-slate-50/20">
      {/* Banner */}
      <section className="bg-white/80 border-b border-primary/5 py-16 text-center">
        <div className="container-custom">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-[#051937] tracking-tight">
            Professional Training Courses
          </h1>
          <p className="text-slate-500 text-sm mt-3.5 max-w-xl mx-auto">
            Job-oriented syllabus engineered by industry experts with 100% placement help.
          </p>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="py-6 border-b border-slate-100 bg-white/40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Category Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold py-2 px-4 rounded-full transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#0066ff] text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="flex items-center bg-white border border-slate-200 rounded-full px-5 py-2.5 w-full md:w-[320px]">
              <i className="fa-solid fa-magnifying-glass text-slate-400 text-sm mr-2.5"></i>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs text-[#051937] placeholder:text-slate-400 flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-16">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course._id}
                  className="flex flex-col glass card-hover p-7 rounded-[24px]"
                >
                  <div className="flex-1 mb-5 flex flex-col justify-start">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl">{course.icon || '💻'}</span>
                      <span
                        className="text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider"
                        style={{
                          backgroundColor: `${course.accentColor || '#0066ff'}12`,
                          color: course.accentColor || '#0066ff',
                        }}
                      >
                        {course.tagline || 'Trending'}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#051937] tracking-tight mb-2.5">
                      {course.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[#0a2e5c]/85 line-clamp-3">
                      {course.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-200/30 pt-4">
                    <span className="text-xs font-semibold text-slate-500 flex items-center">
                      <i className="fa-solid fa-clock mr-1"></i> {course.duration || '3 Months'}
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex justify-center items-center text-xs font-bold py-2.5 px-4 border border-primary/20 text-[#0066ff] hover:bg-[#0066ff] hover:text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow"
                    >
                      Explore Syllabus <i className="fa-solid fa-arrow-right ml-2 text-[10px]"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 glass p-10 max-w-md mx-auto shadow-lg shadow-primary/5">
              <i className="fa-solid fa-triangle-exclamation text-3xl text-amber-500 mb-4"></i>
              <h3 className="text-lg font-bold text-[#051937] mb-2">No Courses Found</h3>
              <p className="text-xs text-slate-500 mb-6">
                We couldn't find any courses matching your search query. Try another search.
              </p>
              <button
                className="bg-[#ffb700] hover:bg-[#d97706] text-[#051937] font-bold px-6 py-2.5 rounded-full text-xs transition-all shadow-md"
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
