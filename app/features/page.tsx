import type { Metadata } from "next";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { featurePages, featureIconForSlug } from "@/lib/feature-pages";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore AlliancePay POS features for checkout, inventory, staff, loyalty, and reporting.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything you need in one platform"
        description="A practical feature set for independent retailers — without unverified integrations or payment claims."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />
      <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {featurePages.map((feature, index) => (
          <ScrollReveal
            key={feature.slug}
            variant="up"
            delay={index * 70}
            duration={650}
          >
            <FeatureCard
              title={feature.title}
              description={feature.summary}
              href={`/features/${feature.slug}`}
              icon={featureIconForSlug(feature.slug)}
            />
          </ScrollReveal>
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
