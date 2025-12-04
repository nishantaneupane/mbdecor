// JSON Data Imports
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";
import bannersData from "@/data/banners.json";

// Sanity Imports
import * as sanityQueries from "./sanity.queries";

// Data source configuration - Use NEXT_PUBLIC_ for client-side access
const DATA_SOURCE =
  process.env.NEXT_PUBLIC_DATA_SOURCE || process.env.DATA_SOURCE || "json";

export interface Category {
  id: number | string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: number | string;
  category: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  specs: string[];
}

export interface Banner {
  id: number | string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
}

export interface BanquetSection {
  id: string;
  badge?: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface ContactInfo {
  id: string;
  pageTitle: string;
  pageSubtitle?: string;
  sectionTitle: string;
  sectionDescription?: string;
  address: string;
  phone: string;
  email: string;
  businessHours: string[];
  formTitle: string;
}

export interface SocialLinks {
  id: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  linkedin?: string;
}

// ============================================
// Category Functions
// ============================================

export async function getAllCategories(): Promise<Category[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getAllCategories();
  }
  return categoriesData;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | undefined> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getCategoryBySlug(slug);
  }
  return categoriesData.find((category) => category.slug === slug);
}

// ============================================
// Product Functions
// ============================================

export async function getAllProducts(): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getAllProducts();
  }
  return productsData;
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getProductBySlug(slug);
  }
  return productsData.find((product) => product.slug === slug);
}

export async function getProductsByCategory(
  categorySlug: string
): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getProductsByCategory(categorySlug);
  }
  return productsData.filter((product) => product.category === categorySlug);
}

export async function getFeaturedProducts(
  limit: number = 4
): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getFeaturedProducts(limit);
  }
  return productsData.slice(0, limit);
}

export async function getTrendingProducts(
  limit: number = 4
): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getTrendingProducts(limit);
  }
  // Get products from different categories
  return productsData.slice(10, 10 + limit);
}

export async function getBestSellers(limit: number = 4): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getBestSellers(limit);
  }
  // Get best selling products
  return productsData.slice(20, 20 + limit);
}

export async function getNewArrivals(limit: number = 4): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getNewArrivals(limit);
  }
  // Get newest products
  return productsData.slice(30, 30 + limit);
}

// ============================================
// Banner Functions
// ============================================

export async function getActiveBanners(): Promise<Banner[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getActiveBanners();
  }
  return bannersData;
}

export async function getPromoBanners(): Promise<Banner[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getPromoBanners();
  }
  // Filter JSON banners for promo placement (if you add placement field to JSON later)
  return bannersData.slice(0, 2); // Return first 2 banners for promo section from JSON
}

// ============================================
// Banquet Section Functions
// ============================================

export async function getBanquetSection(): Promise<BanquetSection | null> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getBanquetSection();
  }
  // Return hardcoded data as fallback for JSON mode
  return {
    id: "banquet-1",
    badge: "✨ BANQUET SERVICES",
    title: "Transform Your Banquet Hall",
    description:
      "Professional decoration services for banquet halls and event venues. From elegant ceiling drapes to stunning stage setups, we create the perfect ambiance for your special occasions.",
    features: [
      "Complete hall decoration packages",
      "Stage and lighting arrangements",
      "Customizable themes and designs",
      "Professional setup and installation",
    ],
    buttonText: "Explore Banquet Services",
    buttonLink: "/categories/banquet-hall",
    image: "/banner/1.jpg",
  };
}

// ============================================
// Contact Info Functions
// ============================================

export async function getContactInfo(): Promise<ContactInfo | null> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getContactInfo();
  }
  // Return hardcoded data as fallback for JSON mode
  return {
    id: "contact-1",
    pageTitle: "Contact Us",
    pageSubtitle: "Get in touch with us for your decoration needs",
    sectionTitle: "Get In Touch",
    sectionDescription:
      "Have questions or ready to start planning your event? We'd love to hear from you. Reach out to us through any of the following methods.",
    address: "123 Decoration Street\nCity, State 12345\nCountry",
    phone: "+1 (555) 123-4567",
    email: "info@mbdecor.com",
    businessHours: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM",
      "Sunday: Closed",
    ],
    formTitle: "Send Us a Message",
  };
}

// ============================================
// Social Links Functions
// ============================================

export async function getSocialLinks(): Promise<SocialLinks | null> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getSocialLinks();
  }
  // Return null for JSON mode (no social links in JSON)
  return null;
}
