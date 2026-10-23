import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const multiLocationPage = {
  eyebrow: "Products · Multi-Location",
  title: "Multi-Location",
  titleAccent: "without losing local control",
  description:
    "Switch stores, compare performance, transfer stock, and keep taxes and settings scoped to each location. Single-store retailers stay fully supported.",
  heroImage: {
    src: "/images/products/multi-location-hero-premium.jpg",
    alt: "AlliancePay locations dashboard comparing Oak Street Market, Harbor Convenience, and Riverside Grocery",
  },
  capabilities: [
    {
      title: "Store switching",
      description:
        "Authorized managers move between locations without separate logins or spreadsheet handoffs.",
      icon: "store" as IconName,
    },
    {
      title: "Consolidated visibility",
      description:
        "Compare sales across stores, then open one location when you need the detail behind the total.",
      icon: "chart" as IconName,
    },
    {
      title: "Location settings",
      description:
        "Taxes, hours, and catalog rules stay appropriate for each store instead of one shared default.",
      icon: "layers" as IconName,
    },
    {
      title: "Stock transfers",
      description:
        "Move inventory between stores with a send and receive record you can trace later.",
      icon: "package" as IconName,
    },
    {
      title: "Shared catalog, local rules",
      description:
        "Keep a common item list while prices, taxes, and availability can differ by location.",
      icon: "clipboardList" as IconName,
    },
    {
      title: "Role-aware access",
      description:
        "Owners see the group. Store staff work in the locations they are allowed to operate.",
      icon: "users" as IconName,
    },
  ],
  workflow: [
    {
      title: "Choose the store",
      description:
        "Select the location you are operating before ringing sales, counting stock, or editing settings.",
    },
    {
      title: "Compare the group",
      description:
        "Review sales and inventory across stores, then open the location that needs attention.",
    },
    {
      title: "Transfer what is needed",
      description:
        "Send excess stock from one store and confirm receipt at the destination so both counts stay honest.",
    },
    {
      title: "Keep settings local",
      description:
        "Update tax, hours, or catalog rules for one store without rewriting the others.",
    },
  ],
  locations: {
    title: "One organization, stores that stay distinct",
    description:
      "Multi-location tools are for retailers who have outgrown a single counter. You still see the group — each store keeps its own settings and stock.",
    items: [
      "Store switcher for authorized users",
      "Consolidated sales view",
      "Drill into a single location",
      "Location-specific tax and hours",
      "Stock transfer with send and receive",
      "Single-store mode still supported",
    ],
    image: {
      src: "/images/products/multi-location-transfer-premium.jpg",
      alt: "AlliancePay stock transfer from Oak Street Market to Harbor Convenience with an in-transit status",
    },
    href: "/features/multi-location",
  },
  control: {
    title: "Visibility without mixing stores",
    description:
      "Compare locations when you need the big picture. Change a store only when you mean to. Store limits follow your plan.",
    points: [
      "A consolidated view still lets you open one location for detail",
      "Transfers record what left the sending store and what arrived",
      "A setting change on one store does not rewrite another",
      "Multi-location tools appear when your plan and rollout include them",
    ],
  },
  faqs: [
    {
      question: "Is multi-location required for a single store?",
      answer:
        "No. Single-store retailers can run AlliancePay without multi-location tools.",
    },
    {
      question: "How many stores can I connect?",
      answer:
        "Store limits depend on plan and commercial terms. Talk with sales about the size of your rollout.",
    },
    {
      question: "Can each store use different taxes?",
      answer:
        "Yes. Location settings keep tax, hours, and catalog rules scoped to the store you are editing.",
    },
    {
      question: "How do stock transfers work?",
      answer:
        "Create a transfer from the sending store, then confirm receipt at the destination so both locations have a record of what moved.",
    },
  ] satisfies FAQItem[],
  related: [
    {
      title: "Multi-Location feature",
      description: "Feature-level detail for operators and owners.",
      href: "/features/multi-location",
    },
    {
      title: "Reporting & Analytics",
      description: "Location comparisons and sales summaries.",
      href: "/features/reporting-analytics",
    },
    {
      title: "Back Office",
      description: "Inventory and purchasing for the stores you operate.",
      href: "/products/back-office",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Store limits, billing, and rollout scope follow your commercial agreement. Figures on this page are illustrative sample data.",
} as const;
