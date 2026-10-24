import type { IconName } from "@/components/icons/FeatureIcon";

export type FeatureItem = {
  slug: string;
  title: string;
  description: string;
  summary: string;
  href: string;
  icon: IconName;
};

export const features: FeatureItem[] = [
  {
    slug: "checkout",
    title: "POS Checkout",
    description: "Scan, discount, tax, and tender sales with a clear, fast lane experience.",
    summary: "Fast checkout with scanning, discounts, tax, and tenders.",
    href: "/features/checkout",
    icon: "shoppingCart",
  },
  {
    slug: "inventory",
    title: "Inventory Management",
    description: "Track stock, adjustments, and reorder points across your catalog.",
    summary: "Track stock, adjustments, and reorder points.",
    href: "/features/inventory",
    icon: "warehouse",
  },
  {
    slug: "employee-management",
    title: "Employee Management",
    description: "Assign roles, manage shifts, and keep activity accountable.",
    summary: "Roles, shifts, and accountable staff activity.",
    href: "/features/employee-management",
    icon: "idCard",
  },
  {
    slug: "loyalty-marketing",
    title: "Loyalty & Marketing",
    description: "Reward repeat customers with consent-based loyalty programs.",
    summary: "Consent-based rewards for repeat customers.",
    href: "/features/loyalty-marketing",
    icon: "gift",
  },
  {
    slug: "reporting-analytics",
    title: "Reporting & Analytics",
    description: "Understand sales, margins, and store performance at a glance.",
    summary: "Sales, margins, and store performance in one view.",
    href: "/features/reporting-analytics",
    icon: "trendingUp",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    description: "Switch stores, consolidate reporting, and transfer stock.",
    summary: "Switch stores, compare results, and transfer stock.",
    href: "/features/multi-location",
    icon: "mapPinned",
  },
];

export const valueProps = [
  {
    id: "all-in-one",
    title: "All-in-One Solution",
    description: "Checkout, inventory, staff, customers, and reporting in one retail platform.",
    icon: "layers" as const,
  },
  {
    id: "industry",
    title: "Built for Your Industry",
    description: "Workflows tailored for grocery, convenience, liquor, and smoke shops.",
    icon: "store" as const,
  },
  {
    id: "easy",
    title: "Easy to Use",
    description: "Clean interfaces designed for busy counters and new hires.",
    icon: "sparkles" as const,
  },
  {
    id: "support",
    title: "Product Support",
    description: "Reach the AlliancePay team for setup help and product guidance.",
    icon: "headset" as const,
  },
];
