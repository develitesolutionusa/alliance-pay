export type BillingInterval = "monthly" | "annual";

export type PlanFeature = {
  label: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  /** Amounts in USD cents. Null means contact sales / unpublished. */
  monthlyPriceCents: number | null;
  annualPriceCents: number | null;
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  features: PlanFeature[];
};

/**
 * Pricing is configuration-driven. Mockup figures are not published as product truth.
 * Set real amounts when commercial terms are approved.
 */
export const pricingConfig = {
  currency: "USD",
  showAnnualToggle: false,
  recommendedPlanId: null as string | null,
  disclaimer:
    "Plan names and feature lists are illustrative. Final pricing, taxes, and billing terms will be published when approved.",
  plans: [
    {
      id: "essential",
      name: "Essential",
      description: "Core checkout and inventory for a single store.",
      monthlyPriceCents: null,
      annualPriceCents: null,
      ctaLabel: "Talk to sales",
      ctaHref: "/book-demo",
      features: [
        { label: "POS Checkout", included: true },
        { label: "Basic Inventory", included: true },
        { label: "Sales Reports", included: true },
        { label: "Email Support", included: true },
        { label: "Multi-Location", included: false },
        { label: "Loyalty & Marketing", included: false },
      ],
    },
    {
      id: "professional",
      name: "Professional",
      description: "Advanced inventory, staff tools, and growth features.",
      monthlyPriceCents: null,
      annualPriceCents: null,
      ctaLabel: "Book a demo",
      ctaHref: "/book-demo",
      highlighted: true,
      features: [
        { label: "Everything in Essential", included: true },
        { label: "Advanced Inventory", included: true },
        { label: "Employee Management", included: true },
        { label: "Loyalty & Marketing", included: true },
        { label: "Multi-Location", included: true },
        { label: "Priority Onboarding", included: false },
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Custom integrations and dedicated support for larger teams.",
      monthlyPriceCents: null,
      annualPriceCents: null,
      ctaLabel: "Contact us",
      ctaHref: "/contact",
      features: [
        { label: "Everything in Professional", included: true },
        { label: "Custom Integrations", included: true },
        { label: "Advanced Reporting", included: true },
        { label: "Dedicated Support", included: true },
        { label: "Priority Onboarding", included: true },
        { label: "Custom SLAs", included: true },
      ],
    },
  ] satisfies PricingPlan[],
};

export function formatPlanPrice(
  plan: PricingPlan,
  interval: BillingInterval,
): string {
  const cents =
    interval === "annual" ? plan.annualPriceCents : plan.monthlyPriceCents;
  if (cents === null) return "Custom";
  const dollars = cents / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: pricingConfig.currency,
    maximumFractionDigits: 0,
  }).format(dollars);
}
