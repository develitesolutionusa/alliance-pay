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
import { hardwarePage } from "@/lib/hardware-page";

export function HardwareProductPage() {
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
                  {hardwarePage.eyebrow}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-gradient text-hero">
                  {hardwarePage.title}{" "}
                  <span className="text-gradient-accent">
                    {hardwarePage.titleAccent}
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={180}>
                <p className="mt-5 max-w-[42ch] text-lead text-muted">
                  {hardwarePage.description}
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
                    "Scan, print, cash, and pay at the counter",
                    "Model lists published only after verification",
                    "Reuse compatible devices when they pass checks",
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
                      src={hardwarePage.heroImage.src}
                      alt={hardwarePage.heroImage.alt}
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 100vw, 52vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-muted">
                  Illustrative AlliancePay lane · compatibility pending verification
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="devices-heading">
        <Container>
          <SectionHeading
            id="devices-heading"
            eyebrow="Lane devices"
            title="The hardware independent retailers actually need"
            description="Terminals, scanners, printers, drawers, scales, and payment devices — covered as capabilities, not an unverified catalog."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hardwarePage.devices.map((device, index) => (
              <ScrollReveal
                key={device.title}
                variant="up"
                delay={index * 60}
                className="h-full"
              >
                <div className="card-surface card-interactive flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 shadow-sm">
                  <span className="icon-well mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary">
                    <FeatureIcon name={device.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-subhead text-foreground">
                    {device.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {device.description}
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
                eyebrow="Setup workflow"
                title="From counter plan to go-live"
                description="A practical path so hardware helps the lane — instead of delaying opening day."
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">Contact us</PrimaryButton>
              </div>
            </div>
            <WorkflowTimeline steps={[...hardwarePage.workflow]} />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28" aria-labelledby="lane-heading">
        <Container>
          <SectionHeading
            id="lane-heading"
            eyebrow="Compatibility"
            title={hardwarePage.lane.title}
            description={hardwarePage.lane.description}
            align="center"
            className="mb-12"
          />
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                <Image
                  src={hardwarePage.lane.image.src}
                  alt={hardwarePage.lane.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {hardwarePage.lane.items.map((item) => (
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
                {hardwarePage.disclaimer}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href={hardwarePage.lane.href}>
                  Customer display
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
                <SecondaryButton href="/products/pos">POS Checkout</SecondaryButton>
              </div>
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
            eyebrow="Payments & PCI"
            title={hardwarePage.payments.title}
            description={hardwarePage.payments.description}
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up" className="mx-auto max-w-3xl">
            <ul className="space-y-4 rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8">
              {hardwarePage.payments.points.map((point) => (
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

      <section className="py-20 sm:py-28" aria-labelledby="hardware-faq-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="hardware-faq-heading"
            eyebrow="FAQ"
            title="Questions about Hardware"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={[...hardwarePage.faqs]} />
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="border-t border-border py-20 sm:py-28"
        aria-labelledby="hardware-related-heading"
      >
        <Container>
          <SectionHeading
            id="hardware-related-heading"
            eyebrow="Keep exploring"
            title="Pair hardware with the rest of AlliancePay"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={[...hardwarePage.related]} />
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Ready to plan your counter?"
        description="Start a trial conversation or contact us — we’ll walk through terminals, scanners, printers, and payment devices honestly."
      />
    </>
  );
}
