import type { Metadata } from "next";
import { LegalNotice } from "@/components/marketing/LegalNotice";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "AlliancePay privacy policy placeholder pending legal review.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Placeholder only. Final privacy commitments publish after legal review — AlliancePay will not fabricate legal terms."
      />
      <Container className="max-w-3xl py-12">
        <LegalNotice
          title="What this page means today"
          paragraphs={[
            "This notice reserves space for counsel-reviewed privacy commitments covering website visitors, demo requests, and future authenticated product data.",
            "Until that content ships, treat any personal information you send via contact or demo forms as lead-capture correspondence handled by the AlliancePay team.",
            "Do not interpret this page as a complete privacy policy, DPA, or processing schedule.",
          ]}
        />
      </Container>
    </>
  );
}
