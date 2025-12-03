"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getAllCategories, getProductsByCategory } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setCategories(getAllCategories());
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md h-24">
      <div className="container h-full">
        <div className="flex items-center justify-center h-full relative">
          {/* Logo */}
          <Link
            href="/"
            className="absolute left-0 flex items-center px-4 h-full"
          >
            <Image
              src="/logo/whitelogo.png"
              alt="MD Decor"
              width={80}
              height={27}
              priority
            />
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Home
            </Link>

            {/* Banquet Link */}
            <Link
              href="/categories/banquet-hall"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Banquet
            </Link>

            {/* Categories Dropdown */}
            {categories
              .filter(
                (category) =>
                  category.slug !== "weaning-ceremony" &&
                  category.slug !== "gunyo-cholo" &&
                  category.slug !== "banquet-hall"
              )
              .map((category) => (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(category.slug)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={`/categories/${category.slug}`}
                    className="text-white hover:text-white/80 transition-colors font-medium flex items-center gap-1 py-2"
                  >
                    {category.name}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>

                  {/* Dropdown with Products */}
                  {openDropdown === category.slug && (
                    <div className="absolute top-full left-0 pt-2 w-64">
                      <div className="bg-white shadow-lg rounded-lg py-3">
                        <div className="px-4 py-2 text-sm font-semibold text-foreground">
                          {category.name}
                        </div>
                        {getProductsByCategory(category.slug)
                          .slice(0, 5)
                          .map((product) => (
                            <div
                              key={product.id}
                              className="px-4 py-2 text-sm text-gray-600"
                            >
                              {product.name}
                            </div>
                          ))}
                        <Link
                          href={`/categories/${category.slug}`}
                          className="block px-4 py-2 text-sm text-primary hover:bg-primary/5 transition-colors font-semibold mt-2"
                        >
                          View All →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            <Link
              href="/about"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-white/80 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden absolute right-0 flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-white/20 pt-4 bg-primary w-screen absolute left-0">
            <div className="flex flex-col gap-4 px-4">
              <Link
                href="/"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Banquet Link */}
              <Link
                href="/categories/banquet-hall"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Banquet
              </Link>

              {/* Mobile Categories */}
              {categories
                .filter((category) => category.slug !== "banquet-hall")
                .map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleDropdown(`mobile-${category.slug}`)}
                      className="w-full text-left text-white hover:text-white/80 transition-colors font-medium flex items-center justify-between"
                    >
                      {category.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          openDropdown === `mobile-${category.slug}`
                            ? "rotate-180"
                            : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === `mobile-${category.slug}` && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {getProductsByCategory(category.slug)
                          .slice(0, 5)
                          .map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="text-sm text-white hover:text-white/80"
                              onClick={() => setIsOpen(false)}
                            >
                              {product.name}
                            </Link>
                          ))}
                        <Link
                          href={`/categories/${category.slug}`}
                          className="text-sm text-white hover:text-white/80 font-semibold"
                          onClick={() => setIsOpen(false)}
                        >
                          View All →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}

              <Link
                href="/about"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
