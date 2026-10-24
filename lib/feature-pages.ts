import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";
import type { ContentImage, RelatedLink } from "@/lib/content-types";
import { features } from "@/lib/features";

export type FeatureCapability = {
  title: string;
  description: string;
  icon: IconName;
};

export type FeaturePageContent = {
  slug: string;
  title: string;
  titleAccent: string;
  eyebrow: string;
  summary: string;
  description: string;
  icon: IconName;
  heroImage: ContentImage;
  heroHighlights: string[];
  capabilitiesTitle: string;
  capabilitiesDescription: string;
  capabilities: FeatureCapability[];
  workflowTitle: string;
  workflowDescription: string;
  workflow: { title: string; description: string }[];
  practical: {
    title: string;
    description: string;
    image: ContentImage;
    items: string[];
  };
  faqs: FAQItem[];
  related: RelatedLink[];
  disclaimer?: string;
  ctaTitle: string;
  ctaDescription: string;
};

export const featurePages: FeaturePageContent[] = [
  {
    slug: "checkout",
    title: "Checkout",
    titleAccent: "built for busy lanes",
    eyebrow: "Features · Checkout",
    summary: "Fast lane workflows for scanning, tenders, discounts, and receipts.",
    description:
      "AlliancePay checkout helps independent retailers scan quickly, apply the right discount, calculate tax, accept tenders, and finish with a clear receipt — without slowing the line.",
    icon: "shoppingCart",
    heroImage: {
      src: "/images/home/hero-checkout-premium.jpg",
      alt: "Cashier completing a sale on an AlliancePay checkout lane",
    },
    heroHighlights: [
      "Scanner-friendly lane flow",
      "Auditable discounts",
      "Tax that matches store rules",
    ],
    capabilitiesTitle: "Lane capabilities",
    capabilitiesDescription:
      "Everything cashiers need between the first scan and a closed sale — without unverified payment-method claims.",
    capabilities: [
      {
        title: "Speed without shortcuts",
        description:
          "Keyboard and scanner-friendly flows that keep accuracy when the line is long.",
        icon: "scanBarcode",
      },
      {
        title: "Discounts you can audit",
        description:
          "Promotions and manual discounts leave a trail managers can review.",
        icon: "percent",
      },
      {
        title: "Tax that matches the store",
        description:
          "Apply configured tax rules so receipts and reports stay consistent.",
        icon: "clipboardList",
      },
      {
        title: "Mixed tenders",
        description:
          "Cash, card, and other approved tenders in one sale when your payment setup allows.",
        icon: "creditCard",
      },
      {
        title: "Clear receipts",
        description:
          "Print or email receipts with line items, tax, and tender details.",
        icon: "receipt",
      },
      {
        title: "Returns with context",
        description:
          "Find the original sale and process returns using the same tax and tender rules.",
        icon: "rotateCcw",
      },
    ],
    workflowTitle: "From first scan to closed sale",
    workflowDescription: "A predictable rhythm cashiers can learn on day one.",
    workflow: [
      {
        title: "Scan and adjust",
        description:
          "Add items by barcode or search, then apply line or basket discounts as needed.",
      },
      {
        title: "Confirm tax & total",
        description:
          "Tax is calculated from store rules before tender so the due amount is never a surprise.",
      },
      {
        title: "Tender and receive",
        description:
          "Collect payment, print or email the receipt, and prepare the next customer.",
      },
      {
        title: "Return with context",
        description:
          "Look up a prior sale and process returns without inventing a second process.",
      },
    ],
    practical: {
      title: "Built for the counter you already run",
      description:
        "Checkout stays readable for new hires and accountable for managers — even during the afternoon rush.",
      image: {
        src: "/images/products/pos-hero-premium.jpg",
        alt: "AlliancePay POS terminal with catalog, cart, and barcode scanner",
      },
      items: [
        "Search when a barcode will not read",
        "Manager approvals for sensitive voids",
        "Receipts that match what sold",
        "Lane ready for the next customer fast",
      ],
    },
    faqs: [
      {
        question: "Does checkout work offline?",
        answer:
          "Offline behavior is a future POS milestone. Until documented, treat online connectivity as the default operating mode.",
      },
      {
        question: "Can cashiers apply manual discounts?",
        answer:
          "Yes within role permissions. Sensitive discounts and voids can require a manager so the till stays accountable.",
      },
      {
        question: "How do returns work?",
        answer:
          "Look up the original sale, select the items being returned, and complete the tender using the same tax rules used at purchase.",
      },
    ],
    related: [
      { title: "POS Checkout product", description: "Full product overview.", href: "/products/pos" },
      { title: "Payments", description: "Tenders through certified providers.", href: "/features/payments" },
      { title: "Customer Display", description: "Show totals to shoppers.", href: "/products/customer-display" },
    ],
    ctaTitle: "Ready to try AlliancePay at the counter?",
    ctaDescription:
      "Start a trial conversation or book a demo — we will walk through your lane hardware and tenders honestly.",
  },
  {
    slug: "inventory",
    title: "Inventory",
    titleAccent: "that stays honest",
    eyebrow: "Features · Inventory",
    summary: "Stock levels, counts, adjustments, and reorder thresholds.",
    description:
      "Know what you have, what moved, and what to reorder. AlliancePay inventory keeps on-hand quantities connected to sales and receiving for independent retailers.",
    icon: "warehouse",
    heroImage: {
      src: "/images/products/back-office-inventory-premium.jpg",
      alt: "Back-office inventory view with stocked retail shelves",
    },
    heroHighlights: [
      "Live on-hand levels",
      "Counts with reasons",
      "Reorder thresholds",
    ],
    capabilitiesTitle: "Inventory controls",
    capabilitiesDescription:
      "Practical stock tools for stores that cannot afford mystery shrink or spreadsheet double entry.",
    capabilities: [
      {
        title: "Live on-hand levels",
        description:
          "Sales and receiving update stock so the counter and back office stay aligned.",
        icon: "warehouse",
      },
      {
        title: "Counts and adjustments",
        description:
          "Cycle counts and reason-coded adjustments keep the books honest.",
        icon: "clipboardList",
      },
      {
        title: "Reorder thresholds",
        description:
          "Flag items before you run out — especially high-velocity SKUs.",
        icon: "package",
      },
      {
        title: "Catalog clarity",
        description:
          "SKUs, barcodes, categories, and variants stay searchable for cashiers and managers.",
        icon: "boxes",
      },
      {
        title: "Transfer-ready stock",
        description:
          "When multi-location is enabled, move inventory between stores with a clear trail.",
        icon: "mapPinned",
      },
      {
        title: "Purchase-aware receiving",
        description:
          "Post received quantities into on-hand inventory without retyping the order.",
        icon: "receipt",
      },
    ],
    workflowTitle: "Receive, count, and reorder",
    workflowDescription: "A simple operating rhythm that keeps shelves and reports in sync.",
    workflow: [
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
    practical: {
      title: "Stock decisions without a second spreadsheet",
      description:
        "Inventory is most useful when it reflects the floor — not last week’s export.",
      image: {
        src: "/images/home/grocery.jpg",
        alt: "Stocked grocery aisle representing retail inventory control",
      },
      items: [
        "See what sold after the rush",
        "Correct shrink with a reason code",
        "Reorder before bestsellers vanish",
        "Keep barcodes searchable at the lane",
      ],
    },
    faqs: [
      {
        question: "Can inventory span multiple stores?",
        answer:
          "Yes when multi-location is enabled. Transfers move stock between stores with a send and receive record.",
      },
      {
        question: "Do sales update inventory automatically?",
        answer:
          "Yes for tracked items. Checkout reductions and receiving additions are designed to keep on-hand levels current.",
      },
      {
        question: "How do cycle counts work?",
        answer:
          "Count a category or shelf, review variances, and post adjustments so managers can see what changed and why.",
      },
    ],
    related: [
      { title: "Purchase Orders", description: "Buy and receive stock.", href: "/features/purchase-orders" },
      { title: "Back Office", description: "Dashboard and catalog tools.", href: "/products/back-office" },
      { title: "Multi-Location", description: "Transfers across stores.", href: "/features/multi-location" },
    ],
    ctaTitle: "Want inventory that matches the floor?",
    ctaDescription:
      "Book a demo to walk through receiving, counts, and reorder thresholds for your catalog.",
  },
  {
    slug: "purchase-orders",
    title: "Purchase Orders",
    titleAccent: "that connect to stock",
    eyebrow: "Features · Purchase Orders",
    summary: "Vendors, receiving, returns, and procurement status.",
    description:
      "Replace spreadsheet purchasing with purchase orders that connect vendors, expected quantities, receiving, and inventory updates.",
    icon: "clipboardList",
    heroImage: {
      src: "/images/products/back-office-hero-premium.jpg",
      alt: "Store operations workspace for purchasing and receiving",
    },
    heroHighlights: [
      "Vendor-aware orders",
      "Receiving that posts stock",
      "Clear PO status",
    ],
    capabilitiesTitle: "Purchasing capabilities",
    capabilitiesDescription:
      "A practical buying workflow for independent stores — without inventing wholesaler integrations.",
    capabilities: [
      {
        title: "Vendor-aware orders",
        description:
          "Build orders against the suppliers you buy from most often.",
        icon: "store",
      },
      {
        title: "Status you can track",
        description:
          "See draft, ordered, partially received, and closed states at a glance.",
        icon: "clipboardList",
      },
      {
        title: "Receiving that updates stock",
        description:
          "Confirm what arrived and post it into inventory without double entry.",
        icon: "package",
      },
      {
        title: "Vendor returns",
        description:
          "Document damaged or incorrect goods so purchasing history stays accurate.",
        icon: "rotateCcw",
      },
      {
        title: "Partial deliveries",
        description:
          "Receive what showed up today and keep the rest open until it arrives.",
        icon: "boxes",
      },
      {
        title: "History you can revisit",
        description:
          "Look back at prior orders when planning the next buy or disputing a delivery.",
        icon: "chart",
      },
    ],
    workflowTitle: "Order, receive, close",
    workflowDescription: "Keep purchasing and inventory in one rhythm.",
    workflow: [
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
    practical: {
      title: "Stop retyping invoices into inventory",
      description:
        "Receiving should update on-hand levels — not create a second data-entry job after the truck leaves.",
      image: {
        src: "/images/industries/convenience/ops.jpg",
        alt: "Convenience store operations area for deliveries and stock",
      },
      items: [
        "Draft orders before you send them",
        "Receive partial trucks cleanly",
        "Post accepted stock immediately",
        "Keep vendor history searchable",
      ],
    },
    faqs: [
      {
        question: "Do you integrate with every wholesaler?",
        answer:
          "Only verified integrations are listed. Until named, treat purchasing as AlliancePay-native workflows.",
      },
      {
        question: "Can I receive part of an order?",
        answer:
          "Yes. Partial receiving keeps the remaining lines open so you can finish the PO when the rest arrives.",
      },
      {
        question: "Do purchase orders update inventory?",
        answer:
          "Receiving posts accepted quantities into on-hand inventory so the floor and books stay aligned.",
      },
    ],
    related: [
      { title: "Inventory", description: "On-hand levels after receiving.", href: "/features/inventory" },
      { title: "Back Office", description: "Purchasing inside store operations.", href: "/products/back-office" },
    ],
    ctaTitle: "Ready to clean up purchasing?",
    ctaDescription:
      "Book a demo to see how AlliancePay purchase orders connect vendors, receiving, and stock.",
  },
  {
    slug: "employee-management",
    title: "Employee Management",
    titleAccent: "with clear permissions",
    eyebrow: "Features · Employees",
    summary: "Roles, shifts, attendance, and activity controls.",
    description:
      "Give cashiers and managers the right access — and keep a clear record of who did what at the counter.",
    icon: "idCard",
    heroImage: {
      src: "/images/features/employees/hero-profiles-premium.jpg",
      alt: "AlliancePay employee management screen with staff photos, roles, contact details, shift hours, and permissions",
    },
    heroHighlights: [
      "Role-based access",
      "Shift clarity",
      "Accountable actions",
    ],
    capabilitiesTitle: "Staff controls",
    capabilitiesDescription:
      "Independent stores need permissions that protect the till without slowing every sale.",
    capabilities: [
      {
        title: "Role-based access",
        description:
          "Limit discounts, voids, and reports to the people who should control them.",
        icon: "idCard",
      },
      {
        title: "Shift clarity",
        description:
          "Know who is on the lane and when shifts open and close.",
        icon: "users",
      },
      {
        title: "Activity accountability",
        description:
          "Sensitive actions stay attributable to a signed-in user.",
        icon: "clipboardList",
      },
      {
        title: "Faster training",
        description:
          "Simpler screens and scoped permissions help new hires ramp safely.",
        icon: "sparkles",
      },
      {
        title: "Store-scoped access",
        description:
          "Grant staff only the locations they work — especially for multi-store teams.",
        icon: "mapPinned",
      },
      {
        title: "Manager overrides",
        description:
          "Escalate voids and deep discounts instead of giving every cashier full control.",
        icon: "badgePercent",
      },
    ],
    workflowTitle: "Invite, run, review",
    workflowDescription: "Keep staffing simple for owners and clear for the floor.",
    workflow: [
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
    practical: {
      title: "Protect the till without slowing the lane",
      description:
        "Permissions should stop risky shortcuts — not force a manager for every routine sale.",
      image: {
        src: "/images/industries/convenience/hero-premium.jpg",
        alt: "Busy retail counter where staff roles matter",
      },
      items: [
        "Cashiers ring within their role",
        "Managers approve exceptions",
        "Sensitive actions stay attributed",
        "New hires learn a safer default",
      ],
    },
    faqs: [
      {
        question: "Is MFA available?",
        answer:
          "Multi-factor authentication is part of the authenticated product roadmap where appropriate. It is not claimed as live until configured.",
      },
      {
        question: "Can different staff see different reports?",
        answer:
          "Yes. Roles can limit access to reporting and back-office tools so cashiers stay focused on the lane.",
      },
      {
        question: "How do manager approvals work?",
        answer:
          "Sensitive discounts, voids, and similar actions can require a manager credential before they complete.",
      },
    ],
    related: [
      { title: "Checkout", description: "Permissioned lane actions.", href: "/features/checkout" },
      { title: "Reporting & Analytics", description: "Staff and sales visibility.", href: "/features/reporting-analytics" },
    ],
    ctaTitle: "Want clearer staff permissions?",
    ctaDescription:
      "Book a demo to map roles, shifts, and approvals to how your store actually runs.",
  },
  {
    slug: "loyalty-marketing",
    title: "Loyalty & Marketing",
    titleAccent: "with consent first",
    eyebrow: "Features · Loyalty",
    summary: "Rewards and consent-based customer outreach.",
    description:
      "Reward repeat shoppers without buying lists or ignoring consent. AlliancePay loyalty stays permission-based and practical for independent stores.",
    icon: "gift",
    heroImage: {
      src: "/images/features/loyalty/hero-premium.jpg",
      alt: "AlliancePay POS loyalty screen showing member rewards and consent at a bright retail checkout",
    },
    heroHighlights: [
      "Consent-based enrollment",
      "Simple rewards",
      "Counter-friendly lookup",
    ],
    capabilitiesTitle: "Loyalty that cashiers can explain",
    capabilitiesDescription:
      "Programs should fit a busy lane — not invent open rates or guaranteed campaign results.",
    capabilities: [
      {
        title: "Consent first",
        description:
          "Collect contact details only with clear permission for store marketing.",
        icon: "heart",
      },
      {
        title: "Simple rewards",
        description:
          "Points or visit-based programs cashiers can explain in one sentence.",
        icon: "gift",
      },
      {
        title: "Counter-friendly lookup",
        description:
          "Find a customer quickly at checkout without slowing the lane.",
        icon: "scanBarcode",
      },
      {
        title: "Honest claims",
        description:
          "No fabricated open rates or “guaranteed” campaign results.",
        icon: "sparkles",
      },
      {
        title: "Receipt-visible benefits",
        description:
          "Applied rewards show clearly so shoppers trust what they earned.",
        icon: "receipt",
      },
      {
        title: "Store-owned relationships",
        description:
          "Customer marketing tools exist for your store — not third-party list resale.",
        icon: "store",
      },
    ],
    workflowTitle: "Enroll, redeem, follow up",
    workflowDescription: "A consent-aware loop that fits independent retail.",
    workflow: [
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
    practical: {
      title: "Repeat visits without a second loyalty tablet",
      description:
        "Keep rewards inside the checkout flow cashiers already use.",
      image: {
        src: "/images/home/Modern Grocery Checkout with AlliancePay.png",
        alt: "Grocery checkout where loyalty can be offered to regulars",
      },
      items: [
        "Enroll in seconds at the lane",
        "Look up members without friction",
        "Redeem before tender",
        "Message only consented contacts",
      ],
    },
    faqs: [
      {
        question: "Do you sell customer data?",
        answer:
          "No. Customer marketing tools are for your store relationships. AlliancePay will not claim third-party data resale.",
      },
      {
        question: "Can shoppers opt out later?",
        answer:
          "Yes. Consent-based programs should make it practical to update preferences or stop marketing messages.",
      },
      {
        question: "Do you guarantee campaign results?",
        answer:
          "No. AlliancePay does not invent open rates, conversion promises, or fabricated loyalty ROI.",
      },
    ],
    related: [
      { title: "Checkout", description: "Apply rewards in the lane.", href: "/features/checkout" },
      { title: "Reporting & Analytics", description: "Understand repeat purchase patterns.", href: "/features/reporting-analytics" },
    ],
    ctaTitle: "Want loyalty that fits your lane?",
    ctaDescription:
      "Book a demo to design a consent-based rewards flow your cashiers can actually run.",
  },
  {
    slug: "reporting-analytics",
    title: "Reporting & Analytics",
    titleAccent: "owners can use daily",
    eyebrow: "Features · Reporting",
    summary: "Sales, margins, inventory, and location comparisons.",
    description:
      "See what sold, what is left, and where margins are healthy — with reports designed for store owners, not BI consultants.",
    icon: "trendingUp",
    heroImage: {
      src: "/images/products/back-office-hero-premium.jpg",
      alt: "Store performance reporting workspace for retail owners",
    },
    heroHighlights: [
      "Daily sales clarity",
      "Margin awareness",
      "Multi-store comparisons",
    ],
    capabilitiesTitle: "Reports that drive decisions",
    capabilitiesDescription:
      "Focus on the numbers independent retailers actually check before the next order or schedule.",
    capabilities: [
      {
        title: "Daily sales clarity",
        description:
          "Understand today’s take, tenders, and top movers without exporting first.",
        icon: "trendingUp",
      },
      {
        title: "Margin awareness",
        description:
          "Spot items or departments where margin needs attention.",
        icon: "chart",
      },
      {
        title: "Inventory summaries",
        description:
          "Connect selling and stocking so reports drive reorder decisions.",
        icon: "warehouse",
      },
      {
        title: "Multi-store comparisons",
        description:
          "When you operate multiple locations, compare performance side by side.",
        icon: "mapPinned",
      },
      {
        title: "Tender breakdowns",
        description:
          "See cash vs card and other approved tenders for end-of-day reconciliation.",
        icon: "creditCard",
      },
      {
        title: "Owner-ready views",
        description:
          "Share a concise performance readout with partners without a custom dashboard project.",
        icon: "layers",
      },
    ],
    workflowTitle: "Morning, weekly, owner readout",
    workflowDescription: "A reporting rhythm that fits real store hours.",
    workflow: [
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
    practical: {
      title: "Answers before the next truck order",
      description:
        "Reports should help you buy, staff, and price — not sit in an unused export folder.",
      image: {
        src: "/images/home/Modern Restaurant POS Station.png",
        alt: "POS station with sales performance visible to the operator",
      },
      items: [
        "See today’s sales at a glance",
        "Find margin pressure early",
        "Connect sales to stock",
        "Compare stores when you grow",
      ],
    },
    faqs: [
      {
        question: "Can I export reports?",
        answer:
          "Export options will match the shipping product. The goal is usable on-screen reports first, with exports where operators need them.",
      },
      {
        question: "Do reports include tax summaries?",
        answer:
          "Tax summaries are part of the reporting roadmap for store operators. Availability follows what ships in the authenticated product.",
      },
      {
        question: "Can I compare multiple locations?",
        answer:
          "Yes when multi-location is enabled for your account and plan.",
      },
    ],
    related: [
      { title: "Back Office", description: "Where operators live day to day.", href: "/products/back-office" },
      { title: "Multi-Location", description: "Compare stores in one view.", href: "/features/multi-location" },
    ],
    ctaTitle: "Want clearer store numbers?",
    ctaDescription:
      "Book a demo to review the reports AlliancePay prioritizes for independent retailers.",
  },
  {
    slug: "payments",
    title: "Payments",
    titleAccent: "through certified providers",
    eyebrow: "Features · Payments",
    summary: "Supported tenders through certified payment providers.",
    description:
      "Accept the tenders your customers expect while keeping card data with certified providers. AlliancePay does not invent payment partners or store raw card numbers.",
    icon: "creditCard",
    heroImage: {
      src: "/images/products/hardware-hero-premium.jpg",
      alt: "Payment terminal alongside an AlliancePay POS checkout",
    },
    heroHighlights: [
      "Certified providers only",
      "No raw card storage",
      "Cash still counts",
    ],
    capabilitiesTitle: "Tender capabilities",
    capabilitiesDescription:
      "Payments stay practical for mixed tills — and honest about what is verified.",
    capabilities: [
      {
        title: "Certified providers only",
        description:
          "Card acceptance runs through providers that meet industry certification requirements.",
        icon: "creditCard",
      },
      {
        title: "Clear PCI posture",
        description:
          "AlliancePay is not designed to store raw PAN data on behalf of your store.",
        icon: "layers",
      },
      {
        title: "Cash still counts",
        description:
          "Independent retailers still take cash — tenders stay practical for mixed payments.",
        icon: "receipt",
      },
      {
        title: "Verified method lists",
        description:
          "Named payment methods and wallets appear only when integration is confirmed.",
        icon: "badgePercent",
      },
      {
        title: "Lane-ready tendering",
        description:
          "Cashiers complete the sale while sensitive card entry stays on payment hardware.",
        icon: "shoppingCart",
      },
      {
        title: "Day-end reconciliation",
        description:
          "Match tender totals to drawer and provider settlements.",
        icon: "chart",
      },
    ],
    workflowTitle: "Configure, take payment, reconcile",
    workflowDescription: "A clean tender path from onboarding to closing the drawer.",
    workflow: [
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
    practical: {
      title: "Payments without invented logos",
      description:
        "Named processors and wallets appear only after commercial and technical confirmation.",
      image: {
        src: "/images/home/hero-pos.jpg",
        alt: "Retail POS counter with payment-ready hardware",
      },
      items: [
        "Cash and card in one sale when supported",
        "Card data stays with certified providers",
        "Hardware paths documented honestly",
        "Ask sales for your market’s options",
      ],
    },
    faqs: [
      {
        question: "Which processors do you support?",
        answer:
          "Named processors will be listed after commercial and technical confirmation. Until then, ask sales about your market.",
      },
      {
        question: "Does AlliancePay store card numbers?",
        answer:
          "No. AlliancePay is not designed to store raw PAN data. Card entry belongs with certified payment providers and devices.",
      },
      {
        question: "Can I take cash and card on one ticket?",
        answer:
          "Mixed tenders are supported when your store configuration and provider setup allow them.",
      },
    ],
    related: [
      { title: "Checkout", description: "Where tenders complete the sale.", href: "/features/checkout" },
      { title: "Hardware", description: "Payment devices at the counter.", href: "/products/hardware" },
    ],
    disclaimer:
      "Payment method availability depends on region, provider certification, and your commercial agreement.",
    ctaTitle: "Need a clear payments path for your market?",
    ctaDescription:
      "Book a demo and we will discuss certified options for your region — without inventing partner logos.",
  },
  {
    slug: "multi-location",
    title: "Multi-Location",
    titleAccent: "without losing local control",
    eyebrow: "Features · Multi-Location",
    summary: "Operate multiple stores with shared visibility.",
    description:
      "Grow beyond a single counter without losing local control — switch stores, compare results, transfer stock, and keep settings scoped correctly.",
    icon: "mapPinned",
    heroImage: {
      src: "/images/products/multi-location-hero-premium.jpg",
      alt: "Retail locations prepared for multi-store AlliancePay operations",
    },
    heroHighlights: [
      "One login, many stores",
      "Stock transfers",
      "Side-by-side reports",
    ],
    capabilitiesTitle: "Multi-store capabilities",
    capabilitiesDescription:
      "Shared visibility with store-specific settings — when your plan and rollout include multi-location.",
    capabilities: [
      {
        title: "One login, many stores",
        description:
          "Authorized users jump between locations without separate tool sprawl.",
        icon: "mapPinned",
      },
      {
        title: "Shared and local data",
        description:
          "Compare consolidated results while preserving store-specific catalog and tax needs.",
        icon: "layers",
      },
      {
        title: "Transfer trail",
        description:
          "Move inventory between stores with send/receive confirmation.",
        icon: "package",
      },
      {
        title: "Plan-aware access",
        description:
          "Multi-location tools appear when your plan and rollout include them.",
        icon: "badgePercent",
      },
      {
        title: "Location comparisons",
        description:
          "See which store is ahead on sales, margin, or stock pressure.",
        icon: "trendingUp",
      },
      {
        title: "Scoped staff access",
        description:
          "Grant employees only the stores they work.",
        icon: "users",
      },
    ],
    workflowTitle: "Switch, transfer, compare",
    workflowDescription: "Keep multi-store operations deliberate and auditable.",
    workflow: [
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
    practical: {
      title: "Grow stores without losing the plot",
      description:
        "Multi-location should feel like one platform with clear store context — not five disconnected logins.",
      image: {
        src: "/images/products/multi-location-transfer-premium.jpg",
        alt: "Stock transfer workflow between AlliancePay store locations",
      },
      items: [
        "Switch stores before you edit",
        "Transfer with send and receive",
        "Compare performance honestly",
        "Keep tax and catalog local when needed",
      ],
    },
    faqs: [
      {
        question: "Do all plans include multi-location?",
        answer:
          "Plan packaging will publish with approved pricing. Single-store retailers are fully supported without it.",
      },
      {
        question: "Can each store keep different tax settings?",
        answer:
          "Yes. Multi-location is designed to preserve location-specific settings while still offering consolidated visibility.",
      },
      {
        question: "How do stock transfers work?",
        answer:
          "Create a transfer from the sending store, then confirm receiving at the destination so on-hand levels stay accurate.",
      },
    ],
    related: [
      { title: "Multi-Location product", description: "Product overview for multi-store teams.", href: "/products/multi-location" },
      { title: "Inventory", description: "Stock that moves between stores.", href: "/features/inventory" },
      { title: "Reporting & Analytics", description: "Compare stores in one view.", href: "/features/reporting-analytics" },
    ],
    ctaTitle: "Running more than one store?",
    ctaDescription:
      "Book a demo to see store switching, transfers, and consolidated reporting for your footprint.",
  },
  {
    slug: "integrations",
    title: "Integrations",
    titleAccent: "verified before we name them",
    eyebrow: "Features · Integrations",
    summary: "Connect tools your store already uses — verified claims only.",
    description:
      "AlliancePay will connect to the systems independent retailers actually need. Integration names and logos appear only after verification — never as decoration.",
    icon: "puzzle",
    heroImage: {
      src: "/images/home/Modern Restaurant POS Station.png",
      alt: "Retail workstation representing connected store systems",
    },
    heroHighlights: [
      "Verified partners only",
      "Clear ownership",
      "Roadmap honesty",
    ],
    capabilitiesTitle: "How AlliancePay approaches integrations",
    capabilitiesDescription:
      "Start from a store problem — payments, books, or specialty tools — not a logo wall.",
    capabilities: [
      {
        title: "Verified partners only",
        description:
          "No fabricated logos or “works with everyone” claims.",
        icon: "puzzle",
      },
      {
        title: "Practical categories",
        description:
          "Payments, accounting, and specialty retail tools prioritized by real operator demand.",
        icon: "layers",
      },
      {
        title: "Clear ownership",
        description:
          "We document what AlliancePay owns vs what the partner owns for support.",
        icon: "clipboardList",
      },
      {
        title: "Roadmap honesty",
        description:
          "Requested integrations can be discussed with sales without pretending they already ship.",
        icon: "sparkles",
      },
      {
        title: "Region-aware availability",
        description:
          "What ships in one market may not be live everywhere — we say so.",
        icon: "mapPinned",
      },
      {
        title: "Test before go-live",
        description:
          "Connections should be verified with controlled transactions before you depend on them.",
        icon: "creditCard",
      },
    ],
    workflowTitle: "Identify, confirm, connect",
    workflowDescription: "A careful path from need to live connection.",
    workflow: [
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
    practical: {
      title: "Tell us what you already rely on",
      description:
        "Bring your current tools to a demo. We will be clear about what is live, planned, or not supported yet.",
      image: {
        src: "/images/products/back-office-hero-premium.jpg",
        alt: "Back-office workstation representing connected retail systems",
      },
      items: [
        "No decorative partner walls",
        "Ask about your market’s options",
        "Document support ownership",
        "Test before you depend on it",
      ],
    },
    faqs: [
      {
        question: "Where is the integration directory?",
        answer:
          "A public directory will publish as partners are verified. Until then, contact AlliancePay with the tools you rely on.",
      },
      {
        question: "Can you connect to my accounting tool?",
        answer:
          "Possibly — depending on verification and your market. Ask sales with the exact product name rather than assuming a logo implies support.",
      },
      {
        question: "Why aren’t partner logos shown here?",
        answer:
          "AlliancePay only displays verified partners. Decorative logo walls create false expectations for independent retailers.",
      },
    ],
    related: [
      { title: "Payments", description: "Certified payment providers.", href: "/features/payments" },
      { title: "Book a Demo", description: "Tell us which tools you need connected.", href: "/book-demo" },
    ],
    disclaimer:
      "Integration availability is not implied by this page. Ask for a current list for your market.",
    ctaTitle: "Have tools AlliancePay should connect to?",
    ctaDescription:
      "Book a demo and bring your current stack — we will be honest about what is verified today.",
  },
];

export const featureGroups = [
  {
    id: "counter",
    eyebrow: "Counter",
    title: "Lane and shopper features",
    description: "Checkout speed, tenders, and loyalty moments that fit a busy counter.",
    slugs: ["checkout", "payments", "loyalty-marketing"],
  },
  {
    id: "operations",
    eyebrow: "Operations",
    title: "Stock, buying, and staff controls",
    description: "Keep inventory honest, purchasing connected, and permissions clear.",
    slugs: ["inventory", "purchase-orders", "employee-management"],
  },
  {
    id: "growth",
    eyebrow: "Growth",
    title: "Visibility and careful connections",
    description: "Reports, multi-store tools, and integrations — verified claims only.",
    slugs: ["reporting-analytics", "multi-location", "integrations"],
  },
] as const;

export function getFeaturePage(slug: string) {
  return featurePages.find((feature) => feature.slug === slug);
}

export function featureIconForSlug(slug: string): IconName {
  const page = getFeaturePage(slug);
  if (page?.icon) return page.icon;
  const listed = features.find((feature) => feature.slug === slug);
  return listed?.icon ?? "layers";
}
