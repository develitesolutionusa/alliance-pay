import type { Metadata } from "next";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and articles for independent retailers using AlliancePay.",
};

export default function ResourcesPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
        />
      </Container>
      <PageHero
        eyebrow="Resources"
        title="Guides for independent retailers"
        description="Articles and how-tos will appear here as AlliancePay publishes original content."
      />
      <Container className="py-12">
        <EmptyState
          title="No articles yet"
          description="The resources index is ready. Add approved guides in Phase 3."
          actionLabel="Read FAQ"
          actionHref="/faq"
        />
      </Container>
    </>
  );
}
