'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProductCard from '../shared/ProductCard';

interface ProductData {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  stats?: string[];
  accentColor?: string;
}

interface CourseData {
  _id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  duration?: string;
  accentColor?: string;
  icon?: string;
}

interface ExploreTabsProps {
  products: ProductData[];
  courses: CourseData[];
}

export default function ExploreTabs({ products, courses }: ExploreTabsProps) {
  const [activeTab, setActiveTab] = useState<'erp' | 'training'>('erp');

  return (
    <section className="py-24 md:py-32 section-bg-alt section-divider-top section-divider-bottom">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 glass p-8 md:p-10 shadow-lg shadow-primary/5 rounded-[28px]">
          <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
            EXPLORE JCRM
          </span>
          <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight">
            What Are You Looking For?
          </h2>
          <p className="text-sm text-[#0a2e5c]/85 mt-2.5 leading-relaxed max-w-lg mx-auto">
            Select your path below to explore our enterprise solutions or our professional training programs.
          </p>

          <div className="flex bg-[#f3f0eb] p-1 rounded-2xl mt-6 border border-slate-200/50">
            <button
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-xl capitalize transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'erp'
                  ? 'bg-white text-[#051937] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('erp')}
            >
              <i className="fa-solid fa-server"></i> Enterprise ERP Systems
            </button>
            <button
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-xl capitalize transition-all duration-200 flex items-center justify-center gap-2 ${
                activeTab === 'training'
                  ? 'bg-white text-[#051937] shadow-sm'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              onClick={() => setActiveTab('training')}
            >
              <i className="fa-solid fa-laptop-code"></i> Internship &amp; Training
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'erp' ? (
          <div className="animate-fadeIn">
            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, 6).map((product) => (
                  <ProductCard
                    key={product._id}
                    title={product.title}
                    slug={product.slug}
                    tagline={product.tagline}
                    description={product.description}
                    stats={product.stats}
                    accentColor={product.accentColor}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-10">
                No products configured. Load them inside Sanity Studio.
              </div>
            )}
            <div className="flex justify-center mt-12">
              <Link href="/erp-solutions" className="bg-[#ffb700] hover:bg-[#d97706] text-[#051937] font-bold px-7 py-3 rounded-full text-sm transition-all shadow-lg hover:-translate-y-0.5">
                View All ERP Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn">
            {courses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.slice(0, 6).map((course) => (
                  <div
                    key={course._id}
                    className="flex flex-col glass card-hover p-7 rounded-[24px]"
                  >
                    <div className="flex-1 mb-5 flex flex-col justify-start">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl">{course.icon || '💻'}</span>
                        <span className="text-[10px] font-bold py-1 px-3 bg-[#fafafa]/50 border border-slate-200/30 text-slate-500 rounded-full uppercase tracking-wider">
                          {course.duration || '3 Months'}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[#051937] tracking-tight mb-2.5">
                        {course.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-[#0a2e5c]/80 line-clamp-3">
                        {course.description}
                      </p>
                    </div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex justify-between items-center text-xs font-bold py-2.5 px-4 border border-primary/20 text-[#0066ff] hover:bg-[#0066ff] hover:text-white rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow"
                    >
                      <span>Explore Syllabus</span>
                      <i className="fa-solid fa-circle-chevron-right ml-2 text-xs"></i>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-slate-400 py-10">
                No courses configured. Load them inside Sanity Studio.
              </div>
            )}
            <div className="flex justify-center mt-12">
              <Link href="/courses" className="bg-[#ffb700] hover:bg-[#d97706] text-[#051937] font-bold px-7 py-3 rounded-full text-sm transition-all shadow-lg hover:-translate-y-0.5">
                Browse All Courses
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
