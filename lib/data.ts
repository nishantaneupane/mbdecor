// JSON Data Imports
import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";

// Sanity Imports
import * as sanityQueries from "./sanity.queries";

// Data source configuration
const DATA_SOURCE = process.env.DATA_SOURCE || "json";

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

export async function getFeaturedProducts(limit: number = 4): Promise<Product[]> {
  if (DATA_SOURCE === "sanity") {
    return await sanityQueries.getFeaturedProducts(limit);
  }
  return productsData.slice(0, limit);
}

export async function getTrendingProducts(limit: number = 4): Promise<Product[]> {
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
