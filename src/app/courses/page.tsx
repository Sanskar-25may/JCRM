import React from 'react';
import { client, projectId } from '@/lib/sanity/client';
import { allCoursesQuery } from '@/lib/sanity/queries';
import CoursesClient from './CoursesClient';
import { mockCourses } from '@/data/mockData';

export const revalidate = 60;

export default async function Courses() {
  let courses = [];
  const isSanityConfigured = projectId && projectId !== "jcrm-project-id";

  if (isSanityConfigured) {
    try {
      courses = await client.fetch(allCoursesQuery);
    } catch (err) {
      console.error("Failed to fetch courses from Sanity, using mock data fallback:", err);
    }
  }

  // Fallback if empty
  const activeCourses = courses && courses.length > 0
    ? courses.map((c: any) => ({
        _id: c._id,
        title: c.title,
        slug: c.slug,
        tagline: c.tagline || 'Course',
        description: c.description || '',
        duration: c.duration || '3 Months',
        accentColor: c.accentColor || '#0066ff',
        icon: c.icon || '💻',
        features: c.features || []
      }))
    : mockCourses.map((c) => ({
        _id: c.id,
        title: c.title,
        slug: c.id,
        tagline: c.badge || 'Trending',
        description: c.description,
        duration: c.duration,
        accentColor: '#0066ff',
        icon: c.icon,
        features: c.tools || []
      }));

  return <CoursesClient courses={activeCourses} />;
}
