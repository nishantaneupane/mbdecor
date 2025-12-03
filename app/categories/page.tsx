import { getAllCategories } from "@/lib/data";
import CategoryCard from "@/components/CategoryCard";

export const metadata = {
  title: "Categories - MD Decor",
  description: "Browse all our decoration categories",
};

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            All Categories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of decoration categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
