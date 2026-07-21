import { defineField, defineType } from "sanity";

export const placedCandidateType = defineType({
  name: "placedCandidate",
  title: "Placed Candidate",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Candidate Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "company",
      title: "Hired Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "package",
      title: "Salary Package (e.g. 10 LPA)",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Job Title / Role",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
