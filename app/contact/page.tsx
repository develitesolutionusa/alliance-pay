import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the AlliancePay team with questions about POS, demos, or pricing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with AlliancePay"
        description={`Email ${siteConfig.supportEmail} or send a message below. Delivery to email/CRM is planned for Phase 4.`}
      />
      <Container className="max-w-xl py-12">
        <LeadForm submitLabel="Send inquiry" />
      </Container>
    </>
  );
}
