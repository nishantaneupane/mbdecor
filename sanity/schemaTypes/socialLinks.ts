import { defineType } from "sanity";

export default defineType({
  name: "socialLinks",
  title: "Social Links",
  type: "document",
  fields: [
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      description: "Full URL to your Facebook page",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
      description: "Full URL to your Instagram profile",
    },
    {
      name: "twitter",
      title: "Twitter/X URL",
      type: "url",
      description: "Full URL to your Twitter/X profile",
    },
    {
      name: "youtube",
      title: "YouTube URL",
      type: "url",
      description: "Full URL to your YouTube channel",
    },
    {
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      description: "Full URL to your LinkedIn page",
    },
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Use these social links",
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: "facebook",
    },
    prepare() {
      return {
        title: "Social Media Links",
      };
    },
  },
});
