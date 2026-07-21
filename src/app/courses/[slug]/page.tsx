import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import { courseBySlugQuery, allCoursesQuery } from '@/lib/sanity/queries';
import { mockCourses } from '@/data/mockData';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";
  if (!isSanityConfigured) {
    return mockCourses.map((c) => ({ slug: c.id }));
  }
  try {
    const courses = await client.fetch(allCoursesQuery);
    return courses.map((course: any) => ({
      slug: course.slug || 'unknown',
    }));
  } catch (err) {
    console.error("Static params fallback for courses:", err);
    return mockCourses.map((c) => ({ slug: c.id }));
  }
}

export default async function CourseDetail({ params }: PageProps) {
  const { slug } = await params;
  
  let course = null;
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      course = await client.fetch(courseBySlugQuery, { slug });
    } catch (err) {
      console.error("Failed to fetch course by slug:", err);
    }
  }

  // Fallback to mock data if not found in Sanity
  if (!course) {
    const mock = mockCourses.find((c) => c.id === slug);
    if (!mock) {
      notFound();
    }
    course = {
      title: mock.title,
      slug: mock.id,
      tagline: mock.badge || 'Trending Course',
      description: mock.description,
      duration: mock.duration || '3 Months',
      features: mock.tools || [],
      accentColor: '#0066ff',
      icon: mock.icon || '💻'
    };
  }

  const accentColor = course.accentColor || '#0066ff';

  return (
    <div className="pt-24 font-sans bg-slate-50/20">
      <div className="container-custom py-12">
        {/* Back Link */}
        <Link href="/courses" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0066ff] transition-colors mb-8">
          <i className="fa-solid fa-arrow-left"></i> Back to Courses
        </Link>

        {/* Content Box */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-12 shadow-xl shadow-slate-100/50">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left Info Column */}
            <div className="flex-1">
              <div className="flex items-center gap-3.5 mb-4">
                <span className="text-3xl">{course.icon || '💻'}</span>
                <span
                  className="inline-block text-[11px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider"
                  style={{ backgroundColor: `${accentColor}12`, color: accentColor }}
                >
                  {course.tagline}
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-[#051937] tracking-tight mb-6">
                {course.title}
              </h1>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-slate-500 text-xs font-bold bg-slate-100 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <i className="fa-solid fa-clock"></i> Course Duration: {course.duration || '3 Months'}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/80 mb-8 whitespace-pre-wrap">
                {course.description}
              </p>

              {/* Dynamic Accent colored call to action */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center text-white font-bold px-7 py-3 rounded-full text-xs transition-all hover:brightness-95 hover:shadow-lg shadow-black/5"
                  style={{ backgroundColor: accentColor }}
                >
                  Enroll / Enquire Now
                </Link>
                <a
                  href="tel:+918310531309"
                  className="inline-flex items-center justify-center border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold px-7 py-3 rounded-full text-xs transition-all"
                >
                  Call Academic Advisor
                </a>
              </div>
            </div>

            {/* Right Features Column */}
            <div className="w-full lg:w-[400px] bg-slate-50/70 border border-slate-100 p-8 rounded-2xl flex flex-col justify-start">
              <h3 className="text-sm font-bold text-[#051937] uppercase tracking-wider mb-6 pb-2 border-b border-slate-200/60">
                Syllabus Topics &amp; Technologies
              </h3>
              
              {course.features && course.features.length > 0 ? (
                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {course.features.map((feat: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-emerald-500 font-bold text-base mt-0.5" style={{ color: accentColor }}>✓</span>
                      <span className="text-xs font-semibold text-[#0a2e5c] leading-normal">{feat}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-xs text-slate-400">No custom topics loaded.</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
