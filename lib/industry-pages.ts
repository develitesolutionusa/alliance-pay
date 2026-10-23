import type { DetailContent } from "@/lib/content-types";
import { industries } from "@/lib/industries";

export const industryPages: DetailContent[] = [
  {
    slug: "grocery-stores",
    title: "Grocery Stores",
    eyebrow: "Industries",
    summary: "High-volume lanes, weighted items, and department-ready inventory.",
    description:
      "AlliancePay helps grocery operators keep lanes fast, track perishable and dry goods inventory, and manage departments without a tool for every aisle.",
    image: {
      src: "/images/home/grocery.jpg",
      alt: "Produce aisle in a grocery store",
    },
    benefits: [
      {
        title: "High-volume checkout",
        description:
          "Scanner-first lanes built for baskets that add up quickly.",
      },
      {
        title: "Weighted item readiness",
        description:
          "Support for scale-connected workflows when hardware is verified for your store.",
      },
      {
        title: "Department inventory",
        description:
          "Organize SKUs by grocery departments so reporting and reordering stay practical.",
      },
      {
        title: "Purchase order loop",
        description:
          "Receive deliveries into inventory so on-hand quantities reflect the cooler and shelf.",
      },
    ],
    workflows: [
      {
        title: "Ring grocery baskets",
        description:
          "Scan barcoded items, handle PLUs where configured, and tender mixed payments.",
      },
      {
        title: "Receive the truck",
        description:
          "Match deliveries to purchase orders and update stock by department.",
      },
      {
        title: "Review what moved",
        description:
          "Use sales and inventory reports to prioritize restocks and promotions.",
      },
    ],
    faqs: [
      {
        question: "Do you support SNAP/EBT?",
        answer:
          "Benefit program tenders are region-specific and provider-dependent. AlliancePay will only claim support after verification for your market.",
      },
      {
        question: "Can I run multiple grocery locations?",
        answer:
          "Yes with multi-location tools — compare stores and transfer stock when your plan includes them.",
      },
    ],
    related: [
      { title: "POS Checkout", description: "Lane software for grocery volume.", href: "/products/pos" },
      { title: "Hardware", description: "Scanners, scales, and printers.", href: "/products/hardware" },
      { title: "Inventory", description: "Department stock and counts.", href: "/features/inventory" },
    ],
    disclaimer:
      "Regulatory and benefit-program requirements vary by region. Confirm compliance needs for your operating market before go-live.",
  },
  {
    slug: "convenience-stores",
    title: "Convenience Stores",
    eyebrow: "Industries",
    summary: "Fast checkout and inventory for everyday retail.",
    description:
      "Convenience retail lives on speed. AlliancePay keeps checkout short, inventory current, and staff permissions tight for high-turn SKUs.",
    image: {
      src: "/images/home/convenience.jpg",
      alt: "Convenience store shelves and coolers",
    },
    benefits: [
      {
        title: "Seconds-matter checkout",
        description:
          "Fast scanning and simple tenders for grab-and-go trips.",
      },
      {
        title: "High-turn inventory",
        description:
          "Reorder thresholds for beverages, snacks, and tobacco-adjacent categories you choose to sell.",
      },
      {
        title: "Shift-ready staffing",
        description:
          "Role controls that fit part-time teams and late hours.",
      },
      {
        title: "Clear daily reports",
        description:
          "Know what sold overnight before the next delivery window.",
      },
    ],
    workflows: [
      {
        title: "Serve the rush",
        description:
          "Ring quick baskets with scanning, tax, and common tenders.",
      },
      {
        title: "Restock fast movers",
        description:
          "Use low-stock signals to build purchase orders for coolers and snack aisles.",
      },
      {
        title: "Close the shift",
        description:
          "Reconcile tenders and review exceptions before the next team clocks in.",
      },
    ],
    faqs: [
      {
        question: "Do you support fuel pumps?",
        answer:
          "Fuel integration is not claimed until verified. AlliancePay focuses first on in-store retail checkout and inventory.",
      },
    ],
    related: [
      { title: "Checkout", description: "Speed-focused lane workflows.", href: "/features/checkout" },
      { title: "Employee Management", description: "Roles for shift teams.", href: "/features/employee-management" },
      { title: "Payments", description: "Tenders through certified providers.", href: "/features/payments" },
    ],
    disclaimer:
      "Age-restricted and regulated categories must follow local law. Configure staff controls accordingly.",
  },
  {
    slug: "liquor-stores",
    title: "Liquor Stores",
    eyebrow: "Industries",
    summary: "Age checks, bottle tracking, and compliance-aware sales.",
    description:
      "Liquor retail needs disciplined checkout and catalog control. AlliancePay supports age-aware selling, bottle-level inventory, and reports owners can trust.",
    image: {
      src: "/images/home/liquor.jpg",
      alt: "Bottle shelves in a liquor store",
    },
    benefits: [
      {
        title: "Age-aware checkout",
        description:
          "Prompt staff for ID checks on restricted items according to your store policy.",
      },
      {
        title: "Bottle catalog control",
        description:
          "Track SKUs, sizes, and on-hand quantities across shelves and back stock.",
      },
      {
        title: "Margin visibility",
        description:
          "See which spirits and wines carry the store — and which need attention.",
      },
      {
        title: "Receiving discipline",
        description:
          "Post deliveries accurately so expensive bottles do not drift off the books.",
      },
    ],
    workflows: [
      {
        title: "Sell with checks",
        description:
          "Cashiers scan bottles, complete required age prompts, and tender the sale.",
      },
      {
        title: "Receive allocations",
        description:
          "Match distributor deliveries to purchase orders and update inventory.",
      },
      {
        title: "Protect high-value stock",
        description:
          "Count premium SKUs regularly and investigate variances quickly.",
      },
    ],
    faqs: [
      {
        question: "Does AlliancePay guarantee legal compliance?",
        answer:
          "No software replaces your legal obligations. AlliancePay provides tools; stores remain responsible for age verification and local alcohol rules.",
      },
    ],
    related: [
      { title: "Checkout", description: "Restricted-item lane prompts.", href: "/features/checkout" },
      { title: "Inventory", description: "Bottle-level stock control.", href: "/features/inventory" },
      { title: "Reporting & Analytics", description: "Margin and sales by category.", href: "/features/reporting-analytics" },
    ],
    disclaimer:
      "Alcohol sales laws differ by jurisdiction. Confirm licensing and ID requirements for your market.",
  },
  {
    slug: "smoke-shops",
    title: "Smoke Shops",
    eyebrow: "Industries",
    summary: "Restricted-product workflows with clear staff controls.",
    description:
      "Specialty smoke and vape retail needs careful age controls, clear staff permissions, and inventory that tracks restricted SKUs accurately.",
    image: {
      src: "/images/home/smoke.jpg",
      alt: "Glass display cases in a specialty retail shop",
    },
    benefits: [
      {
        title: "Restricted-product prompts",
        description:
          "Guide staff through ID checks for age-restricted categories you sell.",
      },
      {
        title: "Tight permissions",
        description:
          "Limit voids, discounts, and catalog edits to trusted roles.",
      },
      {
        title: "Display-case inventory",
        description:
          "Track high-value and restricted SKUs with counts and adjustments.",
      },
      {
        title: "Specialty purchasing",
        description:
          "Receive against purchase orders so specialty items stay accounted for.",
      },
    ],
    workflows: [
      {
        title: "Verify then sell",
        description:
          "Complete age prompts, scan items, and finish tenders with a clear receipt.",
      },
      {
        title: "Control the case",
        description:
          "Count display inventory and post adjustments with reasons.",
      },
      {
        title: "Reorder specialty stock",
        description:
          "Use thresholds and sales history to plan the next vendor order.",
      },
    ],
    faqs: [
      {
        question: "Can AlliancePay sell restricted products for me?",
        answer:
          "No. AlliancePay provides POS workflows. Product assortment and legal eligibility are the retailer’s responsibility.",
      },
    ],
    related: [
      { title: "Employee Management", description: "Permissions for restricted sales.", href: "/features/employee-management" },
      { title: "Inventory", description: "Track specialty and restricted SKUs.", href: "/features/inventory" },
      { title: "Checkout", description: "Age-aware lane flows.", href: "/features/checkout" },
    ],
    disclaimer:
      "Tobacco, nicotine, and related product regulations vary widely. Adapt store policy and staff training to local law.",
  },
];

export function getIndustryPage(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export function industryImageForSlug(slug: string) {
  return industries.find((industry) => industry.slug === slug)?.image;
}
