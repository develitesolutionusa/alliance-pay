import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { WorkflowTimeline } from "@/components/marketing/WorkflowTimeline";
import type { FeaturePageContent } from "@/lib/feature-pages";

type FeatureDetailPageProps = {
  content: FeaturePageContent;
};

export function FeatureDetailPage({ content }: FeatureDetailPageProps) {
  return (
    <>
      <section className="section-wash relative overflow-hidden border-b border-border py-16 sm:py-24">
        <div
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
            <div className="min-w-0">
              <ScrollReveal variant="up" delay={40}>
                <p className="text-gradient-brand mb-3 text-eyebrow">
                  {content.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-gradient text-hero">
                  {content.title}{" "}
                  <span className="text-gradient-accent">{content.titleAccent}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={180}>
                <p className="mt-5 max-w-[42ch] text-lead text-muted">
                  {content.description}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={260}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact">Start Free Trial</PrimaryButton>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={320}>
                <ul className="mt-8 space-y-2.5">
                  {content.heroHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                        <Check className="h-3 w-3" aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            <ScrollReveal variant="up" delay={160} className="min-w-0">
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgb(18_99_241_/_0.2),transparent_68%)] motion-safe:animate-[feature-hero-glow-shift_7s_ease-in-out_infinite]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-10 top-6 h-40 w-40 rounded-full bg-primary/20 blur-3xl motion-safe:animate-[grocery-glow_6s_ease-in-out_infinite]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#3d93ff]/25 blur-3xl motion-safe:animate-[grocery-glow_7.5s_ease-in-out_infinite_reverse]"
                  aria-hidden
                />
                <div className="relative motion-safe:animate-[feature-hero-float_6.5s_ease-in-out_infinite]">
                  <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_24px_60px_-20px_rgb(16_27_53_/_0.35)] ring-1 ring-primary/10">
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <Image
                        src={content.heroImage.src}
                        alt={content.heroImage.alt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 52vw"
                        className="object-cover object-[60%_45%] motion-safe:animate-[feature-hero-kenburns_14s_ease-in-out_infinite]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-white/10"
                        aria-hidden
                      />
                      <div
                        className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent motion-safe:animate-[feature-hero-shine_8s_ease-in-out_infinite]"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="capabilities-heading">
        <Container>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Capabilities"
            title={content.capabilitiesTitle}
            description={content.capabilitiesDescription}
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.capabilities.map((capability, index) => (
              <ScrollReveal
                key={capability.title}
                variant="up"
                delay={index * 60}
                className="h-full"
              >
                <div className="card-surface card-interactive flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 shadow-sm">
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25">
                    <FeatureIcon name={capability.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-subhead text-foreground">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {capability.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-surface py-20 sm:py-28"
        aria-labelledby="workflow-heading"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="workflow-heading"
                eyebrow="Workflow"
                title={content.workflowTitle}
                description={content.workflowDescription}
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">Contact us</PrimaryButton>
              </div>
            </div>
            <WorkflowTimeline steps={[...content.workflow]} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="practical-heading">
        <Container>
          <SectionHeading
            id="practical-heading"
            eyebrow="In practice"
            title={content.practical.title}
            description={content.practical.description}
            align="center"
            className="mb-12"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                <Image
                  src={content.practical.image.src}
                  alt={content.practical.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {content.practical.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact">
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
                <SecondaryButton href="/pricing">View Pricing</SecondaryButton>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {content.disclaimer ? (
        <Container className="pb-4">
          <p className="rounded-[var(--radius-card)] border border-border bg-surface px-5 py-4 text-sm leading-6 text-muted">
            {content.disclaimer}
          </p>
        </Container>
      ) : null}

      <section className="border-t border-border py-20 sm:py-28" aria-labelledby="feature-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="feature-faq-heading"
            eyebrow="FAQ"
            title={`Questions about ${content.title}`}
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={[...content.faqs]} />
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="border-t border-border py-20 sm:py-28"
        aria-labelledby="feature-related-heading"
      >
        <Container>
          <SectionHeading
            id="feature-related-heading"
            eyebrow="Keep exploring"
            title={`Pair ${content.title} with the rest of AlliancePay`}
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={[...content.related]} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner title={content.ctaTitle} description={content.ctaDescription} />
    </>
  );
}
