import categoriesData from "@/data/categories.json";
import productsData from "@/data/products.json";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: number;
  category: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  specs: string[];
}

// Category functions
export function getAllCategories(): Category[] {
  return categoriesData;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find((category) => category.slug === slug);
}

// Product functions
export function getAllProducts(): Product[] {
  return productsData;
}

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return productsData.filter((product) => product.category === categorySlug);
}

export function getFeaturedProducts(limit: number = 4): Product[] {
  return productsData.slice(0, limit);
}

export function getTrendingProducts(limit: number = 4): Product[] {
  // Get products from different categories
  return productsData.slice(10, 10 + limit);
}

export function getBestSellers(limit: number = 4): Product[] {
  // Get best selling products
  return productsData.slice(20, 20 + limit);
}

export function getNewArrivals(limit: number = 4): Product[] {
  // Get newest products
  return productsData.slice(30, 30 + limit);
}
