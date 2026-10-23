import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const customerDisplayPage = {
  eyebrow: "Products · Customer Display",
  title: "Customer Display",
  titleAccent: "that builds trust at the counter",
  description:
    "Show shoppers the same cart lines, discounts, and totals the cashier sees — so corrections happen before payment and “what was that charge?” moments happen less often.",
  heroImage: {
    src: "/images/products/customer-display-hero-premium.jpg",
    alt: "AlliancePay customer-facing display showing cart lines, tax, and amount due at a retail counter",
  },
  capabilities: [
    {
      title: "Transparent cart lines",
      description:
        "Items and prices appear as they are scanned so shoppers can catch mistakes mid-sale.",
      icon: "receipt" as IconName,
    },
    {
      title: "Running totals",
      description:
        "Subtotal, tax, and amount due stay visible through the entire transaction.",
      icon: "chart" as IconName,
    },
    {
      title: "Discounts in plain view",
      description:
        "Promotions and markdowns show on the customer side when they apply — no surprises at tender.",
      icon: "percent" as IconName,
    },
    {
      title: "Idle & thank-you states",
      description:
        "Between sales, keep a simple idle screen; after payment, confirm the completed sale briefly.",
      icon: "sparkles" as IconName,
    },
    {
      title: "Lane-synced updates",
      description:
        "The display mirrors the POS cart in real time — scan, void, and discount stay aligned.",
      icon: "layers" as IconName,
    },
    {
      title: "Customer interactions",
      description:
        "Supported prompts stay on the display when your hardware and plan allow — without inventing unsupported flows.",
      icon: "users" as IconName,
    },
  ],
  workflow: [
    {
      title: "Mirror the sale",
      description:
        "As cashiers scan and adjust the cart, the customer display updates line by line.",
    },
    {
      title: "Show discounts clearly",
      description:
        "When a promotion or manager markdown applies, shoppers see the adjusted price on their screen.",
    },
    {
      title: "Confirm before tender",
      description:
        "Subtotal, tax, and amount due stay readable so customers can approve the total before paying.",
    },
    {
      title: "Complete the sale",
      description:
        "After payment, a brief thank-you state confirms the sale, then the display returns to idle.",
    },
  ],
  interactions: {
    title: "Customer interactions without clutter",
    description:
      "The display is built for cart visibility first. Extra prompts appear only when they are configured and your lane hardware supports them.",
    items: [
      "Review cart lines before payment",
      "See subtotal, tax, and amount due",
      "View applied discounts and promotions",
      "Brief thank-you after a completed sale",
      "Simple idle screen between customers",
      "Optional prompts only when configured",
    ],
    image: {
      src: "/images/products/customer-display-interactions-premium.jpg",
      alt: "AlliancePay customer display showing a thank-you and payment-complete confirmation",
    },
    href: "/products/hardware",
  },
  trust: {
    title: "Clarity that reduces counter friction",
    description:
      "A readable customer screen helps independent retailers catch scan mistakes early and finish sales with fewer disputes.",
    points: [
      "Shoppers see the same prices and quantities the cashier is ringing",
      "Tax and due amounts stay visible so tender is never a surprise",
      "No marketing slideshow — the lane stays focused on the current sale",
    ],
  },
  faqs: [
    {
      question: "Is a second screen required?",
      answer:
        "No. Customer display is optional hardware. Stores can start with cashier-only checkout and add a display later.",
    },
    {
      question: "Does it collect customer data?",
      answer:
        "The display shows cart information for the current sale. Loyalty or marketing capture is separate and consent-based when enabled.",
    },
    {
      question: "What customer interactions are supported?",
      answer:
        "Cart review and totals are the core experience. Additional prompts ship only when configured for your plan and compatible hardware — we do not claim unsupported flows.",
    },
    {
      question: "Does the display work with any monitor?",
      answer:
        "Compatibility depends on verified lane hardware. Treat model lists as pending until published; contact AlliancePay before purchasing a secondary screen for rollout.",
    },
  ] satisfies FAQItem[],
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
    {
      title: "Checkout feature",
      description: "Deeper look at scanning, discounts, and tenders.",
      href: "/features/checkout",
    },
  ] satisfies RelatedLink[],
} as const;
