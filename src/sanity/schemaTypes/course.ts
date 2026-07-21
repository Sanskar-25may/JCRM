import { defineField, defineType } from "sanity";

export const courseType = defineType({
  name: "course",
  title: "Training Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "duration",
      title: "Duration (e.g. 3 Months)",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Key Highlights / Syllabus Topics",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color Theme (Hex or Name)",
      type: "string",
      options: {
        list: [
          { title: "Blue", value: "#0066ff" },
          { title: "Gold / Amber", value: "#ffb700" },
          { title: "Green", value: "#10b981" },
          { title: "Cyan", value: "#00d2ff" },
          { title: "Red", value: "#ef4444" },
        ],
      },
    }),
    defineField({
      name: "icon",
      title: "Icon (Emoji or Icon Name like 'fa-laptop-code')",
      type: "string",
    }),
  ],
});
