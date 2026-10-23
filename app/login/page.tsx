import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export const metadata: Metadata = {
  title: "Login",
  description: "AlliancePay merchant login will be available when authentication is configured.",
};

export default function LoginPage() {
  return (
    <>
      <PageHero
        eyebrow="Account"
        title="Merchant login coming soon"
        description="Authentication is not connected yet. Use Get Started or Book a Demo to reach the AlliancePay team."
      />
      <Container className="flex flex-col gap-3 py-12 sm:flex-row">
        <PrimaryButton href="/get-started">Get Started</PrimaryButton>
        <SecondaryButton href="/book-demo">Book a Demo</SecondaryButton>
      </Container>
    </>
  );
}
