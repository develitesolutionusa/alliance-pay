import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";

type PlaceholderPageProps = {
  title: string;
  description: string;
  eyebrow?: string;
  crumbs: { label: string; href?: string }[];
};

/** Temporary route shell until Phase 2–3 content is built. */
export function PlaceholderPage({
  title,
  description,
  eyebrow,
  crumbs,
}: PlaceholderPageProps) {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={crumbs} />
      </Container>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "View Features", href: "/features" }}
      />
      <Container className="py-12">
        <div className="rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-8 text-sm text-muted">
          This page shell is part of Phase 1 Foundation. Full content lands in
          Phase 2 (homepage polish) and Phase 3 (inner pages).
        </div>
      </Container>
      <CTABanner />
    </>
  );
}
