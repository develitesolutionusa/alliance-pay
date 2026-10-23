import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export const metadata: Metadata = {
  title: "Get Started",
  description: "Start your AlliancePay journey with a trial lead capture — no fake account creation.",
};

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get started"
        title="Start your AlliancePay trial journey"
        description="Account creation connects only when authentication is configured. Until then, leave your details and we will follow up honestly."
      />
      <Container className="grid gap-10 py-12 lg:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-foreground">
            Trial signup status
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            Self-serve authentication is pending. Use the form for lead capture,
            or book a demo if you want a guided walkthrough.
          </p>
          <SecondaryButton href="/book-demo" className="mt-6">
            Prefer a demo?
          </SecondaryButton>
        </div>
        <LeadForm intent="trial" submitLabel="Request trial access" />
      </Container>
    </>
  );
}
