# MD Decor - Sanity Integration

## Overview
This project now supports dual data sources: **JSON files** and **Sanity CMS**. You can switch between them using an environment variable.

## Configuration

### Environment Variables
Create a `.env.local` file with:

```env
# Data Source: 'json' or 'sanity'
DATA_SOURCE=json

# Sanity Configuration (only needed when DATA_SOURCE=sanity)
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

## Using JSON Data (Default)
Set `DATA_SOURCE=json` in `.env.local`

The app will use data from:
- `/data/categories.json`
- `/data/products.json`

## Using Sanity CMS

### Step 1: Create Sanity Project
1. Visit [sanity.io](https://www.sanity.io/)
2. Create a new project
3. Note your **Project ID**

### Step 2: Configure Environment
Update `.env.local`:
```env
DATA_SOURCE=sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### Step 3: Access Sanity Studio
Run the development server:
```bash
npm run dev
```

Navigate to: `http://localhost:3000/studio`

### Step 4: Add Content
In Sanity Studio:
1. Create **Categories** with images
2. Create **Products** and link them to categories
3. Mark products as Featured, Trending, Best Seller, or New Arrival

## Data Structure

### Category Schema
- Name
- Slug
- Description
- Image
- Display Order

### Product Schema
- Name
- Slug
- Category (reference)
- Image
- Description
- Specifications (array)
- isFeatured (boolean)
- isTrending (boolean)
- isBestSeller (boolean)
- isNewArrival (boolean)
- Display Order

## Development

All data functions in `lib/data.ts` automatically use the correct source based on `DATA_SOURCE`:

```typescript
// These work with both JSON and Sanity
const categories = await getAllCategories()
const products = await getProductsByCategory('wedding')
const featured = await getFeaturedProducts(8)
```

## Migration

To migrate from JSON to Sanity, you can:
1. Manually add content through Sanity Studio
2. Use the Sanity CLI to import data programmatically

## Running Sanity Studio

Since Next.js 16 has compatibility issues with the embedded Sanity Studio, run it separately:

```bash
# In a separate terminal
npx sanity dev
```

This will start the Sanity Studio at `http://localhost:3333`

Alternatively, you can deploy your studio separately:
```bash
npx sanity deploy
```

## Studio Access
- Local Development: `http://localhost:3333` (via `npx sanity dev`)
- Deployed Studio: `https://your-project.sanity.studio`

## Notes
- JSON is great for static content and quick prototyping
- Sanity is ideal for dynamic content management and team collaboration
- Both sources use the same TypeScript interfaces for type safety
- The `/studio` route in Next.js shows setup instructions (embedded studio not compatible with Next.js 16)
- Use `npx sanity dev` to run the studio separately during development
