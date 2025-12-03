import { defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Display in featured section',
      initialValue: false,
    },
    {
      name: 'isTrending',
      title: 'Trending Product',
      type: 'boolean',
      description: 'Display in trending section',
      initialValue: false,
    },
    {
      name: 'isBestSeller',
      title: 'Best Seller',
      type: 'boolean',
      description: 'Display in best sellers section',
      initialValue: false,
    },
    {
      name: 'isNewArrival',
      title: 'New Arrival',
      type: 'boolean',
      description: 'Display in new arrivals section',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'category.name',
    },
  },
})
