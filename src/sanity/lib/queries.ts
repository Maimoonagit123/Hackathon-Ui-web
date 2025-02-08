import { groq } from "next-sanity";
export const allProducts = groq`*[_type == "products"]`;
export const featuredProducts = groq`*[_type == "products" && "featured" in tags][0..3]`;
export const ourProducts = groq`*[_type == "products"][0..7]`;
export const allCategories = groq `*[_type == "categories"]`;

