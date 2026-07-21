import { defineField, defineType } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Short Biography",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "socials",
      title: "Social Media Links",
      type: "object",
      fields: [
        { name: "linkedin", title: "LinkedIn URL", type: "string" },
        { name: "twitter", title: "Twitter/X URL", type: "string" },
        { name: "github", title: "GitHub URL", type: "string" },
      ],
    }),
  ],
});
