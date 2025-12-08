"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  name: string;
  mainImage: string;
  galleryImages?: string[];
}

export default function ProductGallery({
  name,
  mainImage,
  galleryImages = [],
}: ProductGalleryProps) {
  const allImages = [mainImage, ...galleryImages.filter(Boolean)];
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = allImages[activeIndex] ?? mainImage;

  return (
    <div className="space-y-4">
      <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={activeImage}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {allImages.length > 1 && (
        <div className="grid grid-cols-5 gap-3">
          {allImages.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square rounded-md overflow-hidden border transition-colors ${
                index === activeIndex
                  ? "border-primary ring-2 ring-primary/40"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
