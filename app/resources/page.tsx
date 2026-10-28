import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides and articles for independent retailers evaluating AlliancePay.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow="Resources"
        title="Guides for independent retailers"
        description="Original AlliancePay articles on cutovers, inventory habits, and age-restricted sales — no fabricated customer stories."
        primaryCta={{ label: "Browse FAQ", href: "/faq" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />
      <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((article, index) => (
          <ScrollReveal
            key={article.slug}
            variant="up"
            delay={index * 80}
            duration={650}
          >
            <ResourceCard article={article} />
          </ScrollReveal>
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
