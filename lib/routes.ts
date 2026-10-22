export const productRoutes = [
  {
    slug: "pos",
    title: "POS Checkout",
    description:
      "Checkout workflow, payments overview, scanning, receipts, discounts, returns, and taxes.",
  },
  {
    slug: "back-office",
    title: "Back Office",
    description:
      "Store dashboard, inventory, purchase orders, and performance reporting.",
  },
  {
    slug: "customer-display",
    title: "Customer Display",
    description:
      "Cart visibility, running totals, and supported customer interactions.",
  },
  {
    slug: "hardware",
    title: "Hardware",
    description:
      "Terminals, scanners, printers, cash drawers, scales, and payment devices.",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    description:
      "Store switching, consolidated analytics, location settings, and transfers.",
  },
] as const;

export const featureRoutes = [
  {
    slug: "checkout",
    title: "Checkout",
    description: "Fast lane workflows for scanning, tenders, discounts, and receipts.",
  },
  {
    slug: "inventory",
    title: "Inventory",
    description: "Stock levels, counts, adjustments, and reorder thresholds.",
  },
  {
    slug: "purchase-orders",
    title: "Purchase Orders",
    description: "Vendors, receiving, returns, and procurement status.",
  },
  {
    slug: "employee-management",
    title: "Employee Management",
    description: "Roles, shifts, attendance, and activity controls.",
  },
  {
    slug: "loyalty-marketing",
    title: "Loyalty & Marketing",
    description: "Rewards and consent-based customer outreach.",
  },
  {
    slug: "reporting-analytics",
    title: "Reporting & Analytics",
    description: "Sales, margins, inventory, and location comparisons.",
  },
  {
    slug: "payments",
    title: "Payments",
    description: "Supported tenders through certified payment providers.",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    description: "Operate multiple stores with shared visibility.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    description: "Connect tools your store already uses — claims stay verified-only.",
  },
] as const;

export const industryRoutes = [
  {
    slug: "grocery-stores",
    title: "Grocery Stores",
    description: "High-volume retail workflows for grocery operators.",
  },
  {
    slug: "convenience-stores",
    title: "Convenience Stores",
    description: "Speed-focused POS for convenience retail.",
  },
  {
    slug: "liquor-stores",
    title: "Liquor Stores",
    description: "Compliance-aware POS for liquor retail.",
  },
  {
    slug: "smoke-shops",
    title: "Smoke Shops",
    description: "Age-restricted product workflows for smoke shops.",
  },
] as const;
