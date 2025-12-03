import {
  getAllCategories,
  getFeaturedProducts,
  getTrendingProducts,
  getBestSellers,
  getNewArrivals,
} from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import BannerCarousel from "@/components/BannerCarousel";
import PromoBanner from "@/components/PromoBanner";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";

export default function Home() {
  const categories = getAllCategories();
  const featuredProducts = getFeaturedProducts(4);
  const trendingProducts = getTrendingProducts(4);
  const bestSellers = getBestSellers(4);
  const newArrivals = getNewArrivals(4);

  return (
    <>
      {/* Theme Switcher */}
      <ThemeSwitcher />

      {/* Banner Carousel */}
      <BannerCarousel />

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of decoration categories tailored for
              every occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banners Section */}
      <section className="py-8 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <PromoBanner
              title="Wedding Celebrations"
              subtitle="Create magical moments with our exclusive wedding decoration collection"
              image="/banner/4.jpg"
              link="/categories/wedding"
              imagePosition="left"
            />
            <PromoBanner
              title="Birthday Parties"
              subtitle="Make every birthday unforgettable with our vibrant party decor"
              image="/banner/5.jpg"
              link="/categories/birthday"
              imagePosition="right"
            />
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Trending Now
              </h2>
              <p className="text-gray-600">Most popular items this season</p>
            </div>
            <Link
              href="/categories"
              className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              View All
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 bg-linear-to-br from-primary/5 via-transparent to-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-4">
              🏆 BEST SELLERS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Customer Favorites
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our top-rated decoration items loved by customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full mb-3">
                ✨ NEW
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                New Arrivals
              </h2>
              <p className="text-gray-600">
                Fresh designs just added to our collection
              </p>
            </div>
            <Link
              href="/categories"
              className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center gap-2"
            >
              Explore More
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-linear-to-r from-primary/90 to-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Event?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Explore our complete collection and find the perfect decorations
              for your special occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/categories"
                className="px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse All Products
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
