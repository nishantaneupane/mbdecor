import { defineType } from "sanity";

export default defineType({
  name: "banquetSection",
  title: "Banquet Section",
  type: "document",
  fields: [
    {
      name: "badge",
      title: "Badge Text",
      type: "string",
      description: "Small badge text (e.g., ✨ BANQUET SERVICES)",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features/benefits",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Explore Banquet Services",
    },
    {
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      description: "URL or path for the button",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Show this section on homepage",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
      media: "image",
    },
  },
});
