# Copilot Agent Instructions for Building Informative Product Website

## 1. Project Overview

**Reference Website:** [https://intl.aliakbardecorations.com/?shpxid=9a565246-146f-424e-a1a5-f343e0c37b99](https://intl.aliakbardecorations.com/?shpxid=9a565246-146f-424e-a1a5-f343e0c37b99)
Create a **simple, elegant, informative website** (not ecommerce) inspired by the structure and layout of the reference website. No cart, no checkout, no add-to-cart functionality.

The website will:

- Display categories and products
- Allow users to view product details
- Use **Next.js (latest version)** and **Tailwind CSS**
- Use **red as the primary theme color**, customizable via `tailwind.config.js`
- Use **JSON files** for product and category data
- Use **placeholder images** for now (developer will replace later)

---

## 2. Tech Stack

- **Next.js (latest)** – App Router
- **Tailwind CSS** – Theme customization
- **TypeScript** (optional but recommended)
- **Local JSON files** stored in `/data/`

---

## 3. Pages Required

### 3.1 Home Page (`/`)

- Hero section with placeholder background image
- Overview of categories (grid)
- Few featured products (grid)

### 3.2 Categories Page (`/categories`)

- Grid of all categories
- Each category card links to `/categories/[slug]`

### 3.3 Category Details Page (`/categories/[slug]`)

- List of products under the selected category
- Pagination optional but not required

### 3.4 Product Detail Page (`/products/[slug]`)

- Product title
- Description
- Placeholder image
- Specifications (if available in JSON)

### 3.5 About Page (`/about`)

### 3.6 Contact Page (`/contact`)

- Simple form (non-functional)

---

## 4. Components Required

### 4.1 Navbar

- Logo (text for now)
- Menu items: Home, Categories, About, Contact
- Sticky on scroll
- Responsive (hamburger menu on mobile)

### 4.2 Footer

Include:

- Company name
- Address (placeholder)
- Phone number (placeholder)
- Email
- Social links icons (placeholder)

### 4.3 Product Card Component

- Title
- Placeholder image
- Short description
- Link to product page

### 4.4 Category Card Component

---

## 5. Design & Styling

- Use Tailwind CSS with **configurable red theme**
- In `tailwind.config.js`, define:
- Make it mobile friendly and responsive

```js
colors: {
  primary: "#a18602ff"; // red, editable
}
```

- Clean, minimal layout similar to the reference site
- Use container width: `max-w-7xl mx-auto px-4`
- Use consistent rounded corners and shadows

---

## 6. Data Structure (JSON)

Create a `/data` folder with:

### 6.1 `categories.json`

```json
[
  {
    "id": 1,
    "name": "Wedding Decorations",
    "slug": "wedding-decorations",
    "image": "/placeholder-category.jpg"
  }
]
```

### 6.2 `products.json`

```json
[
  {
    "id": 1,
    "category": "wedding-decorations",
    "name": "Flower Arch",
    "slug": "flower-arch",
    "image": "/placeholder-product.jpg",
    "description": "Short description of the product.",
    "specs": ["Height: 2m", "Material: Metal & Fabric"]
  }
]
```

---

## 7. Scripts / Functions Required

- Utility to fetch JSON data:

  - `getAllProducts()`
  - `getProductsByCategory(slug)`
  - `getProductBySlug(slug)`

- Category fetching utilities

---

## 8. Required Folder Structure

```
project/
  app/
    page.tsx
    about/
      page.tsx
    contact/
      page.tsx
    categories/
      page.tsx
      [slug]/
        page.tsx
    products/
      [slug]/
        page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    ProductCard.tsx
    CategoryCard.tsx
  data/
    products.json
    categories.json
  public/
    placeholder-product.jpg
    placeholder-category.jpg
  tailwind.config.js
```

---

## 9. Additional Requirements

- Ensure excellent mobile responsiveness
- Optimize SEO using Next.js metadata
- Use `Image` component with fixed ratio boxes for placeholders

---

## 10. Phase-Based Implementation

### **Phase 1** – Scaffold project and install dependencies

### **Phase 2** – Implement layout (Navbar + Footer)

### **Phase 3** – Add pages and route structure

### **Phase 4** – Connect to JSON data

### **Phase 5** – Styling & responsive improvements

### **Phase 6** – Add placeholder content and finalize structure

---

## 11. Notes

- No authentication
- No admin panel
- No cart, checkout, pricing, or ecommerce features

---

This instruction set should guide Copilot to generate clean, structured, production-ready code in phases without breaking the existing setup.
