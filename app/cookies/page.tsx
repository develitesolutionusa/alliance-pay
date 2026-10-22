import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookies",
  description: "AlliancePay cookie notice placeholder pending legal review.",
};

export default function CookiesPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Cookies" }]}
        />
      </Container>
      <PageHero
        eyebrow="Legal"
        title="Cookie Notice"
        description="AlliancePay currently uses essential site functionality only. Nonessential analytics will request consent when introduced."
      />
      <Container className="max-w-3xl py-12 text-sm leading-7 text-muted">
        <p>
          A full cookie table and consent controls will ship with reviewed legal
          copy in a later phase.
        </p>
      </Container>
    </>
  );
}
