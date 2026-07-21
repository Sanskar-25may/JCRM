import { groq } from "next-sanity";

// Product queries
export const allProductsQuery = groq`
  *[_type == "product"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    stats,
    features,
    accentColor,
    images
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    stats,
    features,
    accentColor,
    images
  }
`;

// Course queries
export const allCoursesQuery = groq`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    duration,
    features,
    accentColor,
    icon
  }
`;

export const courseBySlugQuery = groq`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    description,
    duration,
    features,
    accentColor,
    icon
  }
`;

// Team Member queries
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(name asc) {
    _id,
    name,
    role,
    bio,
    image,
    socials
  }
`;

// Placed Candidate queries
export const allPlacedCandidatesQuery = groq`
  *[_type == "placedCandidate"] {
    _id,
    name,
    company,
    package,
    role,
    image
  }
`;

// Testimonial queries
export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    author,
    role,
    text,
    rating
  }
`;

// Site Stats query (Singleton)
export const siteStatsQuery = groq`
  *[_type == "siteStats"][0] {
    _id,
    erpDeployments,
    industryModules,
    clientSatisfaction,
    supportHours
  }
`;
