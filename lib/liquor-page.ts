import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { RelatedLink } from "@/lib/content-types";

export const liquorPage = {
  eyebrow: "Industries · Liquor",
  title: "The liquor POS",
  titleAccent: "built for bottle-shop floors",
  description:
    "AlliancePay helps liquor retailers run age-aware checkout, bottle-level inventory, and margin reports owners can trust — without a different tool for every shelf and cooler.",
  heroImage: {
    src: "/images/industries/liquor/hero-premium.jpg",
    alt: "Bright modern liquor store aisle with wine shelves and spirit bottles",
  },
  heroHighlights: [
    { label: "Age-check prompts", icon: "users" as IconName },
    { label: "Bottle catalog control", icon: "package" as IconName },
    { label: "Margin visibility", icon: "chart" as IconName },
    { label: "Receiving discipline", icon: "clipboardList" as IconName },
    { label: "Scanner-first lanes", icon: "scanBarcode" as IconName },
  ],
  storeTypes: [
    {
      title: "Neighborhood Bottle Shops",
      description:
        "Everyday spirits, wine, and beer where regulars expect a quick, careful ring.",
      image: {
        src: "/images/industries/liquor/neighborhood.jpg",
        alt: "Neighborhood liquor store shelves and beer coolers",
      },
    },
    {
      title: "Wine Shops",
      description:
        "Curated bottles, cooler stock, and staff who need clear SKUs at the counter.",
      image: {
        src: "/images/industries/liquor/wine-shop.jpg",
        alt: "Wine shop interior with wooden bottle racks",
      },
    },
    {
      title: "Craft Beer Stores",
      description:
        "High-turn coolers, rotating SKUs, and restocks that cannot wait until Friday.",
      image: {
        src: "/images/industries/liquor/craft-beer.jpg",
        alt: "Craft beer store coolers and specialty beer shelves",
      },
    },
    {
      title: "Package Stores",
      description:
        "Wall-to-wall spirits where expensive bottles need accurate on-hand counts.",
      image: {
        src: "/images/industries/liquor/package.jpg",
        alt: "Package liquor store spirit bottle walls",
      },
    },
    {
      title: "Specialty Spirits",
      description:
        "Premium whiskey and rare releases that deserve tight inventory and margins.",
      image: {
        src: "/images/industries/liquor/specialty.jpg",
        alt: "Specialty spirits boutique with premium whiskey bottles",
      },
    },
    {
      title: "Multi-Location Chains",
      description:
        "Compare stores, share catalog settings, and move stock where it sells.",
      image: {
        src: "/images/industries/liquor/multilocation.jpg",
        alt: "Modern liquor storefront for a multi-location retailer",
      },
    },
  ],
  painPoints: [
    {
      problem: "Age checks left to staff judgment?",
      solution:
        "Prompt cashiers for ID checks on restricted items you configure — according to your store policy and local law.",
      icon: "users" as IconName,
    },
    {
      problem: "Expensive bottles drifting off the books?",
      solution:
        "Track SKUs, sizes, and on-hand quantities across shelves and back stock so premium inventory stays accounted for.",
      icon: "package" as IconName,
    },
    {
      problem: "Distributor deliveries that never match the shelf?",
      solution:
        "Receive against purchase orders so allocations update inventory accurately when the truck leaves.",
      icon: "clipboardList" as IconName,
    },
    {
      problem: "Not sure which wines and spirits carry the store?",
      solution:
        "Category and margin reports show what moves — and what needs attention — without a spreadsheet hunt.",
      icon: "chart" as IconName,
    },
    {
      problem: "Long lines when the weekend rush hits?",
      solution:
        "Scanner-first checkout with clear tenders keeps bottle baskets moving without skipping required prompts.",
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
    title: "Built for how liquor stores actually operate",
    description:
      "Liquor retail runs on disciplined checkout, bottle-level stock, and reports owners can defend — AlliancePay is structured around that rhythm.",
    image: {
      src: "/images/industries/liquor/ops.jpg",
      alt: "Liquor store POS counter with wine and spirit shelves behind",
    },
    points: [
      {
        title: "Restricted sales need a clear prompt.",
        description:
          "Age-check workflows guide staff when policy requires it, without inventing compliance for your market.",
      },
      {
        title: "High-value stock cannot drift.",
        description:
          "Bottle catalog control, counts, and receiving keep premium SKUs tied to what is actually on the shelf.",
      },
      {
        title: "Margins matter by category.",
        description:
          "See which spirits, wines, and beers carry the store so purchasing and promotions stay grounded.",
      },
      {
        title: "Shifts change; accountability should not.",
        description:
          "Permissions, tender reconciliation, and sales reports give owners a clean handoff between teams.",
      },
    ],
  },
  switching: [
    {
      timing: "Today",
      title: "Talk with us",
      description:
        "We learn about your catalog, age-check policy, and receiving workflow.",
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
      title: "Sell with checks",
      description:
        "Cashiers scan bottles, complete required age prompts, and tender the sale with a clear receipt.",
    },
    {
      title: "Receive allocations",
      description:
        "Match distributor deliveries to purchase orders and update on-hand quantities by SKU and size.",
    },
    {
      title: "Protect high-value stock",
      description:
        "Count premium SKUs regularly and investigate variances before they become a month-end surprise.",
    },
    {
      title: "Review what moved",
      description:
        "Use sales and margin reports to prioritize restocks, promotions, and multi-store transfers.",
    },
  ],
  faqs: [
    {
      question: "Does AlliancePay guarantee legal compliance?",
      answer:
        "No software replaces your legal obligations. AlliancePay provides tools; stores remain responsible for age verification, licensing, and local alcohol rules.",
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
      question: "Can I manage multiple liquor locations?",
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
      description: "Restricted-item lane prompts.",
      href: "/features/checkout",
    },
    {
      title: "Inventory",
      description: "Bottle-level stock control.",
      href: "/features/inventory",
    },
    {
      title: "Reporting & Analytics",
      description: "Margin and sales by category.",
      href: "/features/reporting-analytics",
    },
    {
      title: "Purchase Orders",
      description: "Receive distributor deliveries.",
      href: "/features/purchase-orders",
    },
  ] satisfies RelatedLink[],
  disclaimer:
    "Alcohol sales laws differ by jurisdiction. Confirm licensing and ID requirements for your market. AlliancePay provides tools; stores remain responsible for compliance. Photography is illustrative of liquor retail environments.",
} as const;
