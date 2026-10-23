import type { Metadata } from "next";
import { BenefitCard } from "@/components/marketing/BenefitCard";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { Hero } from "@/components/marketing/Hero";
import { IndustryCard } from "@/components/marketing/IndustryCard";
import { WhyAlliancePay } from "@/components/marketing/WhyAlliancePay";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { features, valueProps } from "@/lib/features";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Retail POS for Independent Stores",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <>
      <Hero
        title={
          <>
            The Complete POS System for{" "}
            <span className="text-gradient-accent">Retail Stores</span>
          </>
        }
        description="Manage sales, inventory, customers, and more in one platform built for independent retailers."
      />

      <section
        className="border-y border-border bg-white py-16 sm:py-20"
        aria-labelledby="features-heading"
      >
        <Container>
          <ScrollReveal variant="up" className="mx-auto mb-10 max-w-2xl text-center">
            <h2
              id="features-heading"
              className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Everything you need to run your store
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              From checkout to inventory, staff, loyalty, and multi-location
              reporting.
            </p>
          </ScrollReveal>
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal
                key={feature.slug}
                variant="up"
                delay={index * 70}
                duration={650}
                className="h-full"
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.summary}
                  href={feature.href}
                  icon={feature.icon}
                />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="up" delay={120} className="mt-10 flex justify-center">
            <PrimaryButton href="/features">
              Explore all features
              <ArrowRight className="h-4 w-4" aria-hidden />
            </PrimaryButton>
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="section-wash py-16 sm:py-20"
        aria-labelledby="industries-heading"
      >
        <Container>
          <ScrollReveal variant="up" className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-gradient-brand text-sm font-semibold tracking-wide">
              Industries
            </p>
            <h2
              id="industries-heading"
              className="text-gradient mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Built for every type of retail store
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Workflows for grocery, convenience, liquor, and smoke shops.
            </p>
          </ScrollReveal>
          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <ScrollReveal
                key={industry.slug}
                variant="up"
                delay={index * 80}
                duration={650}
                className="h-full"
              >
                <IndustryCard
                  title={industry.title}
                  description={industry.summary}
                  href={industry.href}
                  imageSrc={industry.image}
                  imageHint={industry.imageHint}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20" aria-labelledby="value-heading">
        <Container>
          <ScrollReveal variant="up" className="mx-auto mb-10 max-w-2xl text-center">
            <h2
              id="value-heading"
              className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why retailers choose AlliancePay
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              One platform that covers the counter, the back office, and the
              support you need to keep every shift running smoothly.
            </p>
          </ScrollReveal>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item, index) => (
              <ScrollReveal
                key={item.id}
                variant="up"
                delay={index * 80}
                duration={650}
                className="h-full"
              >
                <BenefitCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyAlliancePay />

      <CTABanner />
    </>
  );
}
