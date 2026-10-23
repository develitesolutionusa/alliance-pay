import type { Metadata } from "next";
import { LegalNotice } from "@/components/marketing/LegalNotice";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookies",
  description: "AlliancePay cookie notice — essential storage and optional analytics consent.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Notice"
        description="AlliancePay keeps essential site function separate from optional analytics. Nonessential cookies load only after consent."
      />
      <Container className="max-w-3xl space-y-8 py-12">
        <LegalNotice
          title="Essential storage"
          paragraphs={[
            "Essential cookies or similar storage may be required for basic site operation, security, and form abuse protection (for example rate-limit signals).",
            "These controls are not used for advertising and do not require a marketing consent banner.",
          ]}
        />
        <LegalNotice
          title="Optional analytics"
          paragraphs={[
            "When a measurement ID is configured, AlliancePay may offer Google Analytics. The consent banner appears only in that case.",
            "Accepting loads analytics scripts. Rejecting keeps analytics off. You can clear site data in your browser to reset the choice.",
            "This page remains a practical notice until counsel-reviewed legal language replaces it. AlliancePay will not fabricate privacy commitments.",
          ]}
        />
      </Container>
    </>
  );
}
