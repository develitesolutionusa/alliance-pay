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
        description={`Email ${siteConfig.supportEmail} or send a message below. Submissions are validated, rate-limited, and delivered securely when email or CRM delivery is configured.`}
      />
      <Container className="max-w-xl py-12">
        <LeadForm intent="contact" submitLabel="Send inquiry" />
      </Container>
    </>
  );
}
