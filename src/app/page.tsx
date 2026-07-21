import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import {
  siteStatsQuery,
  allProductsQuery,
  allCoursesQuery,
  allPlacedCandidatesQuery,
  allTestimonialsQuery
} from '@/lib/sanity/queries';

// Import section components
import Hero from '@/components/sections/Hero';
import StatsCounter from '@/components/sections/StatsCounter';
import ExploreTabs from '@/components/sections/ExploreTabs';
import PlacedCandidates from '@/components/sections/PlacedCandidates';
import Testimonials from '@/components/sections/Testimonials';

// Import fallbacks
import { mockCandidates, mockErpProducts, mockTestimonials, mockCourses } from '@/data/mockData';
import Link from 'next/link';

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  // Fetch from Sanity with try-catch and fall back to mock data
  let stats = null;
  let products = [];
  let courses = [];
  let candidates = [];
  let testimonials = [];

  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      stats = await client.fetch(siteStatsQuery);
      products = await client.fetch(allProductsQuery);
      courses = await client.fetch(allCoursesQuery);
      candidates = await client.fetch(allPlacedCandidatesQuery);
      testimonials = await client.fetch(allTestimonialsQuery);
    } catch (error) {
      console.error("Sanity data fetch error, using fallbacks:", error);
    }
  }

  // Fallbacks mapping
  const activeStats = stats || {
    erpDeployments: 50,
    industryModules: 10,
    clientSatisfaction: 98,
    supportHours: 240
  };

  const activeProducts = products && products.length > 0
    ? products.map((p: any) => ({
        _id: p._id,
        title: p.title,
        slug: p.slug,
        tagline: p.tagline || 'ERP Module',
        description: p.description || '',
        stats: p.stats || [],
        accentColor: p.accentColor || '#0066ff'
      }))
    : mockErpProducts.map((p) => ({
        _id: p.id,
        title: p.name,
        slug: p.id,
        tagline: p.badge || 'ERP Module',
        description: p.description,
        stats: p.features || [],
        accentColor: '#0066ff'
      }));

  const activeCourses = courses && courses.length > 0
    ? courses.map((c: any) => ({
        _id: c._id,
        title: c.title,
        slug: c.slug,
        tagline: c.tagline || 'Course',
        description: c.description || '',
        duration: c.duration || '3 Months',
        accentColor: c.accentColor || '#0066ff',
        icon: c.icon || '💻'
      }))
    : mockCourses.map((c) => ({
        _id: c.id,
        title: c.title,
        slug: c.id,
        tagline: c.badge || 'Course',
        description: c.description,
        duration: c.duration,
        accentColor: '#0066ff',
        icon: c.icon
      }));

  const activeCandidates = candidates && candidates.length > 0
    ? candidates
    : mockCandidates.map((c) => ({
        _id: c.id,
        name: c.name,
        company: c.company,
        package: c.package,
        role: c.position,
        image: null // triggers fallback in PlacedCandidates component
      }));

  const activeTestimonials = testimonials && testimonials.length > 0
    ? testimonials
    : mockTestimonials.map((t: any) => ({
        _id: t.id,
        author: t.author,
        role: t.role,
        text: t.quote || t.text || '',
        rating: 5
      }));

  return (
    <div className="dot-grid font-sans">
      {/* Hero fold */}
      <Hero />

      {/* Counter bar */}
      <StatsCounter stats={activeStats} />

      {/* Explore Section (Tabs) */}
      <ExploreTabs products={activeProducts} courses={activeCourses} />

      {/* Why Choose JCRM Section (Styled with Tailwind) */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="glass p-8 md:p-10 shadow-lg shadow-primary/5">
              <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
                THE JCRM ADVANTAGE
              </span>
              <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight mb-5">
                Why Choose JCRM Technologies
              </h2>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/85 mb-8">
                We combine industry-leading software deployments with high-impact professional mentorship. Whether you are looking to automate your enterprise or scale your career, we provide the platform to succeed.
              </p>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                <li className="flex items-center gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#0a2e5c]">100% Practical &amp; Job-Oriented Training</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#0a2e5c]">Hands-on Guidance &amp; Real Live Projects</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#0a2e5c]">Dedicated Placements &amp; Industry HR Connections</span>
                </li>
                <li className="flex items-center gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-[#0a2e5c]">Post-Placement Support &amp; Lifetime Alumni Network</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://jcrm.in/assets/img/why-us.svg"
                alt="JCRM Team"
                className="w-full max-w-sm transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Talent Network Section (Styled with Tailwind) */}
      <section className="py-24 md:py-32 section-bg-alt section-divider-top section-divider-bottom">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="glass p-8 md:p-10 shadow-lg shadow-primary/5">
              <span className="inline-block text-xs font-bold text-[#0066ff] uppercase tracking-widest mb-2.5">
                TALENT NETWORK
              </span>
              <h2 className="text-3xl font-extrabold text-[#051937] tracking-tight mb-5">
                Connecting Trainees to Industry Networks
              </h2>
              <p className="text-sm leading-relaxed text-[#0a2e5c]/85 mb-8">
                JCRM acts as a bridge between top-tier tech talent and high-growth ERP enterprises. We help companies recruit vetted developers while assisting candidates in launching careers.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/join-us"
                  className="bg-[#ffb700] hover:bg-[#ffaa00] text-[#051937] font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Join as Trainee
                </Link>
                <Link
                  href="/contact-us"
                  className="border-2 border-[#0066ff] text-[#0066ff] hover:bg-[#0066ff] hover:text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Hire from Us
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="https://jcrm.in/assets/img/talent.svg"
                alt="Talent network illustration"
                className="w-full max-w-sm transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Carousel */}
      <PlacedCandidates candidates={activeCandidates} />

      {/* Testimonials */}
      <Testimonials testimonials={activeTestimonials} />
    </div>
  );
}
