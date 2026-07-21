import { defineField, defineType } from "sanity";

export const siteStatsType = defineType({
  name: "siteStats",
  title: "Site Statistics (Singleton)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title (Optional, e.g. 'Global Stats')",
      type: "string",
    }),
    defineField({
      name: "erpDeployments",
      title: "ERP Deployments Count",
      type: "number",
    }),
    defineField({
      name: "industryModules",
      title: "Industry Modules Count",
      type: "number",
    }),
    defineField({
      name: "clientSatisfaction",
      title: "Client Satisfaction Percentage (%)",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    }),
    defineField({
      name: "supportHours",
      title: "Support Hours Provided",
      type: "number",
    }),
  ],
});
