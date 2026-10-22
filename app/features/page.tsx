import type { Metadata } from "next";
import { FeatureCard } from "@/components/marketing/FeatureCard";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { features } from "@/lib/features";
import { featureRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore AlliancePay POS features for checkout, inventory, staff, loyalty, and reporting.",
};

const extraIcons = {
  "purchase-orders": "clipboardList",
  payments: "creditCard",
  integrations: "puzzle",
} as const;

export default function FeaturesPage() {
  const cards = featureRoutes.map((route) => {
    const known = features.find((f) => f.slug === route.slug);
    return {
      ...route,
      href: `/features/${route.slug}`,
      icon:
        known?.icon ??
        extraIcons[route.slug as keyof typeof extraIcons] ??
        ("layers" as const),
    };
  });

  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Features" }]}
        />
      </Container>
      <PageHero
        eyebrow="Features"
        title="Everything you need in one platform"
        description="A practical feature set for independent retailers — without unverified integrations or payment claims."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
      <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((feature) => (
          <FeatureCard
            key={feature.slug}
            title={feature.title}
            description={feature.description}
            href={feature.href}
            icon={feature.icon}
          />
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
