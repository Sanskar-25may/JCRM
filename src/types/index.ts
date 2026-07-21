export interface Candidate {
  id: string;
  name: string;
  position: string;
  company?: string;
  package?: string;
  imgUrl: string;
}

export interface Course {
  id: string;
  title: string;
  icon: string;
  description: string;
  badge?: string;
  syllabus?: string[];
  duration?: string;
  tools?: string[];
  instructor?: {
    name: string;
    role: string;
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
