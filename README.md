# MB Decor - Informative Product Website

A modern, elegant informative website showcasing decoration products and services. Built with Next.js 16 and Tailwind CSS v4.

**Reference Website:** [Ali Akbar Decorations](https://intl.aliakbardecorations.com/)

## 🎯 Project Overview

This is a **non-ecommerce** informative website designed to display categories and products for a decoration business. The site features:

- ✅ Category browsing
- ✅ Product detail pages
- ✅ Responsive design
- ✅ Red theme customization
- ✅ JSON-based data management
- ❌ No cart/checkout functionality
- ❌ No pricing or ecommerce features

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Data:** Local JSON files
- **Images:** Placeholder SVGs (replaceable)

## 📁 Project Structure

```
mb_decor/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout with Navbar & Footer
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── categories/          # Categories listing
│   │   └── [slug]/          # Dynamic category page
│   └── products/
│       └── [slug]/          # Dynamic product page
├── components/              # Reusable components
│   ├── Navbar.tsx          # Sticky responsive navigation
│   ├── Footer.tsx          # Footer with contact info
│   ├── ProductCard.tsx     # Product card component
│   └── CategoryCard.tsx    # Category card component
├── data/                    # JSON data files
│   ├── categories.json     # Categories data
│   └── products.json       # Products data
├── lib/
│   └── data.ts             # Data fetching utilities
└── public/                  # Static assets
    ├── placeholder-product.svg
    └── placeholder-category.svg
```

## 🎨 Theme Customization

The primary theme color (red) is defined in `app/globals.css`:

```css
:root {
  --primary: #d90000; /* Change this to customize the theme */
}
```

## 📊 Data Structure

### Categories (`data/categories.json`)

```json
{
  "id": 1,
  "name": "Wedding Decorations",
  "slug": "wedding-decorations",
  "description": "Beautiful decorations for your special day",
  "image": "/placeholder-category.svg"
}
```

### Products (`data/products.json`)

```json
{
  "id": 1,
  "category": "wedding-decorations",
  "name": "Elegant Flower Arch",
  "slug": "elegant-flower-arch",
  "image": "/placeholder-product.svg",
  "description": "A stunning floral arch...",
  "specs": ["Height: 2.5m", "Width: 2m"]
}
```

## 🛠️ Development

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 Pages

- **Home (`/`)** - Hero section, categories overview, featured products
- **Categories (`/categories`)** - All categories grid
- **Category Detail (`/categories/[slug]`)** - Products in a category
- **Product Detail (`/products/[slug]`)** - Product information and specs
- **About (`/about`)** - Company information
- **Contact (`/contact`)** - Contact form (demo only)

## 🖼️ Replacing Placeholder Images

1. Add your images to the `public/` folder
2. Update the `image` field in `data/categories.json` and `data/products.json`
3. Recommended formats: JPG, PNG, WebP
4. Use Next.js Image component for optimization

## 📱 Responsive Design

The site is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Key Features

- **Sticky Navigation** - Navbar stays visible on scroll
- **Mobile Menu** - Hamburger menu for mobile devices
- **Breadcrumbs** - Easy navigation on product pages
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized with Next.js App Router
- **Type Safe** - Full TypeScript support

## 📝 Adding New Content

### Add a New Category

1. Open `data/categories.json`
2. Add a new category object with unique `id` and `slug`
3. Update the category image path

### Add a New Product

1. Open `data/products.json`
2. Add a new product with matching `category` slug
3. Include all required fields: `id`, `name`, `slug`, `description`, `specs`

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or deploy to any Node.js hosting platform that supports Next.js.

## 📚 Utility Functions

Located in `lib/data.ts`:

- `getAllCategories()` - Get all categories
- `getCategoryBySlug(slug)` - Get category by slug
- `getAllProducts()` - Get all products
- `getProductBySlug(slug)` - Get product by slug
- `getProductsByCategory(categorySlug)` - Filter products by category
- `getFeaturedProducts(limit)` - Get featured products

## 🤝 Contributing

This is a custom project. To modify:

1. Follow the existing code structure
2. Maintain TypeScript types
3. Keep components reusable
4. Test responsive design

## 📄 License

Private project - All rights reserved

## 👨‍💻 Development Notes

- No authentication required
- No admin panel
- Contact form is non-functional (demo only)
- Placeholder images need to be replaced with actual product photos
- JSON files serve as the database (can be replaced with CMS later)
