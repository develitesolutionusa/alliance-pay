export type IndustryItem = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  href: string;
  image: string;
  imageHint: string;
};

export const industries: IndustryItem[] = [
  {
    slug: "grocery-stores",
    title: "Grocery Stores",
    description: "High-volume lanes, weighted items, and department-ready inventory.",
    summary: "Complete POS workflows for grocery and supermarket lanes.",
    href: "/industries/grocery-stores",
    image: "/images/industries/grocery/hero-premium.jpg",
    imageHint: "Bright modern grocery aisle with fresh produce and refrigerated cases",
  },
  {
    slug: "convenience-stores",
    title: "Convenience Stores",
    description: "Fast checkout, fuel-adjacent retail, and everyday essentials.",
    summary: "Fast checkout and inventory for everyday retail.",
    href: "/industries/convenience-stores",
    image: "/images/home/convenience.jpg",
    imageHint: "Convenience store shelves and coolers",
  },
  {
    slug: "liquor-stores",
    title: "Liquor Stores",
    description: "Age checks, bottle catalog control, and compliance-aware sales.",
    summary: "Age checks, bottle tracking, and compliance-aware sales.",
    href: "/industries/liquor-stores",
    image: "/images/home/liquor.jpg",
    imageHint: "Bottle shelves in a liquor store",
  },
  {
    slug: "smoke-shops",
    title: "Smoke Shops",
    description: "Restricted-product workflows with clear staff controls.",
    summary: "Restricted-product workflows with clear staff controls.",
    href: "/industries/smoke-shops",
    image: "/images/home/smoke.jpg",
    imageHint: "Glass display cases in a specialty retail shop",
  },
];
