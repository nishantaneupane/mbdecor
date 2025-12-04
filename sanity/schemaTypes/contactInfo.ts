import { defineType } from "sanity";

export default defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "document",
  fields: [
    {
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "Contact Us",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageSubtitle",
      title: "Page Subtitle",
      type: "string",
      initialValue: "Get in touch with us for your decoration needs",
    },
    {
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
      initialValue: "Get In Touch",
    },
    {
      name: "sectionDescription",
      title: "Section Description",
      type: "text",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "businessHours",
      title: "Business Hours",
      type: "array",
      of: [{ type: "string" }],
      description: "Add each line as a separate entry",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "formTitle",
      title: "Form Title",
      type: "string",
      initialValue: "Send Us a Message",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Use this contact information",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "pageTitle",
      subtitle: "email",
    },
  },
});
