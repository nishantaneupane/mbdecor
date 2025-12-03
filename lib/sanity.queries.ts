import { client } from './sanity.client'

// Category Queries
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(order asc, name asc) {
      "id": _id,
      name,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      order
    }
  `)
}

export async function getCategoryBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "category" && slug.current == $slug][0] {
      "id": _id,
      name,
      "slug": slug.current,
      description,
      "image": image.asset->url,
      order
    }
  `,
    { slug }
  )
}

// Product Queries
export async function getAllProducts() {
  return client.fetch(`
    *[_type == "product"] | order(order asc, _createdAt desc) {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isFeatured,
      isTrending,
      isBestSeller,
      isNewArrival,
      order
    }
  `)
}

export async function getProductsByCategory(categorySlug: string) {
  return client.fetch(
    `
    *[_type == "product" && category->slug.current == $slug] | order(order asc, _createdAt desc) {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isFeatured,
      isTrending,
      isBestSeller,
      isNewArrival,
      order
    }
  `,
    { slug: categorySlug }
  )
}

export async function getProductBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0] {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isFeatured,
      isTrending,
      isBestSeller,
      isNewArrival,
      order
    }
  `,
    { slug }
  )
}

export async function getFeaturedProducts(limit: number = 8) {
  return client.fetch(
    `
    *[_type == "product" && isFeatured == true] | order(order asc, _createdAt desc) [0...$limit] {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isFeatured,
      order
    }
  `,
    { limit }
  )
}

export async function getTrendingProducts(limit: number = 8) {
  return client.fetch(
    `
    *[_type == "product" && isTrending == true] | order(order asc, _createdAt desc) [0...$limit] {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isTrending,
      order
    }
  `,
    { limit }
  )
}

export async function getBestSellers(limit: number = 8) {
  return client.fetch(
    `
    *[_type == "product" && isBestSeller == true] | order(order asc, _createdAt desc) [0...$limit] {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isBestSeller,
      order
    }
  `,
    { limit }
  )
}

export async function getNewArrivals(limit: number = 8) {
  return client.fetch(
    `
    *[_type == "product" && isNewArrival == true] | order(order asc, _createdAt desc) [0...$limit] {
      "id": _id,
      name,
      "slug": slug.current,
      "category": category->slug.current,
      description,
      "image": image.asset->url,
      specs,
      isNewArrival,
      order
    }
  `,
    { limit }
  )
}

// Banner Queries
export async function getActiveBanners() {
  return client.fetch(`
    *[_type == "banner" && isActive == true] | order(order asc) {
      "id": _id,
      title,
      subtitle,
      "image": image.asset->url,
      link,
      order
    }
  `)
}
