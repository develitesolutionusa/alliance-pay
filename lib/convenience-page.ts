import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const conveniencePage = {
  eyebrow: "Industries · Convenience",
  title: "The convenience POS",
  titleAccent: "built for the rush",
  description:
    "AlliancePay helps c-store operators move lines fast, keep coolers stocked, and run tight shifts — without a different tool for every aisle and counter.",
  heroImage: {
    src: "/images/industries/convenience/hero-premium.jpg",
    alt: "Bright modern convenience store aisle with snack shelves and beverage coolers",
  },
  heroHighlights: [
    { label: "Seconds-matter checkout", icon: "scanBarcode" as IconName },
    { label: "Age-check prompts", icon: "users" as IconName },
    { label: "High-turn inventory", icon: "package" as IconName },
    { label: "Shift-ready staffing", icon: "clipboardList" as IconName },
    { label: "Clear overnight reports", icon: "chart" as IconName },
  ],
  storeTypes: [
    {
      title: "Corner Stores",
      description: "Neighborhood counters where regulars expect a quick ring and a full cooler.",
      image: {
        src: "/images/industries/convenience/corner.jpg",
        alt: "Corner convenience store snack aisles and cooler doors",
      },
    },
    {
      title: "Urban Quick-Stops",
      description: "Coffee, grab-and-go, and short baskets that cannot wait in line.",
      image: {
        src: "/images/industries/convenience/urban.jpg",
        alt: "Urban convenience store with coffee station and grab-and-go fridge",
      },
    },
    {
      title: "Travel Centers",
      description: "High-volume snack and drink traffic with restock pressure all day.",
      image: {
        src: "/images/industries/convenience/travel.jpg",
        alt: "Travel plaza convenience store beverage wall and snack aisles",
      },
    },
    {
      title: "Gas Station Markets",
      description: "In-store retail that has to stay fast while pumps stay busy outside.",
      image: {
        src: "/images/industries/convenience/gas-market.jpg",
        alt: "Gas station convenience market counter and cooler doors",
      },
    },
    {
      title: "Late-Night Shops",
      description: "Overnight teams that need clear permissions and easy shift close.",
      image: {
        src: "/images/industries/convenience/late-night.jpg",
        alt: "Late-evening convenience store aisles with glowing coolers",
      },
    },
    {
      title: "Multi-Location Chains",
      description: "Compare stores, share catalog settings, and move stock where it sells.",
      image: {
        src: "/images/industries/convenience/multilocation.jpg",
        alt: "Modern convenience storefront for a multi-location retailer",
      },
    },
  ],
  painPoints: [
    {
      problem: "Lunch rush turns into a line out the door?",
      solution:
        "Scanner-first checkout with simple tenders keeps grab-and-go trips short when every second counts.",
      icon: "scanBarcode" as IconName,
    },
    {
      problem: "Coolers look full — until the best sellers are gone?",
      solution:
        "Low-stock signals and purchase orders help you restock beverages and snacks before the next rush.",
      icon: "package" as IconName,
    },
    {
      problem: "Age-restricted items left to staff judgment?",
      solution:
        "Prompt cashiers for ID checks on categories you configure — according to your store policy and local law.",
      icon: "users" as IconName,
    },
    {
      problem: "Part-time teams with different late-night habits?",
      solution:
        "Role controls limit voids, discounts, and catalog edits so overnight shifts stay accountable.",
      icon: "clipboardList" as IconName,
    },
    {
      problem: "Morning open and you still do not know what sold?",
      solution:
        "Overnight sales and tender reports show what moved before the next delivery window.",
      icon: "chart" as IconName,
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
    title: "Built for how convenience stores actually operate",
    description:
      "C-stores run on speed, high-turn SKUs, short shifts, and age-aware selling — AlliancePay is structured around that rhythm.",
    image: {
      src: "/images/industries/convenience/ops.jpg",
      alt: "Convenience store POS counter with beverage coolers in view",
    },
    points: [
      {
        title: "The line has to move.",
        description:
          "Fast scanning and common tenders keep coffee, snacks, and drinks from stacking up at the counter.",
      },
      {
        title: "Coolers empty on a schedule you can predict.",
        description:
          "Track high-turn categories and build purchase orders so restocks land before the next rush — not after.",
      },
      {
        title: "Restricted items need a clear prompt.",
        description:
          "Age-check workflows guide staff when policy requires it, without inventing compliance for your market.",
      },
      {
        title: "Shifts change; accountability should not.",
        description:
          "Permissions, tender reconciliation, and overnight reports give owners a clean handoff between teams.",
      },
    ],
  },
  switching: [
    {
      timing: "Today",
      title: "Talk with us",
      description: "We learn about your store layout, inventory, and shift workflow.",
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
      title: "Serve the rush",
      description:
        "Ring quick baskets with scanning, tax, age prompts where configured, and common tenders.",
    },
    {
      title: "Restock fast movers",
      description:
        "Use low-stock signals to build purchase orders for coolers, snacks, and everyday essentials.",
    },
    {
      title: "Close the shift",
      description:
        "Reconcile tenders and review exceptions before the next team clocks in.",
    },
    {
      title: "Review overnight sales",
      description:
        "Use sales and inventory reports to prioritize restocks, markdowns, and multi-store transfers.",
    },
  ],
  faqs: [
    {
      question: "Do you support fuel pumps?",
      answer:
        "Fuel integration is not claimed until verified for your market and hardware stack. AlliancePay focuses first on in-store retail checkout and inventory.",
    },
    {
      question: "Can AlliancePay handle age-restricted items?",
      answer:
        "You can configure age-check prompts for restricted categories you sell. Local law and staff training remain the retailer’s responsibility.",
    },
    {
      question: "How long does migration take?",
      answer:
        "Timing depends on catalog size and current systems. Many independent stores complete a guided migration after a short discovery — we will give you a realistic timeline in the demo.",
    },
    {
      question: "Can I manage multiple convenience locations?",
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
      title: "Checkout",
      description: "Speed-focused lane workflows.",
      href: "/features/checkout",
    },
    {
      title: "Employee Management",
      description: "Roles for shift teams.",
      href: "/features/employee-management",
    },
    {
      title: "Payments",
      description: "Tenders through certified providers.",
      href: "/features/payments",
    },
    {
      title: "Inventory",
      description: "High-turn stock and counts.",
      href: "/features/inventory",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Age-restricted and regulated categories must follow local law. Configure staff controls accordingly. Fuel and pump integrations are not claimed until verified. Photography is illustrative of convenience retail environments.",
} as const;
