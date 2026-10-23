import { featurePages } from "@/lib/feature-pages";
import { industryPages } from "@/lib/industry-pages";
import { products } from "@/lib/products";

export const productRoutes = products.map((product) => ({
  slug: product.slug,
  title: product.title,
  description: product.summary,
}));

export const featureRoutes = featurePages.map((feature) => ({
  slug: feature.slug,
  title: feature.title,
  description: feature.summary,
}));

export const industryRoutes = industryPages.map((industry) => ({
  slug: industry.slug,
  title: industry.title,
  description: industry.summary,
}));
