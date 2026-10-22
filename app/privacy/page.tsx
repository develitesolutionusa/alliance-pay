import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "AlliancePay privacy policy placeholder pending legal review.",
};

export default function PrivacyPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
        />
      </Container>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page is a placeholder. Final privacy commitments will be published after legal review — AlliancePay will not fabricate legal terms."
      />
      <Container className="prose-sm max-w-3xl py-12 text-muted">
        <p>
          Until counsel-reviewed content is available, contact{" "}
          <a className="text-primary" href="mailto:hello@alliancepay.com">
            hello@alliancepay.com
          </a>{" "}
          with privacy questions.
        </p>
      </Container>
    </>
  );
}
