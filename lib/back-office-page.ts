import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const backOfficePage = {
  eyebrow: "Products · Back Office",
  title: "Back Office",
  titleAccent: "for store operators",
  description:
    "Monitor sales, manage inventory, raise purchase orders, and review performance from one AlliancePay workspace — so the counter and the office stay on the same numbers.",
  heroImage: {
    src: "/images/products/back-office-hero-premium.jpg",
    alt: "AlliancePay back-office store dashboard on a monitor showing sales, low stock, and purchase orders",
  },
  capabilities: [
    {
      title: "Store dashboard",
      description:
        "See today’s sales, transaction volume, and operational alerts in one opening view.",
      icon: "store" as IconName,
    },
    {
      title: "Catalog & inventory",
      description:
        "Keep SKUs, barcodes, categories, and on-hand quantities aligned with checkout.",
      icon: "package" as IconName,
    },
    {
      title: "Purchase orders",
      description:
        "Build POs from low-stock signals, send them to vendors, and track what is still open.",
      icon: "clipboardList" as IconName,
    },
    {
      title: "Receiving",
      description:
        "Receive against a PO, confirm quantities, and update stock without spreadsheet handoffs.",
      icon: "layers" as IconName,
    },
    {
      title: "Sales reports",
      description:
        "Review sales by period or department so you know what moved — and what did not.",
      icon: "chart" as IconName,
    },
    {
      title: "Performance summaries",
      description:
        "Margins and inventory summaries that help you decide what to reorder and promote.",
      icon: "sparkles" as IconName,
    },
  ],
  workflow: [
    {
      title: "Open the dashboard",
      description:
        "Check overnight sales, low-stock alerts, and open purchase orders before the rush starts.",
    },
    {
      title: "Act on inventory",
      description:
        "Adjust counts, review reorder points, and flag items that need a purchase order.",
    },
    {
      title: "Create the PO",
      description:
        "Build a purchase order from low-stock items, set quantities, and send it to the vendor.",
    },
    {
      title: "Receive & confirm",
      description:
        "When stock arrives, receive against the PO and update on-hand quantities in the same system.",
    },
    {
      title: "Review performance",
      description:
        "Compare sales and margins, then adjust pricing, promotions, or order quantities.",
    },
  ],
  inventory: {
    title: "Inventory and purchasing that close the loop",
    description:
      "Catalog, stock levels, and purchase orders live together — so receiving updates the same numbers the counter sells from.",
    items: [
      "SKU, barcode, and category maintenance",
      "On-hand quantities tied to sales",
      "Low-stock and reorder signals",
      "Purchase orders from vendor catalogs",
      "Receiving that updates inventory",
      "Clear status from draft to received",
    ],
    image: {
      src: "/images/products/back-office-inventory-premium.jpg",
      alt: "AlliancePay inventory and purchase-order screens on a back-office monitor",
    },
    href: "/features/inventory",
  },
  reporting: {
    title: "Reports operators can actually use",
    description:
      "Sales, margins, and inventory summaries meant for independent retailers — not a wall of unverified analytics claims.",
    points: [
      "Day and period sales views that match what happened at the register",
      "Department or category breakdowns to spot what to reorder or promote",
      "Inventory summaries that connect stock movement to purchasing decisions",
    ],
  },
  faqs: [
    {
      question: "Is the back office separate from checkout?",
      answer:
        "They share the same catalog and inventory. Checkout sells; back office manages stock, purchasing, and reports.",
    },
    {
      question: "Can multiple managers use back office?",
      answer:
        "Role-based access is planned so managers can work without sharing a single password. Exact permissions publish with the authenticated product.",
    },
    {
      question: "Does purchasing update inventory automatically?",
      answer:
        "Receiving against a purchase order is designed to update on-hand quantities in the same catalog checkout uses. Final behavior matches what ships in your plan.",
    },
    {
      question: "Can I export reports?",
      answer:
        "Export and scheduled-report options will match what is available in your plan when the reporting module ships. Ask sales what is ready for your rollout.",
    },
  ] satisfies FAQItem[],
  related: [
    {
      title: "Inventory",
      description: "Stock levels, counts, and adjustments.",
      href: "/features/inventory",
    },
    {
      title: "Purchase Orders",
      description: "Vendors, receiving, and procurement status.",
      href: "/features/purchase-orders",
    },
    {
      title: "Reporting & Analytics",
      description: "Sales and margin visibility for store owners.",
      href: "/features/reporting-analytics",
    },
  ] satisfies RelatedLink[],
} as const;
