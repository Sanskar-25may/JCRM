import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import {
  allProductsQuery,
  allCoursesQuery,
  allPlacedCandidatesQuery,
  allTestimonialsQuery
} from '@/lib/sanity/queries';

// Import section components
import Hero from '@/components/sections/Hero';
import BentoGrid from '@/components/sections/BentoGrid';
import ExploreTabs from '@/components/sections/ExploreTabs';
import PlacedCandidates from '@/components/sections/PlacedCandidates';
import Testimonials from '@/components/sections/Testimonials';

// Import fallbacks
import { mockCandidates, mockErpProducts, mockTestimonials, mockCourses } from '@/data/mockData';

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  // Fetch from Sanity with try-catch and fall back to mock data
  let products = [];
  let courses = [];
  let candidates = [];
  let testimonials = [];

  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      products = await client.fetch(allProductsQuery);
      courses = await client.fetch(allCoursesQuery);
      candidates = await client.fetch(allPlacedCandidatesQuery);
      testimonials = await client.fetch(allTestimonialsQuery);
    } catch (error) {
      console.error("Sanity data fetch error, using fallbacks:", error);
    }
  }

  // Fallbacks mapping
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

      {/* Bento Grid Features Panel */}
      <BentoGrid />

      {/* Explore Section (Tabs) */}
      <ExploreTabs products={activeProducts} courses={activeCourses} />

      {/* Candidate Carousel */}
      <PlacedCandidates candidates={activeCandidates} />

      {/* Testimonials */}
      <Testimonials testimonials={activeTestimonials} />
    </div>
  );
}
