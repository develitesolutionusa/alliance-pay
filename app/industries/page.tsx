import type { Metadata } from "next";
import { IndustryCard } from "@/components/marketing/IndustryCard";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "AlliancePay POS solutions for grocery, convenience, liquor, and smoke shops.",
};

export default function IndustriesPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        />
      </Container>
      <PageHero
        eyebrow="Industries"
        title="Solutions for every retail industry"
        description="Workflows and guidance tailored to the stores AlliancePay is built to serve."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
      <Container className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry) => (
          <IndustryCard
            key={industry.slug}
            title={industry.title}
            description={industry.description}
            href={industry.href}
            imageSrc={industry.image}
            imageHint={industry.imageHint}
          />
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
