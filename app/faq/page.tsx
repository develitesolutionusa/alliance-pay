import type { Metadata } from "next";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PageHero } from "@/components/marketing/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about AlliancePay POS.",
};

const faqs = [
  {
    question: "What is AlliancePay?",
    answer:
      "AlliancePay is a retail POS and store-management platform for independent retailers, covering checkout, inventory, staff, and reporting workflows.",
  },
  {
    question: "Is pricing published yet?",
    answer:
      "Plan structure is shown on the pricing page, but dollar amounts stay unpublished until commercial terms are approved.",
  },
  {
    question: "Can I create an account today?",
    answer:
      "Self-serve authentication is not connected yet. Use Get Started or Book a Demo for lead capture and follow-up.",
  },
  {
    question: "Which industries do you support?",
    answer:
      "AlliancePay focuses on grocery, convenience, liquor, and smoke shop retail. Regulatory wording will match operating markets as they are confirmed.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
      </Container>
      <PageHero
        eyebrow="FAQ"
        title="Answers for retailers evaluating AlliancePay"
        description="Straightforward answers based on what is confirmed today."
      />
      <Container className="max-w-3xl py-12">
        <FAQAccordion items={faqs} />
      </Container>
    </>
  );
}
