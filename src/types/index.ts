export interface Candidate {
  id: string;
  name: string;
  position: string;
  company?: string;
  package?: string;
  imgUrl: string;
}

export interface CourseGain {
  icon: string;
  title: string;
  desc: string;
}

export interface WeeklyModule {
  week: string;
  title: string;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  heroTagline?: string;
  icon: string;
  description: string;
  badge?: string;
  syllabus?: string[];
  duration?: string;
  tools?: string[];
  gains?: CourseGain[];
  weeklyModules?: WeeklyModule[];
  instructor?: {
    name: string;
    role: string;
    experience?: string;
    imgUrl: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export interface ErpProduct {
  id: string;
  name: string;
  icon: string;
  description: string;
  badge?: string;
  features?: string[];
}
