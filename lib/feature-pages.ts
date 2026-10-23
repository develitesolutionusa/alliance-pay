import type { DetailContent } from "@/lib/content-types";
import type { IconName } from "@/components/icons/FeatureIcon";
import { features } from "@/lib/features";

export const featurePages: DetailContent[] = [
  {
    slug: "checkout",
    title: "Checkout",
    eyebrow: "Features",
    summary: "Fast lane workflows for scanning, tenders, discounts, and receipts.",
    description:
      "AlliancePay checkout is built for independent retail lanes — scan quickly, apply the right discount, calculate tax, accept tenders, and finish with a clear receipt.",
    icon: "scanBarcode",
    image: {
      src: "/images/home/hero-checkout-premium.jpg",
      alt: "Cashier completing a sale on an AlliancePay checkout lane",
    },
    benefits: [
      {
        title: "Speed without shortcuts",
        description:
          "Keyboard and scanner-friendly flows that keep accuracy when the line is long.",
      },
      {
        title: "Discounts you can audit",
        description:
          "Promotions and manual discounts leave a trail managers can review.",
      },
      {
        title: "Tax that matches the store",
        description:
          "Apply configured tax rules so receipts and reports stay consistent.",
      },
      {
        title: "Mixed tenders",
        description:
          "Cash, card, and other approved tenders in one sale when your payment setup allows.",
      },
    ],
    workflows: [
      {
        title: "Scan and adjust",
        description:
          "Add items by barcode or search, then apply line or basket discounts as needed.",
      },
      {
        title: "Tender and receive",
        description:
          "Collect payment, print or email the receipt, and prepare the next customer.",
      },
      {
        title: "Return with context",
        description:
          "Find the original sale and process returns using the same tax and tender rules.",
      },
    ],
    faqs: [
      {
        question: "Does checkout work offline?",
        answer:
          "Offline behavior is a future POS milestone. Until documented, treat online connectivity as the default operating mode.",
      },
    ],
    related: [
      { title: "POS Checkout product", description: "Full product overview.", href: "/products/pos" },
      { title: "Payments", description: "Tenders through certified providers.", href: "/features/payments" },
      { title: "Customer Display", description: "Show totals to shoppers.", href: "/products/customer-display" },
    ],
  },
  {
    slug: "inventory",
    title: "Inventory",
    eyebrow: "Features",
    summary: "Stock levels, counts, adjustments, and reorder thresholds.",
    description:
      "Know what you have, what moved, and what to reorder. AlliancePay inventory keeps on-hand quantities connected to sales and receiving.",
    icon: "package",
    image: {
      src: "/images/home/grocery.jpg",
      alt: "Stocked grocery aisle representing retail inventory control",
    },
    benefits: [
      {
        title: "Live on-hand levels",
        description:
          "Sales and receiving update stock so the counter and back office stay aligned.",
      },
      {
        title: "Counts and adjustments",
        description:
          "Cycle counts and reason-coded adjustments keep the books honest.",
      },
      {
        title: "Reorder thresholds",
        description:
          "Flag items before you run out — especially high-velocity SKUs.",
      },
      {
        title: "Catalog clarity",
        description:
          "SKUs, barcodes, categories, and variants stay searchable for cashiers and managers.",
      },
    ],
    workflows: [
      {
        title: "Receive stock",
        description:
          "Post quantities from a purchase order or manual receipt into on-hand inventory.",
      },
      {
        title: "Count and correct",
        description:
          "Run a count, review variances, and post adjustments with a clear reason.",
      },
      {
        title: "Act on low stock",
        description:
          "Review threshold alerts and add items to the next purchase order.",
      },
    ],
    faqs: [
      {
        question: "Can inventory span multiple stores?",
        answer:
          "Yes when multi-location is enabled. Transfers move stock between stores with a send and receive record.",
      },
    ],
    related: [
      { title: "Purchase Orders", description: "Buy and receive stock.", href: "/features/purchase-orders" },
      { title: "Back Office", description: "Dashboard and catalog tools.", href: "/products/back-office" },
      { title: "Multi-Location", description: "Transfers across stores.", href: "/features/multi-location" },
    ],
  },
  {
    slug: "purchase-orders",
    title: "Purchase Orders",
    eyebrow: "Features",
    summary: "Vendors, receiving, returns, and procurement status.",
    description:
      "Replace spreadsheet purchasing with purchase orders that connect vendors, expected quantities, receiving, and inventory updates.",
    icon: "clipboardList",
    image: {
      src: "/images/home/convenience.jpg",
      alt: "Convenience store shelves stocked after receiving deliveries",
    },
    benefits: [
      {
        title: "Vendor-aware orders",
        description:
          "Build orders against the suppliers you buy from most often.",
      },
      {
        title: "Status you can track",
        description:
          "See draft, ordered, partially received, and closed states at a glance.",
      },
      {
        title: "Receiving that updates stock",
        description:
          "Confirm what arrived and post it into inventory without double entry.",
      },
      {
        title: "Vendor returns",
        description:
          "Document damaged or incorrect goods so purchasing history stays accurate.",
      },
    ],
    workflows: [
      {
        title: "Create the PO",
        description:
          "Select vendor and items, set quantities, and submit the order.",
      },
      {
        title: "Receive the delivery",
        description:
          "Compare expected vs received quantities and post accepted stock.",
      },
      {
        title: "Close or return",
        description:
          "Finish the order or process a vendor return for short or damaged lines.",
      },
    ],
    faqs: [
      {
        question: "Do you integrate with every wholesaler?",
        answer:
          "Only verified integrations are listed. Until named, treat purchasing as AlliancePay-native workflows.",
      },
    ],
    related: [
      { title: "Inventory", description: "On-hand levels after receiving.", href: "/features/inventory" },
      { title: "Back Office", description: "Purchasing inside store operations.", href: "/products/back-office" },
    ],
  },
  {
    slug: "employee-management",
    title: "Employee Management",
    eyebrow: "Features",
    summary: "Roles, shifts, attendance, and activity controls.",
    description:
      "Give cashiers and managers the right access — and keep a clear record of who did what at the counter.",
    icon: "users",
    image: {
      src: "/images/home/owner.jpg",
      alt: "Store manager reviewing staff and shift activity",
    },
    benefits: [
      {
        title: "Role-based access",
        description:
          "Limit discounts, voids, and reports to the people who should control them.",
      },
      {
        title: "Shift clarity",
        description:
          "Know who is on the lane and when shifts open and close.",
      },
      {
        title: "Activity accountability",
        description:
          "Sensitive actions stay attributable to a signed-in user.",
      },
      {
        title: "Faster training",
        description:
          "Simpler screens and scoped permissions help new hires ramp safely.",
      },
    ],
    workflows: [
      {
        title: "Invite and assign",
        description:
          "Add staff, choose a role, and grant access to the stores they work.",
      },
      {
        title: "Run the shift",
        description:
          "Staff sign in, ring sales within their permissions, and hand off cleanly.",
      },
      {
        title: "Review exceptions",
        description:
          "Managers inspect voids, discounts, and other flagged activity.",
      },
    ],
    faqs: [
      {
        question: "Is MFA available?",
        answer:
          "Multi-factor authentication is part of the authenticated product roadmap where appropriate. It is not claimed as live until configured.",
      },
    ],
    related: [
      { title: "Checkout", description: "Permissioned lane actions.", href: "/features/checkout" },
      { title: "Reporting & Analytics", description: "Staff and sales visibility.", href: "/features/reporting-analytics" },
    ],
  },
  {
    slug: "loyalty-marketing",
    title: "Loyalty & Marketing",
    eyebrow: "Features",
    summary: "Rewards and consent-based customer outreach.",
    description:
      "Reward repeat shoppers without buying lists or ignoring consent. AlliancePay loyalty stays permission-based and practical for independent stores.",
    icon: "heart",
    image: {
      src: "/images/home/Modern AlliancePay POS Checkout Scene.png",
      alt: "Customer at checkout where loyalty can be applied",
    },
    benefits: [
      {
        title: "Consent first",
        description:
          "Collect contact details only with clear permission for store marketing.",
      },
      {
        title: "Simple rewards",
        description:
          "Points or visit-based programs cashiers can explain in one sentence.",
      },
      {
        title: "Counter-friendly lookup",
        description:
          "Find a customer quickly at checkout without slowing the lane.",
      },
      {
        title: "Honest claims",
        description:
          "No fabricated open rates or “guaranteed” campaign results.",
      },
    ],
    workflows: [
      {
        title: "Enroll at the counter",
        description:
          "Invite shoppers to join, capture consent, and start earning on the same visit when appropriate.",
      },
      {
        title: "Redeem on sale",
        description:
          "Apply available rewards before tender so the receipt shows the benefit clearly.",
      },
      {
        title: "Follow up carefully",
        description:
          "Send messages only to consented customers with content relevant to your store.",
      },
    ],
    faqs: [
      {
        question: "Do you sell customer data?",
        answer:
          "No. Customer marketing tools are for your store relationships. AlliancePay will not claim third-party data resale.",
      },
    ],
    related: [
      { title: "Checkout", description: "Apply rewards in the lane.", href: "/features/checkout" },
      { title: "Reporting & Analytics", description: "Understand repeat purchase patterns.", href: "/features/reporting-analytics" },
    ],
  },
  {
    slug: "reporting-analytics",
    title: "Reporting & Analytics",
    eyebrow: "Features",
    summary: "Sales, margins, inventory, and location comparisons.",
    description:
      "See what sold, what is left, and where margins are healthy — with reports designed for store owners, not BI consultants.",
    icon: "chart",
    image: {
      src: "/images/home/Modern Restaurant POS Station.png",
      alt: "POS station with sales performance visible to the operator",
    },
    benefits: [
      {
        title: "Daily sales clarity",
        description:
          "Understand today’s take, tenders, and top movers without exporting first.",
      },
      {
        title: "Margin awareness",
        description:
          "Spot items or departments where margin needs attention.",
      },
      {
        title: "Inventory summaries",
        description:
          "Connect selling and stocking so reports drive reorder decisions.",
      },
      {
        title: "Multi-store comparisons",
        description:
          "When you operate multiple locations, compare performance side by side.",
      },
    ],
    workflows: [
      {
        title: "Morning review",
        description:
          "Check overnight sales and exceptions before the first rush.",
      },
      {
        title: "Weekly planning",
        description:
          "Use department and SKU trends to plan promotions and purchasing.",
      },
      {
        title: "Owner readout",
        description:
          "Share a concise performance view with partners or absentee owners.",
      },
    ],
    faqs: [
      {
        question: "Can I export reports?",
        answer:
          "Export options will match the shipping product. The goal is usable on-screen reports first, with exports where operators need them.",
      },
    ],
    related: [
      { title: "Back Office", description: "Where operators live day to day.", href: "/products/back-office" },
      { title: "Multi-Location", description: "Compare stores in one view.", href: "/features/multi-location" },
    ],
  },
  {
    slug: "payments",
    title: "Payments",
    eyebrow: "Features",
    summary: "Supported tenders through certified payment providers.",
    description:
      "Accept the tenders your customers expect while keeping card data with certified providers. AlliancePay does not invent payment partners or store raw card numbers.",
    icon: "creditCard",
    image: {
      src: "/images/home/hero-pos.jpg",
      alt: "Payment terminal alongside an AlliancePay POS checkout",
    },
    benefits: [
      {
        title: "Certified providers only",
        description:
          "Card acceptance runs through providers that meet industry certification requirements.",
      },
      {
        title: "Clear PCI posture",
        description:
          "AlliancePay is not designed to store raw PAN data on behalf of your store.",
      },
      {
        title: "Cash still counts",
        description:
          "Independent retailers still take cash — tenders stay practical for mixed payments.",
      },
      {
        title: "Verified method lists",
        description:
          "Named payment methods and wallets appear only when integration is confirmed.",
      },
    ],
    workflows: [
      {
        title: "Configure tenders",
        description:
          "Enable cash and approved card paths for each store during onboarding.",
      },
      {
        title: "Take payment",
        description:
          "Cashiers tender the sale; card devices handle sensitive entry.",
      },
      {
        title: "Reconcile the day",
        description:
          "Match tender totals to drawer and provider settlements.",
      },
    ],
    faqs: [
      {
        question: "Which processors do you support?",
        answer:
          "Named processors will be listed after commercial and technical confirmation. Until then, ask sales about your market.",
      },
    ],
    related: [
      { title: "Checkout", description: "Where tenders complete the sale.", href: "/features/checkout" },
      { title: "Hardware", description: "Payment devices at the counter.", href: "/products/hardware" },
    ],
    disclaimer:
      "Payment method availability depends on region, provider certification, and your commercial agreement.",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    eyebrow: "Features",
    summary: "Operate multiple stores with shared visibility.",
    description:
      "Grow beyond a single counter without losing local control — switch stores, compare results, transfer stock, and keep settings scoped correctly.",
    icon: "layers",
    image: {
      src: "/images/home/hero-grocery-listed.jpg",
      alt: "Retail location prepared for multi-store operations",
    },
    benefits: [
      {
        title: "One login, many stores",
        description:
          "Authorized users jump between locations without separate tool sprawl.",
      },
      {
        title: "Shared and local data",
        description:
          "Compare consolidated results while preserving store-specific catalog and tax needs.",
      },
      {
        title: "Transfer trail",
        description:
          "Move inventory between stores with send/receive confirmation.",
      },
      {
        title: "Plan-aware access",
        description:
          "Multi-location tools appear when your plan and rollout include them.",
      },
    ],
    workflows: [
      {
        title: "Switch context",
        description:
          "Select the store you are operating before ringing sales or editing settings.",
      },
      {
        title: "Transfer stock",
        description:
          "Create a transfer, ship from the sending store, and receive at the destination.",
      },
      {
        title: "Compare performance",
        description:
          "Review location reports to decide staffing, ordering, and promotions.",
      },
    ],
    faqs: [
      {
        question: "Do all plans include multi-location?",
        answer:
          "Plan packaging will publish with approved pricing. Single-store retailers are fully supported without it.",
      },
    ],
    related: [
      { title: "Multi-Location product", description: "Product overview for multi-store teams.", href: "/products/multi-location" },
      { title: "Inventory", description: "Stock that moves between stores.", href: "/features/inventory" },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    eyebrow: "Features",
    summary: "Connect tools your store already uses — verified claims only.",
    description:
      "AlliancePay will connect to the systems independent retailers actually need. Integration names and logos appear only after verification — never as decoration.",
    icon: "puzzle",
    image: {
      src: "/images/home/Modern Restaurant POS Station.png",
      alt: "Retail workstation representing connected store systems",
    },
    benefits: [
      {
        title: "Verified partners only",
        description:
          "No fabricated logos or “works with everyone” claims.",
      },
      {
        title: "Practical categories",
        description:
          "Payments, accounting, and specialty retail tools prioritized by real operator demand.",
      },
      {
        title: "Clear ownership",
        description:
          "We document what AlliancePay owns vs what the partner owns for support.",
      },
      {
        title: "Roadmap honesty",
        description:
          "Requested integrations can be discussed with sales without pretending they already ship.",
      },
    ],
    workflows: [
      {
        title: "Identify the need",
        description:
          "Start from a store problem — payments, books, or specialty catalog — not a logo wall.",
      },
      {
        title: "Confirm availability",
        description:
          "Check whether the integration is live for your region and plan.",
      },
      {
        title: "Connect and test",
        description:
          "Enable the connection and verify a controlled transaction before go-live.",
      },
    ],
    faqs: [
      {
        question: "Where is the integration directory?",
        answer:
          "A public directory will publish as partners are verified. Until then, contact AlliancePay with the tools you rely on.",
      },
    ],
    related: [
      { title: "Payments", description: "Certified payment providers.", href: "/features/payments" },
      { title: "Book a Demo", description: "Tell us which tools you need connected.", href: "/book-demo" },
    ],
    disclaimer:
      "Integration availability is not implied by this page. Ask for a current list for your market.",
  },
];

export function getFeaturePage(slug: string) {
  return featurePages.find((feature) => feature.slug === slug);
}

export function featureIconForSlug(slug: string): IconName {
  const page = getFeaturePage(slug);
  if (page?.icon) return page.icon;
  const listed = features.find((feature) => feature.slug === slug);
  return listed?.icon ?? "layers";
}
