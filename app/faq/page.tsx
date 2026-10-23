import type { Metadata } from "next";
import { FAQSearch } from "@/components/marketing/FAQSearch";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { siteFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about AlliancePay POS.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers for retailers evaluating AlliancePay"
        description="Straightforward answers based on what is confirmed today — search to find a topic quickly."
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        secondaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
      <Container className="max-w-3xl py-12">
        <ScrollReveal variant="up">
          <FAQSearch items={siteFaqs} />
        </ScrollReveal>
      </Container>
      <CTABanner />
    </>
  );
}
