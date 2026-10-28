import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { RelatedLinks } from "@/components/marketing/RelatedLinks";
import { WorkflowTimeline } from "@/components/marketing/WorkflowTimeline";
import { posPage } from "@/lib/pos-page";

export function PosProductPage() {
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
                <p className="text-gradient-brand mb-3 text-sm font-semibold tracking-wide">
                  {posPage.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl">
                  {posPage.title}{" "}
                  <span className="text-gradient-accent">{posPage.titleAccent}</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={180}>
                <p className="mt-5 max-w-[42ch] text-lg leading-8 text-muted">
                  {posPage.description}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={260}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact">Start Free Trial</PrimaryButton>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={320}>
                <ul className="mt-8 space-y-2.5">
                  {[
                    "Scan, discount, tax, and tender in one lane flow",
                    "Receipts and returns that match the original sale",
                    "Hardware-ready counter without inventing device lists",
                  ].map((item) => (
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
                      src={posPage.heroImage.src}
                      alt={posPage.heroImage.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover object-[60%_45%]"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted">
                  Illustrative AlliancePay POS lane · sample catalog data
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
            eyebrow="Lane capabilities"
            title="Everything the counter needs"
            description="Barcode scanning, discounts, taxes, payments, receipts, and returns — covered without unverified payment-method claims."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posPage.capabilities.map((capability, index) => (
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
                  <h3 className="text-lg font-semibold text-foreground">
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
                eyebrow="Checkout workflow"
                title="From first scan to closed sale"
                description="A predictable rhythm cashiers can learn on day one."
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">Contact us</PrimaryButton>
              </div>
            </div>
            <WorkflowTimeline steps={[...posPage.workflow]} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="hardware-heading">
        <Container>
          <SectionHeading
            id="hardware-heading"
            eyebrow="Hardware overview"
            title={posPage.hardware.title}
            description={posPage.hardware.description}
            align="center"
            className="mb-12"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                <Image
                  src={posPage.hardware.image.src}
                  alt={posPage.hardware.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {posPage.hardware.items.map((item) => (
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
              <PrimaryButton href={posPage.hardware.href} className="mt-6">
                Explore hardware
                <ArrowRight className="h-4 w-4" aria-hidden />
              </PrimaryButton>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-white py-20 sm:py-28"
        aria-labelledby="payments-heading"
      >
        <Container>
          <SectionHeading
            id="payments-heading"
            eyebrow="Supported payments"
            title={posPage.payments.title}
            description={posPage.payments.description}
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up" className="mx-auto max-w-3xl">
            <ul className="space-y-4 rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
              {posPage.payments.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                    <FeatureIcon name="creditCard" className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </li>
              ))}
              <li>
                <Link
                  href="/features/payments"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Read payments details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </li>
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="pos-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="pos-faq-heading"
            eyebrow="FAQ"
            title="Questions about POS Checkout"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={[...posPage.faqs]} />
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="border-t border-border py-20 sm:py-28"
        aria-labelledby="pos-related-heading"
      >
        <Container>
          <SectionHeading
            id="pos-related-heading"
            eyebrow="Keep exploring"
            title="Pair POS with the rest of AlliancePay"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={[...posPage.related]} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Ready to try AlliancePay at the counter?"
        description="Start a trial conversation or contact us — we’ll walk through your lane hardware and tenders honestly."
      />
    </>
  );
}
