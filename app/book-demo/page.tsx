import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Request an AlliancePay demo tailored to your retail store.",
};

export default function BookDemoPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Book a Demo" }]}
        />
      </Container>
      <PageHero
        eyebrow="Demo"
        title="See AlliancePay for your store"
        description="Tell us about your retail operation. Form validation works now; secure delivery and anti-spam land in Phase 4."
      />
      <Container className="max-w-xl py-12">
        <LeadForm submitLabel="Request demo" />
      </Container>
    </>
  );
}
