import type { Metadata } from "next";
import { PricingCard } from "@/components/marketing/PricingCard";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { pricingConfig } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "AlliancePay plan overview. Final pricing publishes when commercial terms are approved.",
};

export default function PricingPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
        />
      </Container>
      <PageHero
        eyebrow="Pricing"
        title="Transparent plans for independent retailers"
        description={pricingConfig.disclaimer}
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
      <Container className="grid gap-6 py-12 lg:grid-cols-3">
        {pricingConfig.plans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </Container>
      {!pricingConfig.showAnnualToggle ? (
        <Container className="-mt-4 pb-8">
          <p className="text-center text-sm text-muted">
            Monthly/annual toggle appears only when verified annual prices are configured.
          </p>
        </Container>
      ) : null}
      <CTABanner />
    </>
  );
}
