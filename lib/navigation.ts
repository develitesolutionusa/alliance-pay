export type NavChild = {
  title: string;
  href: string;
  description: string;
};

export type NavItem = {
  title: string;
  href: string;
  children?: NavChild[];
};

export const mainNav: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    children: [
      {
        title: "POS Checkout",
        href: "/products/pos",
        description: "Fast checkout, payments, receipts, and returns.",
      },
      {
        title: "Back Office",
        href: "/products/back-office",
        description: "Inventory, purchase orders, and store reports.",
      },
      {
        title: "Customer Display",
        href: "/products/customer-display",
        description: "Cart visibility and customer-facing totals.",
      },
      {
        title: "Hardware",
        href: "/products/hardware",
        description: "Terminals, scanners, printers, and drawers.",
      },
      {
        title: "Multi-Location",
        href: "/products/multi-location",
        description: "Run multiple stores from one account.",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
    children: [
      {
        title: "Grocery Stores",
        href: "/industries/grocery-stores",
        description: "High-volume checkout and perishable inventory.",
      },
      {
        title: "Convenience Stores",
        href: "/industries/convenience-stores",
        description: "Speed, age verification, and vendor workflows.",
      },
      {
        title: "Liquor Stores",
        href: "/industries/liquor-stores",
        description: "Compliance-aware retail operations.",
      },
      {
        title: "Smoke Shops",
        href: "/industries/smoke-shops",
        description: "Catalog control and age-restricted sales.",
      },
    ],
  },
  {
    title: "Company",
    href: "/about",
    children: [
      {
        title: "About",
        href: "/about",
        description: "Our mission for independent retail.",
      },
      {
        title: "Book a Demo",
        href: "/book-demo",
        description: "See AlliancePay with your store in mind.",
      },
      {
        title: "Get Started",
        href: "/get-started",
        description: "Start your AlliancePay trial journey.",
      },
    ],
  },
  {
    title: "Features",
    href: "/features",
    children: [
      {
        title: "Checkout",
        href: "/features/checkout",
        description: "Barcode scanning, discounts, taxes, and tenders.",
      },
      {
        title: "Inventory",
        href: "/features/inventory",
        description: "Stock levels, counts, and reorder thresholds.",
      },
      {
        title: "Purchase Orders",
        href: "/features/purchase-orders",
        description: "Vendors, receiving, and procurement status.",
      },
      {
        title: "Employee Management",
        href: "/features/employee-management",
        description: "Roles, shifts, and activity controls.",
      },
      {
        title: "Loyalty & Marketing",
        href: "/features/loyalty-marketing",
        description: "Rewards and consent-based outreach.",
      },
      {
        title: "Reporting & Analytics",
        href: "/features/reporting-analytics",
        description: "Sales, margins, and location comparisons.",
      },
      {
        title: "Payments",
        href: "/features/payments",
        description: "Supported tenders through certified providers.",
      },
      {
        title: "Multi-Location",
        href: "/features/multi-location",
        description: "Switch stores, compare results, and transfer stock.",
      },
      {
        title: "Integrations",
        href: "/features/integrations",
        description: "Connect tools your store already uses.",
      },
    ],
  },
  { title: "Pricing", href: "/pricing" },
  {
    title: "Resources",
    href: "/resources",
    children: [
      {
        title: "Guides",
        href: "/resources",
        description: "Articles and how-tos for independent retailers.",
      },
      {
        title: "FAQ",
        href: "/faq",
        description: "Answers about AlliancePay products and plans.",
      },
      {
        title: "Contact",
        href: "/contact",
        description: "Reach the AlliancePay team.",
      },
    ],
  },
];

export const footerNav = {
  product: [
    { title: "POS", href: "/products/pos" },
    { title: "Back Office", href: "/products/back-office" },
    { title: "Hardware", href: "/products/hardware" },
    { title: "Multi-Location", href: "/products/multi-location" },
    { title: "Pricing", href: "/pricing" },
  ],
  industries: [
    { title: "Grocery", href: "/industries/grocery-stores" },
    { title: "Convenience", href: "/industries/convenience-stores" },
    { title: "Liquor", href: "/industries/liquor-stores" },
    { title: "Smoke Shops", href: "/industries/smoke-shops" },
  ],
  company: [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Book a Demo", href: "/book-demo" },
    { title: "Get Started", href: "/get-started" },
  ],
  resources: [
    { title: "Resources", href: "/resources" },
    { title: "FAQ", href: "/faq" },
    { title: "Features", href: "/features" },
  ],
  legal: [
    { title: "Privacy", href: "/privacy" },
    { title: "Terms", href: "/terms" },
    { title: "Cookies", href: "/cookies" },
  ],
} as const;
