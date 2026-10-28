export const aboutContent = {
  eyebrow: "About us",
  title: "Built for independent retailers",
  description:
    "AlliancePay is the POS and back office for grocery, convenience, liquor, and specialty shops.",
  overview: {
    title: "One place for the counter and the office",
    paragraphs: [
      "AlliancePay keeps the sale and the back office in one system. Staff scan an item, apply the discount and tax, take payment, and print the receipt without leaving the counter.",
      "Managers see what sold, what to reorder, and who worked the shift. Owners with more than one location can switch stores, compare results, and move stock between them.",
      "Grocery, convenience, liquor, and smoke shops share that system, with support for perishable stock, fast lanes, and age-restricted sales.",
    ],
    image: {
      src: "/images/about/office-premium.jpg",
      alt: "A store office desk with a laptop and tablet, opening onto a grocery aisle of produce and refrigerated cases.",
    },
  },
  principles: [
    {
      title: "Retail-first screens",
      description:
        "Checkout and back-office views are written for busy lanes and new hires, with plain language and short paths to the next task.",
    },
    {
      title: "Honest product scope",
      description:
        "Integrations, tenders, and devices are named only after they are verified. Pending work stays marked as pending.",
    },
    {
      title: "Clear roles for staff",
      description:
        "Owners, managers, and cashiers can be given different access so the counter stays fast and the back office stays accountable.",
    },
    {
      title: "Payments kept off the register",
      description:
        "Card data stays with certified payment providers. AlliancePay does not store raw card numbers on the store's system.",
    },
  ],
  image: {
    src: "/images/about/hero-grocery-screen.jpg",
    alt: "A grocery supermarket checkout with produce displays, stocked aisles, refrigerated cases, and a point-of-sale terminal.",
  },
} as const;
