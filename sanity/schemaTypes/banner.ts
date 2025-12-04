import { defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
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
      name: "link",
      title: "Link",
      type: "string",
      description: "Optional link URL",
    },
    {
      name: "placement",
      title: "Placement",
      type: "string",
      description: "Where the banner should appear",
      options: {
        list: [
          { title: "Hero Carousel", value: "hero" },
          { title: "Promotional Section", value: "promo" },
        ],
        layout: "radio",
      },
      initialValue: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Show this banner",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
    },
  },
});
