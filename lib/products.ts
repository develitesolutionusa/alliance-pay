import type { DetailContent } from "@/lib/content-types";

export const products: DetailContent[] = [
  {
    slug: "pos",
    title: "POS Checkout",
    eyebrow: "Products",
    summary: "Fast lane checkout for scanning, tenders, discounts, returns, and taxes.",
    description:
      "AlliancePay checkout keeps the counter moving — scan items, apply discounts, calculate tax, take payment, and print or email receipts without clutter.",
    image: {
      src: "/images/products/pos-hero-premium.jpg",
      alt: "AlliancePay POS terminal with catalog, cart, receipt printer, and barcode scanner on a retail counter",
    },
    benefits: [
      {
        title: "Clear lane workflow",
        description:
          "Scan, discount, tax, and tender in a predictable order that new cashiers can learn quickly.",
      },
      {
        title: "Receipts that match the sale",
        description:
          "Print or email receipts with line items, taxes, and tender details your store can reconcile.",
      },
      {
        title: "Returns without guesswork",
        description:
          "Look up prior sales and process returns with the same tax and tender rules used at purchase.",
      },
      {
        title: "Hardware-ready counter",
        description:
          "Designed to work with scanners, printers, cash drawers, and payment devices your store already uses.",
      },
    ],
    workflows: [
      {
        title: "Ring a sale",
        description:
          "Scan barcodes or search the catalog, apply promotions, confirm tax, and take cash or card tenders.",
      },
      {
        title: "Handle exceptions",
        description:
          "Apply manager-approved discounts, voids, and price overrides with clear accountability.",
      },
      {
        title: "Close the lane",
        description:
          "Review tender totals and shift activity so closing the drawer stays consistent each day.",
      },
    ],
    faqs: [
      {
        question: "Does AlliancePay store raw card data?",
        answer:
          "No. Card payments are intended to run through certified payment providers. AlliancePay does not claim to store raw card numbers.",
      },
      {
        question: "Can I customize receipts?",
        answer:
          "Receipt layout and store branding options are part of the checkout product. Final options will match what ships in your plan.",
      },
    ],
    related: [
      {
        title: "Customer Display",
        description: "Show cart lines and totals to shoppers at the counter.",
        href: "/products/customer-display",
      },
      {
        title: "Hardware",
        description: "Terminals, scanners, printers, and drawers for the lane.",
        href: "/products/hardware",
      },
      {
        title: "Checkout feature",
        description: "Deeper look at scanning, discounts, and tenders.",
        href: "/features/checkout",
      },
    ],
  },
  {
    slug: "back-office",
    title: "Back Office",
    eyebrow: "Products",
    summary: "Store dashboard, inventory, purchase orders, and performance reporting.",
    description:
      "Run the store from one back-office workspace — monitor sales, manage inventory, raise purchase orders, and review performance without leaving AlliancePay.",
    image: {
      src: "/images/products/back-office-hero-premium.jpg",
      alt: "AlliancePay back-office store dashboard showing sales, low stock, and purchase orders",
    },
    benefits: [
      {
        title: "One store dashboard",
        description:
          "See today’s sales, low-stock signals, and open purchase orders in a single view.",
      },
      {
        title: "Catalog and inventory together",
        description:
          "Keep SKUs, barcodes, categories, and on-hand quantities aligned with the counter.",
      },
      {
        title: "Purchasing that closes the loop",
        description:
          "Create purchase orders, receive stock, and update inventory without spreadsheet handoffs.",
      },
      {
        title: "Reports operators can use",
        description:
          "Sales, margins, and inventory summaries that help you decide what to reorder and promote.",
      },
    ],
    workflows: [
      {
        title: "Start the day",
        description:
          "Open the dashboard, check overnight sales, and flag items approaching reorder points.",
      },
      {
        title: "Restock with confidence",
        description:
          "Build a purchase order from low-stock items, receive against it, and confirm quantities.",
      },
      {
        title: "Review performance",
        description:
          "Compare departments or periods, then adjust pricing, staffing, or order quantities.",
      },
    ],
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
    ],
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
    ],
  },
  {
    slug: "customer-display",
    title: "Customer Display",
    eyebrow: "Products",
    summary: "Cart visibility and running totals for shoppers at the counter.",
    description:
      "Give customers a clear view of what is being scanned, discounted, and totaled — building trust at the register and reducing “what was that charge?” moments.",
    image: {
      src: "/images/products/customer-display-hero-premium.jpg",
      alt: "AlliancePay customer-facing display showing cart lines and amount due",
    },
    benefits: [
      {
        title: "Transparent cart lines",
        description:
          "Shoppers see items and prices as they are added, so corrections happen before payment.",
      },
      {
        title: "Running totals",
        description:
          "Subtotal, tax, and due amounts stay visible through the sale.",
      },
      {
        title: "Fewer disputes",
        description:
          "Clear display of promotions and tenders reduces end-of-sale confusion.",
      },
      {
        title: "Lane-friendly design",
        description:
          "Readable typography and layout for busy counters — not a marketing slideshow.",
      },
    ],
    workflows: [
      {
        title: "Mirror the sale",
        description:
          "As cashiers scan and discount, the customer display updates in sync with the POS lane.",
      },
      {
        title: "Confirm before tender",
        description:
          "Customers review the due amount before card or cash is accepted.",
      },
      {
        title: "Idle and thank-you states",
        description:
          "Between sales, show a simple idle screen; after payment, confirm the completed sale briefly.",
      },
    ],
    faqs: [
      {
        question: "Is a second screen required?",
        answer:
          "Customer display is optional hardware. Stores can start with cashier-only checkout and add a display later.",
      },
      {
        question: "Does it collect customer data?",
        answer:
          "The display shows cart information for the current sale. Loyalty or marketing capture is separate and consent-based when enabled.",
      },
    ],
    related: [
      {
        title: "POS Checkout",
        description: "The cashier workflow the display mirrors.",
        href: "/products/pos",
      },
      {
        title: "Hardware",
        description: "Compatible terminals and secondary screens.",
        href: "/products/hardware",
      },
    ],
  },
  {
    slug: "hardware",
    title: "Hardware",
    eyebrow: "Products",
    summary: "Terminals, scanners, printers, drawers, scales, and payment devices.",
    description:
      "AlliancePay is designed for real retail counters. Use compatible terminals, barcode scanners, receipt printers, cash drawers, scales, and certified payment devices — with compatibility details verified before we claim specific models.",
    image: {
      src: "/images/products/hardware-hero-v2.jpg",
      alt: "AlliancePay POS terminal, receipt printer, and barcode scanner on a grocery counter",
    },
    benefits: [
      {
        title: "Lane essentials",
        description:
          "Support for the devices independent retailers actually need: scan, print, cash, and pay.",
      },
      {
        title: "Honest compatibility",
        description:
          "We publish device lists only when tested or officially supported — no invented partner logos.",
      },
      {
        title: "Scale-ready grocery workflows",
        description:
          "Weighted items and PLU workflows when scales are part of your approved setup.",
      },
      {
        title: "Payment device separation",
        description:
          "Card acceptance stays with certified providers so PCI scope remains clear.",
      },
    ],
    workflows: [
      {
        title: "Plan the counter",
        description:
          "Choose terminal, scanner, printer, and drawer based on lane volume and store type.",
      },
      {
        title: "Connect and verify",
        description:
          "Pair devices during onboarding and confirm receipts, scans, and drawer kicks before go-live.",
      },
      {
        title: "Expand carefully",
        description:
          "Add customer displays, scales, or extra lanes only after compatibility is confirmed.",
      },
    ],
    faqs: [
      {
        question: "Which exact models are supported?",
        answer:
          "Specific model lists will be published after verification. Until then, treat hardware pages as capability overviews — not a guaranteed catalog.",
      },
      {
        question: "Do I have to buy hardware from AlliancePay?",
        answer:
          "Sales channels for hardware will be confirmed with commercial terms. Many retailers reuse compatible devices they already own.",
      },
    ],
    related: [
      {
        title: "POS Checkout",
        description: "Software that drives the lane hardware.",
        href: "/products/pos",
      },
      {
        title: "Grocery Stores",
        description: "Scale and high-volume lane considerations.",
        href: "/industries/grocery-stores",
      },
    ],
    disclaimer:
      "Hardware compatibility claims are limited to verified devices. Contact AlliancePay before purchasing equipment for a specific rollout.",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    eyebrow: "Products",
    summary: "Store switching, consolidated analytics, settings, and stock transfers.",
    description:
      "Operate more than one store without losing local control. Switch locations, compare performance, transfer stock, and keep settings scoped to each store.",
    image: {
      src: "/images/products/multi-location-hero-premium.jpg",
      alt: "AlliancePay locations dashboard comparing sample stores",
    },
    benefits: [
      {
        title: "Switch stores quickly",
        description:
          "Managers move between locations without juggling separate logins or spreadsheets.",
      },
      {
        title: "Consolidated visibility",
        description:
          "Compare sales and inventory across stores while still drilling into a single location.",
      },
      {
        title: "Location-specific settings",
        description:
          "Taxes, hours, and catalog rules stay appropriate for each store.",
      },
      {
        title: "Stock transfers",
        description:
          "Move inventory between stores with a clear send and receive trail.",
      },
    ],
    workflows: [
      {
        title: "Compare and decide",
        description:
          "Review multi-store sales, then open the underperforming location for detail.",
      },
      {
        title: "Balance stock",
        description:
          "Transfer excess inventory to the store that needs it and confirm receipt.",
      },
      {
        title: "Keep settings local",
        description:
          "Update tax or pricing rules for one store without accidentally changing another.",
      },
    ],
    faqs: [
      {
        question: "Is multi-location required for a single store?",
        answer:
          "No. Single-store retailers can run AlliancePay without multi-location tools.",
      },
      {
        question: "How many stores can I connect?",
        answer:
          "Store limits depend on plan and commercial terms. Talk with sales for your rollout size.",
      },
    ],
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
        description: "Inventory and purchasing across your catalog.",
        href: "/products/back-office",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
