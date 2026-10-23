import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const posPage = {
  eyebrow: "Products · POS",
  title: "POS Checkout",
  titleAccent: "built for busy lanes",
  description:
    "Scan, discount, tax, tender, and receipt — a clear AlliancePay checkout workflow that new cashiers can learn quickly and managers can trust.",
  heroImage: {
    src: "/images/products/pos-hero-premium.jpg",
    alt: "AlliancePay POS terminal with catalog, cart, receipt printer, and barcode scanner on a retail counter",
  },
  capabilities: [
    {
      title: "Barcode scanning",
      description:
        "Scan UPCs or search the catalog when a label will not read — keep the line moving.",
      icon: "scanBarcode" as IconName,
    },
    {
      title: "Discounts",
      description:
        "Apply promotions and manager-approved markdowns with a trail you can audit later.",
      icon: "percent" as IconName,
    },
    {
      title: "Taxes",
      description:
        "Calculate tax from your configured rules so receipts and reports stay consistent.",
      icon: "clipboardList" as IconName,
    },
    {
      title: "Payments",
      description:
        "Take cash and card tenders through certified payment providers — no raw card storage.",
      icon: "creditCard" as IconName,
    },
    {
      title: "Receipts",
      description:
        "Print or email receipts with line items, tax, and tender details for reconciliation.",
      icon: "receipt" as IconName,
    },
    {
      title: "Returns",
      description:
        "Look up a prior sale and process returns with the same tax and tender rules used at purchase.",
      icon: "rotateCcw" as IconName,
    },
  ],
  workflow: [
    {
      title: "Start the sale",
      description:
        "Scan barcodes or search the catalog. Add quantities and see the cart update in real time.",
    },
    {
      title: "Adjust with control",
      description:
        "Apply discounts, price overrides, or voids within the cashier’s permissions — managers approve the rest.",
    },
    {
      title: "Confirm tax & total",
      description:
        "Tax is calculated from store rules before tender so the due amount is never a surprise.",
    },
    {
      title: "Take payment",
      description:
        "Collect cash, card, or mixed tenders. Card entry stays on certified payment hardware.",
    },
    {
      title: "Finish clean",
      description:
        "Print or email the receipt, open the drawer when needed, and ready the lane for the next customer.",
    },
  ],
  hardware: {
    title: "Hardware that fits the counter",
    description:
      "AlliancePay is designed for real retail lanes — terminals, scanners, printers, cash drawers, and payment devices. Exact model lists publish after verification.",
    items: [
      "POS terminal or tablet station",
      "Barcode scanner",
      "Receipt printer",
      "Cash drawer",
      "Certified payment device",
      "Optional customer display",
    ],
    image: {
      src: "/images/home/Modern Grocery Checkout with AlliancePay.png",
      alt: "Grocery checkout lane with AlliancePay POS hardware",
    },
    href: "/products/hardware",
  },
  payments: {
    title: "Payments without the PCI guesswork",
    description:
      "Card acceptance is intended to run through certified providers. AlliancePay does not claim to store raw card numbers, and named processors appear only when confirmed for your market.",
    points: [
      "Cash and approved card tenders in one sale when your setup allows",
      "Sensitive card entry on certified devices — not in browser forms",
      "Shift totals that help you reconcile drawer and provider settlements",
    ],
  },
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
    {
      question: "Which payment processors are supported?",
      answer:
        "Named processors are listed only after commercial and technical confirmation. Ask sales about availability in your region.",
    },
    {
      question: "Does checkout work offline?",
      answer:
        "Offline behavior is a future POS milestone. Until documented, treat online connectivity as the default operating mode.",
    },
  ] satisfies FAQItem[],
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
  ] satisfies RelatedLink[],
} as const;
