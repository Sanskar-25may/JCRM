import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author / Student Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Current Position (e.g. Student at JCRM)",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1 to 5 Stars)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
});
