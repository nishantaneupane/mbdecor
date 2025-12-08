import fs from "node:fs";
import path from "node:path";
import { createClient } from "@sanity/client";
import dotenv from "dotenv";

// Explicitly load .env.local (falls back to .env if not present)
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing Sanity environment variables. Please set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_TOKEN."
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-12-01",
  token,
  useCdn: false,
});

const categoriesPath = path.join(process.cwd(), "data", "categories.json");

function loadCategories() {
  const raw = fs.readFileSync(categoriesPath, "utf-8");
  return JSON.parse(raw);
}

async function importCategories() {
  const categories = loadCategories();

  console.log(`Importing ${categories.length} categories to Sanity...`);

  for (const cat of categories) {
    const doc = {
      _id: `category-${cat.slug}`,
      _type: "category",
      name: cat.name,
      slug: { current: cat.slug },
      description: cat.description || "",
      order: typeof cat.id === "number" ? cat.id : undefined,
    };

    await client.createOrReplace(doc);
    console.log("Imported category:", cat.slug);
  }

  console.log("Done importing categories.");
}

importCategories().catch((err) => {
  console.error(err);
  process.exit(1);
});
