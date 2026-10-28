import Image from "next/image";
import Link from "next/link";
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
import { multiLocationPage } from "@/lib/multi-location-page";

const heroPoints = [
  "Switch locations without separate logins",
  "Compare sales and inventory across stores",
  "Keep tax, hours, and catalog rules local",
];

export function MultiLocationProductPage() {
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
                  {multiLocationPage.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-gradient text-hero">
                  {multiLocationPage.title}{" "}
                  <span className="text-gradient-accent">
                    {multiLocationPage.titleAccent}
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={180}>
                <p className="mt-5 max-w-[42ch] text-lead text-muted">
                  {multiLocationPage.description}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={260}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact">Start Free Trial</PrimaryButton>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={320}>
                <ul className="mt-8 space-y-2.5">
                  {heroPoints.map((item) => (
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
                  className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgb(18_99_241_/_0.18),transparent_68%)]"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[1.35rem] border border-border bg-white shadow-[0_24px_60px_-20px_rgb(16_27_53_/_0.35)] ring-1 ring-primary/10">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={multiLocationPage.heroImage.src}
                      alt={multiLocationPage.heroImage.alt}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted">
                  Illustrative AlliancePay locations view · sample store data
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="capabilities-heading">
        <Container>
          <SectionHeading
            id="capabilities-heading"
            eyebrow="Multi-store tools"
            title="Run more than one store from one login"
            description="Switch locations, compare results, transfer stock, and keep each store’s settings intact."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {multiLocationPage.capabilities.map((capability, index) => (
              <ScrollReveal
                key={capability.title}
                variant="up"
                delay={index * 60}
                className="h-full"
              >
                <div className="card-surface card-interactive flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 shadow-sm">
                  <span className="icon-well mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary">
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
                eyebrow="Operator workflow"
                title="From store switch to confirmed transfer"
                description="A practical path for owners who need the group view and the store in front of them."
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">Contact us</PrimaryButton>
              </div>
            </div>
            <WorkflowTimeline steps={[...multiLocationPage.workflow]} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="locations-heading">
        <Container>
          <SectionHeading
            id="locations-heading"
            eyebrow="Stores & transfers"
            title={multiLocationPage.locations.title}
            description={multiLocationPage.locations.description}
            align="center"
            className="mb-12"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                <Image
                  src={multiLocationPage.locations.image.src}
                  alt={multiLocationPage.locations.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
              <p className="mt-3 text-center text-xs text-muted">
                Illustrative transfer · sample items and quantities
              </p>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {multiLocationPage.locations.items.map((item) => (
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
              <p className="mt-5 text-sm leading-6 text-muted">
                {multiLocationPage.disclaimer}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={multiLocationPage.locations.href}>
                  Feature details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
                <SecondaryButton href="/products/back-office">
                  Back Office
                </SecondaryButton>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-white py-20 sm:py-28"
        aria-labelledby="control-heading"
      >
        <Container>
          <SectionHeading
            id="control-heading"
            eyebrow="Control"
            title={multiLocationPage.control.title}
            description={multiLocationPage.control.description}
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up" className="mx-auto max-w-3xl">
            <ul className="space-y-4 rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
              {multiLocationPage.control.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <FeatureIcon name="layers" className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
              <li>
                <Link
                  href="/features/reporting-analytics"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Read reporting details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="multi-location-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="multi-location-faq-heading"
            eyebrow="FAQ"
            title="Questions about Multi-Location"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={[...multiLocationPage.faqs]} />
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="border-t border-border py-20 sm:py-28"
        aria-labelledby="multi-location-related-heading"
      >
        <Container>
          <SectionHeading
            id="multi-location-related-heading"
            eyebrow="Keep exploring"
            title="Pair multi-location with the rest of AlliancePay"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={[...multiLocationPage.related]} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Ready to run more than one store?"
        description="Start a trial conversation or contact us — we’ll walk through store switching, reporting, and stock transfers for your rollout."
      />
    </>
  );
}
