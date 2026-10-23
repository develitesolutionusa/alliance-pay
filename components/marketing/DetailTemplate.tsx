import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/marketing/CheckList";
import { CTABanner } from "@/components/marketing/CTABanner";
import { DetailMedia } from "@/components/marketing/DetailMedia";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { PageHero } from "@/components/marketing/PageHero";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { WorkflowSteps } from "@/components/marketing/WorkflowSteps";
import type { DetailContent } from "@/lib/content-types";

type DetailTemplateProps = {
  content: DetailContent;
};

export function DetailTemplate({ content }: DetailTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "View Pricing", href: "/pricing" }}
      >
        {content.image ? (
          <DetailMedia
            src={content.image.src}
            alt={content.image.alt}
            priority
            className="max-w-3xl"
          />
        ) : null}
      </PageHero>

      <section className="py-14 sm:py-16" aria-labelledby="benefits-heading">
        <Container>
          <SectionHeading
            id="benefits-heading"
            eyebrow="Benefits"
            title={`Why retailers use ${content.title}`}
            description="Practical outcomes for independent stores — without unverified guarantees."
            className="mb-8"
          />
          <ScrollReveal variant="up">
            <CheckList items={content.benefits} />
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-y border-border bg-surface py-14 sm:py-16" aria-labelledby="workflow-heading">
        <Container>
          <SectionHeading
            id="workflow-heading"
            eyebrow="Workflow"
            title="How it works day to day"
            description="A simple operating rhythm your team can learn and repeat."
            className="mb-8"
          />
          <ScrollReveal variant="up">
            <WorkflowSteps steps={content.workflows} />
          </ScrollReveal>
        </Container>
      </section>

      {content.disclaimer ? (
        <Container className="pt-10">
          <p className="rounded-[var(--radius-card)] border border-border bg-white px-5 py-4 text-sm leading-6 text-muted">
            {content.disclaimer}
          </p>
        </Container>
      ) : null}

      <section className="py-14 sm:py-16" aria-labelledby="faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title={`Questions about ${content.title}`}
            className="mb-8"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={content.faqs} />
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-t border-border py-14 sm:py-16" aria-labelledby="related-heading">
        <Container>
          <SectionHeading
            id="related-heading"
            eyebrow="Keep exploring"
            title="Related AlliancePay pages"
            className="mb-8"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={content.related} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
