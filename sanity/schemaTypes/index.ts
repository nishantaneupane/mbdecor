import { type SchemaTypeDefinition } from "sanity";
import category from "./category";
import product from "./product";
import banner from "./banner";
import banquetSection from "./banquetSection";
import contactInfo from "./contactInfo";
import socialLinks from "./socialLinks";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category, product, banner, banquetSection, contactInfo, socialLinks],
};
