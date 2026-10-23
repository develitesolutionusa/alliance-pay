import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const hardwarePage = {
  eyebrow: "Products · Hardware",
  title: "Hardware",
  titleAccent: "built for real retail counters",
  description:
    "Terminals, scanners, printers, cash drawers, scales, and certified payment devices — planned for the lane, verified before we claim specific models.",
  heroImage: {
    src: "/images/products/hardware-hero-v2.jpg",
    alt: "AlliancePay POS terminal, receipt printer, and barcode scanner on a grocery counter",
  },
  devices: [
    {
      title: "POS terminals",
      description:
        "Counter stations and tablet setups sized for independent retail lanes — not a one-size kiosk claim.",
      icon: "store" as IconName,
    },
    {
      title: "Barcode scanners",
      description:
        "Handheld or presentation scanners so cashiers keep baskets moving when labels cooperate.",
      icon: "scanBarcode" as IconName,
    },
    {
      title: "Receipt printers",
      description:
        "Thermal printers for clear receipts that match the sale — line items, tax, and tender.",
      icon: "printer" as IconName,
    },
    {
      title: "Cash drawers",
      description:
        "Drawer kicks timed to cash tenders so opening and closing the shift stay consistent.",
      icon: "package" as IconName,
    },
    {
      title: "Scales",
      description:
        "Weighted items and PLU workflows when a verified scale is part of your grocery setup.",
      icon: "scale" as IconName,
    },
    {
      title: "Payment devices",
      description:
        "Card entry stays on certified payment hardware so PCI scope remains clear and honest.",
      icon: "creditCard" as IconName,
    },
  ],
  workflow: [
    {
      title: "Plan the counter",
      description:
        "Match terminal, scanner, printer, and drawer to lane volume and store type before you buy.",
    },
    {
      title: "Connect devices",
      description:
        "Pair hardware during onboarding so scan, print, and drawer kick are wired into the POS flow.",
    },
    {
      title: "Verify before go-live",
      description:
        "Run test sales — receipts, barcodes, cash opens, and payment prompts — before the first real customer.",
    },
    {
      title: "Expand carefully",
      description:
        "Add customer displays, scales, or extra lanes only after compatibility is confirmed for your rollout.",
    },
  ],
  lane: {
    title: "Everything the lane needs — claimed only when verified",
    description:
      "AlliancePay is designed around the devices independent retailers actually use. Exact model lists publish after testing or official support — never as invented partner logos.",
    items: [
      "POS terminal or tablet station",
      "Barcode scanner",
      "Receipt printer",
      "Cash drawer",
      "Certified payment device",
      "Optional customer display",
      "Optional scale for grocery PLUs",
    ],
    image: {
      src: "/images/products/hardware-compatibility-premium.jpg",
      alt: "AlliancePay compatible lane hardware — terminal, receipt printer, and barcode scanner",
    },
    href: "/products/customer-display",
  },
  payments: {
    title: "Payment hardware stays in its lane",
    description:
      "Sensitive card entry belongs on certified devices — not in browser forms. Named processors and model lists appear only when confirmed for your market.",
    points: [
      "Cash and approved card tenders in one sale when your setup allows",
      "Card data entry on certified hardware, not AlliancePay web forms",
      "Reuse compatible devices you already own when they pass verification",
    ],
  },
  faqs: [
    {
      question: "Which exact models are supported?",
      answer:
        "Specific model lists will be published after verification. Until then, treat this page as a capability overview — not a guaranteed catalog.",
    },
    {
      question: "Do I have to buy hardware from AlliancePay?",
      answer:
        "Sales channels for hardware will be confirmed with commercial terms. Many retailers reuse compatible devices they already own.",
    },
    {
      question: "Are scales required?",
      answer:
        "No. Scales matter for grocery and produce workflows. Convenience, liquor, and smoke shops often run without them.",
    },
    {
      question: "Is a customer display required?",
      answer:
        "No. Customer display is optional. Stores can start with cashier-only checkout and add a secondary screen later.",
    },
  ] satisfies FAQItem[],
  related: [
    {
      title: "POS Checkout",
      description: "Software that drives the lane hardware.",
      href: "/products/pos",
    },
    {
      title: "Customer Display",
      description: "Optional second screen for cart lines and totals.",
      href: "/products/customer-display",
    },
    {
      title: "Grocery Stores",
      description: "Scale and high-volume lane considerations.",
      href: "/industries/grocery-stores",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Hardware compatibility claims are limited to verified devices. Contact AlliancePay before purchasing equipment for a specific rollout.",
} as const;
