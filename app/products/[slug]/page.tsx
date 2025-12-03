import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/data";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.name} - MD Decor`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.category);

  // Get related products from the same category (excluding current product)
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="py-16">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/categories" className="hover:text-primary">
            Categories
          </Link>
          <span className="mx-2">/</span>
          {category && (
            <>
              <Link
                href={`/categories/${category.slug}`}
                className="hover:text-primary"
              >
                {category.name}
              </Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block text-primary hover:underline mb-6"
              >
                {category.name}
              </Link>
            )}

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specs && product.specs.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <ul className="space-y-2">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">
                Related Products
              </h2>
              {category && (
                <Link
                  href={`/categories/${category.slug}`}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
                >
                  View All in {category.name}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
