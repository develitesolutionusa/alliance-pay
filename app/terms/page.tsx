import type { Metadata } from "next";
import { LegalNotice } from "@/components/marketing/LegalNotice";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "AlliancePay terms of service placeholder pending legal review.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Placeholder only. Binding terms will be published after legal review."
      />
      <Container className="max-w-3xl py-12">
        <LegalNotice
          title="Not a contractual offer"
          paragraphs={[
            "This page is a structural placeholder for AlliancePay terms of service, acceptable use, and commercial conditions.",
            "Marketing copy, plan names, and feature lists on this website are not a binding offer until counsel-reviewed terms and approved pricing are published.",
            "For current commercial discussions, use Book a Demo or Contact — and request written terms from AlliancePay.",
          ]}
        />
      </Container>
    </>
  );
}
