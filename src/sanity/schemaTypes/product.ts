import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "ERP Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "stats",
      title: "Key Stats",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      title: "Features / Modules List",
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
      name: "images",
      title: "Images / Mockups",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
});
