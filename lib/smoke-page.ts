import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const smokePage = {
  eyebrow: "Industries · Smoke Shops",
  title: "The smoke shop POS",
  titleAccent: "built for specialty retail floors",
  description:
    "AlliancePay helps smoke and vape retailers run age-aware checkout, display-case inventory, and clear staff permissions — without a different tool for every case and cooler.",
  heroImage: {
    src: "/images/industries/smoke/hero-premium.jpg",
    alt: "Bright modern smoke shop with glass display cases and organized specialty shelves",
  },
  heroHighlights: [
    { label: "Age-check prompts", icon: "users" as IconName },
    { label: "Display-case inventory", icon: "package" as IconName },
    { label: "Tight staff permissions", icon: "sparkles" as IconName },
    { label: "Specialty purchasing", icon: "clipboardList" as IconName },
    { label: "Scanner-first lanes", icon: "scanBarcode" as IconName },
  ],
  storeTypes: [
    {
      title: "Neighborhood Smoke Shops",
      description:
        "Everyday specialty retail where regulars expect a quick, careful ring and clear ID checks.",
      image: {
        src: "/images/industries/smoke/neighborhood.jpg",
        alt: "Neighborhood smoke shop aisle with glass cases and bright shelving",
      },
    },
    {
      title: "Vape Retailers",
      description:
        "High-turn devices and consumables that need accurate on-hand counts and fast restocks.",
      image: {
        src: "/images/industries/smoke/vape.jpg",
        alt: "Modern vape retail counter with brightly lit product wall",
      },
    },
    {
      title: "Cigar Boutiques",
      description:
        "Premium boxes and humidified stock where inventory drift is expensive.",
      image: {
        src: "/images/industries/smoke/cigar.jpg",
        alt: "Bright cigar boutique with glass humidors and wooden display shelves",
      },
    },
    {
      title: "Accessory Specialists",
      description:
        "Glassware, papers, and lifestyle SKUs that still need barcodes, taxes, and receiving discipline.",
      image: {
        src: "/images/industries/smoke/accessories.jpg",
        alt: "Specialty accessory shop shelves with organized retail products",
      },
    },
    {
      title: "Urban Specialty Stores",
      description:
        "Compact footprints where every square foot of case space must stay accounted for.",
      image: {
        src: "/images/industries/smoke/specialty.jpg",
        alt: "Urban specialty smoke shop with compact bright display cases",
      },
    },
    {
      title: "Multi-Location Chains",
      description:
        "Compare stores, share catalog settings, and move restricted stock where it sells.",
      image: {
        src: "/images/industries/smoke/multilocation.jpg",
        alt: "Modern smoke shop storefront for a multi-location specialty retailer",
      },
    },
  ],
  painPoints: [
    {
      problem: "Age checks left to staff judgment?",
      solution:
        "Prompt cashiers for ID checks on restricted categories you configure — according to your store policy and local law.",
      icon: "users" as IconName,
    },
    {
      problem: "High-value case stock drifting off the books?",
      solution:
        "Track display-case and back-stock SKUs with counts and adjustments so specialty inventory stays accounted for.",
      icon: "package" as IconName,
    },
    {
      problem: "Voids and discounts without oversight?",
      solution:
        "Limit voids, discounts, and catalog edits to trusted roles so shift teams stay accountable.",
      icon: "sparkles" as IconName,
    },
    {
      problem: "Vendor deliveries that never match the case?",
      solution:
        "Receive against purchase orders so specialty items update inventory accurately when the order arrives.",
      icon: "clipboardList" as IconName,
    },
    {
      problem: "Slow rings when the afternoon rush hits?",
      solution:
        "Scanner-first checkout with clear tenders keeps baskets moving without skipping required prompts.",
      icon: "scanBarcode" as IconName,
    },
    {
      problem: "Hardware and software from three vendors?",
      solution:
        "One AlliancePay lane kit configured to work together from day one — when hardware is verified for your store.",
      icon: "printer" as IconName,
    },
  ],
  operations: {
    eyebrow: "Why AlliancePay",
    title: "Built for how smoke shops actually operate",
    description:
      "Specialty smoke retail runs on age-aware selling, tight permissions, and case-level stock — AlliancePay is structured around that rhythm.",
    image: {
      src: "/images/industries/smoke/ops.jpg",
      alt: "Smoke shop POS counter with glass display cases and specialty shelves behind",
    },
    points: [
      {
        title: "Restricted sales need a clear prompt.",
        description:
          "Age-check workflows guide staff when policy requires it, without inventing compliance for your market.",
      },
      {
        title: "Display cases cannot drift.",
        description:
          "Inventory counts, adjustments, and receiving keep high-value and restricted SKUs tied to what is actually in the case.",
      },
      {
        title: "Permissions protect the register.",
        description:
          "Role controls for voids, discounts, and catalog changes give owners a clean handoff between shifts.",
      },
      {
        title: "Specialty purchasing stays disciplined.",
        description:
          "Purchase orders and thresholds help you reorder what moved — not what you guess sold last week.",
      },
    ],
  },
  switching: [
    {
      timing: "Today",
      title: "Talk with us",
      description:
        "We learn about your catalog, age-check policy, and how you manage display-case inventory.",
    },
    {
      timing: "After discovery",
      title: "We plan migration",
      description:
        "Products, pricing, inventory, and configuration are mapped for your go-live.",
    },
    {
      timing: "Go-live week",
      title: "Train your team",
      description:
        "Your team is trained and your store is ready to operate on AlliancePay.",
    },
  ],
  workflow: [
    {
      title: "Verify then sell",
      description:
        "Complete age prompts, scan items, and finish tenders with a clear receipt.",
    },
    {
      title: "Control the case",
      description:
        "Count display inventory and post adjustments with reasons before variances pile up.",
    },
    {
      title: "Reorder specialty stock",
      description:
        "Use thresholds and sales history to plan the next vendor order accurately.",
    },
    {
      title: "Close the shift",
      description:
        "Reconcile tenders and review exceptions so the next team starts clean.",
    },
  ],
  faqs: [
    {
      question: "Can AlliancePay sell restricted products for me?",
      answer:
        "No. AlliancePay provides POS workflows. Product assortment and legal eligibility are the retailer’s responsibility.",
    },
    {
      question: "Can AlliancePay handle age-restricted items?",
      answer:
        "You can configure age-check prompts for restricted categories you sell. Local law and staff training remain the retailer’s responsibility.",
    },
    {
      question: "Does AlliancePay guarantee legal compliance?",
      answer:
        "No software replaces your legal obligations. AlliancePay provides tools; stores remain responsible for age verification and local tobacco, nicotine, and related product rules.",
    },
    {
      question: "How long does migration take?",
      answer:
        "Timing depends on catalog size and current systems. Many independent stores complete a guided migration after a short discovery — we will give you a realistic timeline in the demo.",
    },
    {
      question: "Can I manage multiple smoke shop locations?",
      answer:
        "Yes with multi-location tools — compare stores, share catalog settings, and transfer stock when your plan includes them.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes. AlliancePay supports onboarding, training, and ongoing operations — ask about hours and channels for your plan during the demo.",
    },
  ] satisfies FAQItem[],
  related: [
    {
      title: "Employee Management",
      description: "Permissions for restricted sales.",
      href: "/features/employee-management",
    },
    {
      title: "Inventory",
      description: "Track specialty and restricted SKUs.",
      href: "/features/inventory",
    },
    {
      title: "Checkout",
      description: "Age-aware lane flows.",
      href: "/features/checkout",
    },
    {
      title: "Purchase Orders",
      description: "Receive specialty vendor deliveries.",
      href: "/features/purchase-orders",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Tobacco, nicotine, and related product regulations vary widely. Adapt store policy and staff training to local law. AlliancePay provides tools; stores remain responsible for compliance. Photography is illustrative of specialty retail environments and does not imply product endorsements.",
} as const;
