export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  image: { src: string; alt: string };
  sections: { heading: string; paragraphs: string[] }[];
};

/**
 * Original AlliancePay guides. Dates are editorial publish dates for the marketing site.
 * No fabricated customer stories or partner endorsements.
 */
export const resources: ResourceArticle[] = [
  {
    slug: "checklist-for-switching-pos",
    title: "Checklist for switching your retail POS",
    description:
      "A practical cutover plan for independent stores moving to AlliancePay — without risky big-bang surprises.",
    category: "Operations",
    publishedAt: "2026-10-01",
    readingMinutes: 6,
    image: {
      src: "/images/home/hero-pos.jpg",
      alt: "Retail POS terminal ready for a store cutover",
    },
    sections: [
      {
        heading: "Start with the counter, not the brochure",
        paragraphs: [
          "List every device and tender your lane uses today: scanner, printer, cash drawer, payment terminal, and any scale. AlliancePay will only claim compatibility for verified hardware, so bring this list to your demo.",
          "Write down the five busiest workflows cashiers perform. If the new POS cannot cover those on day one, schedule training or temporary workarounds before go-live.",
        ],
      },
      {
        heading: "Clean the catalog before you migrate",
        paragraphs: [
          "Export SKUs, barcodes, prices, and tax categories. Remove duplicates and fix missing barcodes while the data is still in a spreadsheet you control.",
          "Decide which historical sales you need online versus archived offline. Migrating every old ticket is rarely worth delaying a clean open.",
        ],
      },
      {
        heading: "Rehearse the first busy hour",
        paragraphs: [
          "Run a soft open: receive a small purchase order, ring test sales, process a return, and close a practice shift. Confirm receipts print and drawer kicks work.",
          "Keep a one-page lane card at each register for the first week — voids, discounts, and tender tips reduce panic when the line builds.",
        ],
      },
    ],
  },
  {
    slug: "inventory-habits-for-independent-stores",
    title: "Inventory habits that keep independent stores honest",
    description:
      "Simple counting and receiving habits that prevent “mystery shrink” without hiring a full-time inventory clerk.",
    category: "Inventory",
    publishedAt: "2026-10-08",
    readingMinutes: 5,
    image: {
      src: "/images/home/grocery.jpg",
      alt: "Stocked retail aisle representing disciplined inventory habits",
    },
    sections: [
      {
        heading: "Receive everything that hits the back door",
        paragraphs: [
          "If it is not received in AlliancePay, it is not on the books. Train staff to post deliveries the same day — partial receipts included.",
          "Use purchase orders for regular vendors so expected vs received quantities stay visible.",
        ],
      },
      {
        heading: "Count the expensive and the fast",
        paragraphs: [
          "Cycle-count high-value bottles, electronics-adjacent accessories, or other shrink-prone SKUs weekly. Count high-velocity coolers more often than slow dry goods.",
          "Every adjustment needs a reason. “Found” and “damaged” without notes become unusable noise.",
        ],
      },
      {
        heading: "Let thresholds do the nagging",
        paragraphs: [
          "Set reorder points on the SKUs that hurt when empty. Review the low-stock list before building the next vendor order.",
          "Multi-store teams should transfer excess before buying more — especially for seasonal or slow specialty items.",
        ],
      },
    ],
  },
  {
    slug: "age-restricted-sales-without-chaos",
    title: "Age-restricted sales without slowing the lane",
    description:
      "How liquor and specialty retailers can keep ID checks consistent without turning every sale into an argument.",
    category: "Compliance",
    publishedAt: "2026-10-15",
    readingMinutes: 5,
    image: {
      src: "/images/home/liquor.jpg",
      alt: "Liquor store shelves where age-restricted sales are common",
    },
    sections: [
      {
        heading: "Policy first, software second",
        paragraphs: [
          "AlliancePay can prompt for ID checks, but your written store policy decides when staff must refuse a sale. Post that policy where cashiers can see it.",
          "Local law wins. Configure prompts to match your market — do not copy another state’s process blindly.",
        ],
      },
      {
        heading: "Make the prompt part of the muscle memory",
        paragraphs: [
          "Train new hires on the exact screen sequence: scan, prompt, verify, continue. Role-play refusals so the first hard conversation is not with a real customer.",
          "Limit override permissions. If everyone can bypass an age prompt, the prompt does not protect the store.",
        ],
      },
      {
        heading: "Review exceptions weekly",
        paragraphs: [
          "Managers should review voids, overrides, and declined age checks. Patterns often reveal training gaps, not just bad actors.",
          "Keep claims humble: tools support compliance; they do not replace licensing, training, or legal advice.",
        ],
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((article) => article.slug === slug);
}

export function getRelatedResources(slug: string, limit = 2) {
  return resources.filter((article) => article.slug !== slug).slice(0, limit);
}
