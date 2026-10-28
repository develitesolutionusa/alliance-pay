import type { Metadata } from "next";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PricingCard } from "@/components/marketing/PricingCard";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricingFaqs } from "@/lib/faqs";
import { pricingConfig } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AlliancePay plan overview. Final pricing publishes when commercial terms are approved.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Pricing"
        title="Transparent plans for independent retailers"
        description={pricingConfig.disclaimer}
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
      <Container className="grid gap-6 py-12 lg:grid-cols-3">
        {pricingConfig.plans.map((plan, index) => (
          <ScrollReveal
            key={plan.id}
            variant="up"
            delay={index * 90}
            duration={650}
          >
            <PricingCard plan={plan} />
          </ScrollReveal>
        ))}
      </Container>

      <section
        className="border-t border-border bg-surface py-14"
        aria-labelledby="pricing-faq"
      >
        <Container className="max-w-3xl">
          <SectionHeading
            id="pricing-faq"
            eyebrow="Pricing FAQ"
            title="Before you choose a plan"
            className="mb-8"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={pricingFaqs} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
