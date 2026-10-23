import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const groceryPage = {
  eyebrow: "Industries · Grocery",
  title: "The grocery POS",
  titleAccent: "built for real store floors",
  description:
    "AlliancePay helps independent grocers run fast lanes, weighed items, receiving, and department inventory — without stacking a different tool for every aisle.",
  heroImage: {
    src: "/images/industries/grocery/hero-premium.jpg",
    alt: "Bright modern grocery aisle with fresh produce and refrigerated cases",
  },
  heroHighlights: [
    { label: "Produce & deli scales", icon: "scale" as IconName },
    { label: "Benefit tenders when verified", icon: "creditCard" as IconName },
    { label: "Fast multi-lane checkout", icon: "scanBarcode" as IconName },
    { label: "Low-stock alerts", icon: "package" as IconName },
    { label: "Loyalty & rewards", icon: "heart" as IconName },
  ],
  storeTypes: [
    {
      title: "Neighborhood Markets",
      description: "Quick lines, regulars, and everyday baskets that need to move fast.",
      image: {
        src: "/images/industries/grocery/neighborhood.jpg",
        alt: "Neighborhood grocery market interior",
      },
    },
    {
      title: "Supermarkets",
      description: "Many lanes, scanner scales, and thousands of SKUs under one roof.",
      image: {
        src: "/images/industries/grocery/supermarket.jpg",
        alt: "Supermarket checkout and grocery aisles",
      },
    },
    {
      title: "Organic & Specialty",
      description: "Weighed produce, bulk items, and shelf labels that stay readable.",
      image: {
        src: "/images/industries/grocery/organic.jpg",
        alt: "Organic produce and specialty grocery shelves",
      },
    },
    {
      title: "Convenience Grocers",
      description: "Fast checkout with age checks and high-turn cooler items.",
      image: {
        src: "/images/industries/grocery/convenience.jpg",
        alt: "Convenience grocery coolers and snack aisles",
      },
    },
    {
      title: "International Markets",
      description: "Imported brands with case and unit pricing that stay consistent.",
      image: {
        src: "/images/industries/grocery/international.jpg",
        alt: "International grocery market product shelves",
      },
    },
    {
      title: "Carnicerías & Hispanic Markets",
      description: "Meat-counter scales, weighed cuts, and department-ready stock.",
      image: {
        src: "/images/industries/grocery/carniceria.jpg",
        alt: "Meat counter and Hispanic market grocery shelves",
      },
    },
    {
      title: "Multi-Location Chains",
      description: "Stock, prices, and reports across every store in one place.",
      image: {
        src: "/images/industries/grocery/multilocation.jpg",
        alt: "Grocery storefront for a multi-location retailer",
      },
    },
  ],
  painPoints: [
    {
      problem: "Scale, scanner, and register from three different vendors?",
      solution: "One AlliancePay lane kit configured to work together from day one — when hardware is verified for your store.",
      icon: "printer" as IconName,
    },
    {
      problem: "Typing every vendor invoice in by hand?",
      solution: "Receive deliveries into inventory so on-hand counts reflect what actually hit the back door.",
      icon: "clipboardList" as IconName,
    },
    {
      problem: "Did that delivery just eat your margin?",
      solution: "See cost changes while you receive so you can protect margin before the next price tag prints.",
      icon: "chart" as IconName,
    },
    {
      problem: "Loyalty cards left in a kitchen drawer?",
      solution: "Keep rewards in the workflow cashiers already use — profiles and points without a second system.",
      icon: "heart" as IconName,
    },
    {
      problem: "Midweek always slow?",
      solution: "Use purchase history and campaigns to invite regulars back when the store needs the traffic.",
      icon: "sparkles" as IconName,
    },
    {
      problem: "Stock that has not moved in weeks?",
      solution: "Spot slow movers in reporting, then turn them into promotions your team can run at the lane.",
      icon: "package" as IconName,
    },
  ],
  operations: {
    eyebrow: "Why AlliancePay",
    title: "Built for how grocery stores actually operate",
    description:
      "Grocery is weighed items, back-door deliveries, weekly price changes, and busy lanes — AlliancePay is structured around that rhythm.",
    image: {
      src: "/images/industries/grocery/ops.jpg",
      alt: "Grocery operations dashboard and store floor context",
    },
    points: [
      {
        title: "Sold by the pound. Counted by the pound.",
        description:
          "Weighed items can come off stock as they ring when scales are verified — shrink becomes a number, not a guess.",
      },
      {
        title: "Deliveries land at the back door, not at a desk.",
        description:
          "Receive, count, and update inventory where the truck arrives so the cooler and shelf stay honest.",
      },
      {
        title: "Deli and meat counters need their own labels.",
        description:
          "Scale labels that scan at the register with the right weight and price keep the line moving.",
      },
      {
        title: "Prices change every week.",
        description:
          "Change a price once and print the new shelf tag from the aisle when your hardware supports it.",
      },
    ],
  },
  switching: [
    {
      timing: "Today",
      title: "Book a demo",
      description: "We learn about your store setup, inventory, and workflow.",
    },
    {
      timing: "After discovery",
      title: "We plan migration",
      description: "Products, pricing, inventory, and configuration are mapped for your go-live.",
    },
    {
      timing: "Go-live week",
      title: "Train your team",
      description: "Your team is trained and your store is ready to operate on AlliancePay.",
    },
  ],
  workflow: [
    {
      title: "Ring grocery baskets",
      description:
        "Scan barcoded items, handle PLUs where configured, and tender mixed payments without slowing the lane.",
    },
    {
      title: "Receive the truck",
      description:
        "Match deliveries to purchase orders and update stock by department as product hits the floor.",
    },
    {
      title: "Protect margin",
      description:
        "Review cost and price changes so weekly promotions do not quietly erase profit.",
    },
    {
      title: "Review what moved",
      description:
        "Use sales and inventory reports to prioritize restocks, markdowns, and multi-store transfers.",
    },
  ],
  faqs: [
    {
      question: "Do you support SNAP/EBT or WIC?",
      answer:
        "Benefit-program tenders are region-specific and provider-dependent. AlliancePay will only claim support after verification for your market and payment stack.",
    },
    {
      question: "Can I manage produce and weighed items?",
      answer:
        "Yes when supported scales are verified for your store. AlliancePay is designed for PLU and weighed-item workflows common in grocery lanes.",
    },
    {
      question: "How long does migration take?",
      answer:
        "Timing depends on catalog size and current systems. Many independent stores complete a guided migration after a short discovery — we will give you a realistic timeline in the demo.",
    },
    {
      question: "Can I manage multiple grocery locations?",
      answer:
        "Yes with multi-location tools — compare stores, share catalog settings, and transfer stock when your plan includes them.",
    },
    {
      question: "What happens if the internet goes down?",
      answer:
        "Offline behavior depends on your deployment and payment provider. We document reconciliation rules before go-live so you are not guessing mid-rush.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes. AlliancePay supports onboarding, training, and ongoing operations — ask about hours and channels for your plan during the demo.",
    },
  ] satisfies FAQItem[],
  related: [
    {
      title: "POS Checkout",
      description: "Lane software for grocery volume.",
      href: "/products/pos",
    },
    {
      title: "Hardware",
      description: "Scanners, scales, and printers.",
      href: "/products/hardware",
    },
    {
      title: "Inventory",
      description: "Department stock and counts.",
      href: "/features/inventory",
    },
    {
      title: "Multi-Location",
      description: "Compare stores and transfer stock.",
      href: "/products/multi-location",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Regulatory and benefit-program requirements vary by region. Confirm compliance needs for your operating market before go-live. Photography is illustrative of grocery retail environments.",
} as const;
