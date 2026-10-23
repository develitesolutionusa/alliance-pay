import type { Metadata } from "next";
import { LegalNotice } from "@/components/marketing/LegalNotice";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Cookies",
  description: "AlliancePay cookie notice placeholder pending legal review.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Notice"
        description="AlliancePay currently relies on essential site functionality. Nonessential analytics will request consent when introduced."
      />
      <Container className="max-w-3xl py-12">
        <LegalNotice
          title="Current cookie posture"
          paragraphs={[
            "Essential cookies or similar storage may be required for basic site operation, security, and form abuse protection when those controls ship.",
            "Nonessential analytics and marketing cookies are not claimed as active. When they are introduced, AlliancePay will add a consent control and a reviewed cookie table.",
            "This page will be replaced with counsel-reviewed language before any nonessential tracking is enabled.",
          ]}
        />
      </Container>
    </>
  );
}
