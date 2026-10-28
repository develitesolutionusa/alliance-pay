import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

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
        description="Authentication is not connected yet. Contact us to reach the AlliancePay team."
      />
      <Container className="flex flex-col gap-3 py-12 sm:flex-row">
        <PrimaryButton href="/contact">Contact us</PrimaryButton>
      </Container>
    </>
  );
}
