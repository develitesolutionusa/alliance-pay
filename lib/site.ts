export const siteConfig = {
  name: "AlliancePay",
  tagline: "Modern POS for Modern Retail",
  description:
    "The complete POS system for retail stores. Manage sales, inventory, employees, and customers in one platform built for independent retailers.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://alliancepay.com",
  supportEmail: "arif1@att.net",
  /** Static for prerender compatibility with Next.js Cache Components. */
  copyrightYear: 2026,
  social: {
    linkedin: "https://www.linkedin.com/company/alliancepay",
    x: "https://x.com/alliancepay",
    facebook: "https://www.facebook.com/alliancepay",
  },
} as const;

export const benefitIndicators = [
  {
    id: "trial",
    label: "Free trial available",
    note: "Duration confirmed at signup once commercial terms are published.",
  },
  {
    id: "contract",
    label: "Flexible plans",
    note: "Contract terms will be published with verified pricing.",
  },
  {
    id: "setup",
    label: "Straightforward setup",
    note: "Guided onboarding for independent retail stores.",
  },
] as const;
