import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "AlliancePay terms of service placeholder pending legal review.",
};

export default function TermsPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Terms" }]}
        />
      </Container>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Placeholder only. Binding terms will be published after legal review."
      />
      <Container className="max-w-3xl py-12 text-sm leading-7 text-muted">
        <p>
          Do not treat this page as a contractual offer. Contact AlliancePay for
          current commercial terms.
        </p>
      </Container>
    </>
  );
}
