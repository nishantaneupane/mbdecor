import Link from "next/link";
import Image from "next/image";
import { Category } from "@/lib/data";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const imageSrc = category.image || "/categories/placeholder-category.jpg";

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-video bg-gray-200">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={category.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}
