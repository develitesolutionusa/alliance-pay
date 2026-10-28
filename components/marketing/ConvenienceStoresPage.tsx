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
import { conveniencePage } from "@/lib/convenience-page";

export function ConvenienceStoresPage() {
  return (
    <>
      {/* Hero — white left / image right, matching grocery & landing Hero */}
      <section className="relative isolate min-h-[40rem] overflow-hidden border-b border-border bg-white sm:min-h-[44rem] lg:min-h-[40rem]">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src={conveniencePage.heroImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_50%]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-white/25 lg:bg-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_42%,rgb(255_255_255_/_0.92)_58%,rgb(255_255_255_/_0.55)_72%,rgb(255_255_255_/_0.18)_86%,transparent_100%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_22%,rgb(255_255_255_/_0.97)_34%,rgb(255_255_255_/_0.78)_44%,rgb(255_255_255_/_0.35)_54%,rgb(255_255_255_/_0.08)_64%,transparent_72%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/4 h-72 w-72 rounded-full bg-primary/20 blur-3xl motion-safe:animate-[grocery-glow_6s_ease-in-out_infinite]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-[#3d93ff]/25 blur-3xl motion-safe:animate-[grocery-glow_7.5s_ease-in-out_infinite_reverse]"
          aria-hidden
        />
        <p className="sr-only">{conveniencePage.heroImage.alt}</p>

        <Container className="relative z-10 flex min-h-[40rem] items-center py-16 sm:min-h-[44rem] lg:min-h-[40rem] lg:py-20">
          <div className="relative min-w-0 max-w-xl">
            <div
              className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-white/70 blur-xl sm:-inset-x-6 sm:-inset-y-8 lg:bg-white/55"
              aria-hidden
            />
            <div className="relative">
              <ScrollReveal variant="up" delay={40}>
                <p className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-white/95 px-3 py-1 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_0_24px_-4px_rgb(18_99_241_/_0.45)]">
                  <span className="text-gradient-brand">
                    {conveniencePage.eyebrow}
                  </span>
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={120}>
                <h1 className="text-gradient text-hero drop-shadow-[0_1px_0_rgb(255_255_255_/_0.85)]">
                  {conveniencePage.title}{" "}
                  <span className="text-gradient-accent">
                    {conveniencePage.titleAccent}
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={200}>
                <p className="mt-5 max-w-[42ch] text-lead text-foreground/75">
                  {conveniencePage.description}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={280}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact" className="px-6 py-3 text-button-lg">
                    Start Free Trial
                  </PrimaryButton>
                  <SecondaryButton
                    href="#how-it-works"
                    className="bg-white/95 px-6 py-3 text-button-lg"
                  >
                    See how it works
                  </SecondaryButton>
                </div>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={360}>
                <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
                  {conveniencePage.heroHighlights.map((item) => (
                    <li
                      key={item.label}
                      className="group inline-flex items-center gap-2 rounded-full border border-transparent px-2.5 py-1.5 text-sm font-medium text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:bg-white/90 hover:shadow-[0_0_28px_-6px_rgb(18_99_241_/_0.5)]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-primary transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgb(18_99_241_/_0.55)]">
                        <FeatureIcon name={item.icon} className="h-3 w-3" />
                      </span>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Store types */}
      <section className="py-20 sm:py-28" aria-labelledby="cstore-types-heading">
        <Container>
          <SectionHeading
            id="cstore-types-heading"
            eyebrow="Store types"
            title="Built for convenience retailers of every kind"
            description="From corner shops to travel centers — workflows that match how each store actually runs."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conveniencePage.storeTypes.map((store, index) => (
              <ScrollReveal
                key={store.title}
                variant="up"
                delay={index * 55}
                className="h-full"
              >
                <article className="card-surface card-interactive group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-border shadow-sm">
                  <div
                    className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgb(18_99_241_/_0.28),0_0_36px_-8px_rgb(18_99_241_/_0.55)]"
                    aria-hidden
                  />
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                    <Image
                      src={store.image.src}
                      alt={store.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                  </div>
                  <div className="relative z-[1] flex flex-1 flex-col p-5">
                    <h3 className="text-subhead-sm text-foreground transition-colors group-hover:text-primary">
                      {store.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {store.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal variant="up" delay={200} className="mt-10 flex justify-center">
            <PrimaryButton href="/pricing">
              View Pricing
              <ArrowRight className="h-4 w-4" aria-hidden />
            </PrimaryButton>
          </ScrollReveal>
        </Container>
      </section>

      {/* Pain → solution */}
      <section
        id="how-it-works"
        className="border-y border-border bg-surface py-20 sm:py-28"
        aria-labelledby="cstore-control-heading"
      >
        <Container>
          <SectionHeading
            id="cstore-control-heading"
            eyebrow="One system. Total control."
            title="Everything your store needs — plus the tools you were missing"
            description="Operator problems, answered with AlliancePay workflows you can verify in a demo."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {conveniencePage.painPoints.map((item, index) => (
              <ScrollReveal
                key={item.problem}
                variant="up"
                delay={index * 50}
                className="h-full"
              >
                <article className="card-surface card-interactive group flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 shadow-sm">
                  <span className="icon-well mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-primary transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_24px_-2px_rgb(18_99_241_/_0.65)]">
                    <FeatureIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="text-subhead-sm text-foreground transition-colors group-hover:text-primary">
                    {item.problem}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {item.solution}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Operations */}
      <section className="py-20 sm:py-28" aria-labelledby="cstore-ops-heading">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal variant="left">
              <div className="group relative">
                <div
                  className="pointer-events-none absolute -inset-3 rounded-[1.75rem] bg-primary/20 opacity-60 blur-2xl transition duration-500 group-hover:opacity-100 group-hover:blur-3xl"
                  aria-hidden
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] border border-border shadow-md ring-1 ring-primary/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_-18px_rgb(18_99_241_/_0.45)] group-hover:ring-primary/30">
                  <Image
                    src={conveniencePage.operations.image.src}
                    alt={conveniencePage.operations.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs text-muted lg:text-left">
                Illustrative convenience POS counter · sample catalog data
              </p>
            </ScrollReveal>
            <div>
              <SectionHeading
                id="cstore-ops-heading"
                eyebrow={conveniencePage.operations.eyebrow}
                title={conveniencePage.operations.title}
                description={conveniencePage.operations.description}
              />
              <ul className="mt-8 space-y-5">
                {conveniencePage.operations.points.map((point, index) => (
                  <ScrollReveal key={point.title} variant="up" delay={index * 70}>
                    <li className="group flex gap-3 rounded-2xl border border-transparent p-3 transition duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:bg-white hover:shadow-[0_12px_28px_-14px_rgb(18_99_241_/_0.45)]">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgb(18_99_241_/_0.55)]">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="text-subhead-sm text-foreground transition-colors group-hover:text-primary">
                          {point.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-muted">
                          {point.description}
                        </p>
                      </div>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>
              <ScrollReveal variant="up" delay={280} className="mt-8">
                <PrimaryButton href="/contact">Contact us</PrimaryButton>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Day workflow */}
      <section
        className="border-y border-border bg-surface py-20 sm:py-28"
        aria-labelledby="cstore-workflow-heading"
      >
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 xl:gap-16">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="cstore-workflow-heading"
                eyebrow="Day on the floor"
                title="From first scan to shift close"
                description="A predictable convenience rhythm cashiers and managers can learn quickly."
              />
              <div className="mt-8">
                <PrimaryButton href="/contact">
                  Contact us
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </PrimaryButton>
              </div>
            </div>
            <WorkflowTimeline steps={[...conveniencePage.workflow]} />
          </div>
        </Container>
      </section>

      {/* Switching */}
      <section className="py-20 sm:py-28" aria-labelledby="cstore-switching-heading">
        <Container>
          <SectionHeading
            id="cstore-switching-heading"
            eyebrow="Getting started"
            title="Switching is easier than you think"
            description="We handle the heavy lifting — from discovery to training — so you can go live without disrupting the rush."
            align="center"
            className="mb-12"
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {conveniencePage.switching.map((step, index) => (
              <ScrollReveal
                key={step.title}
                variant="up"
                delay={index * 80}
                className="h-full"
              >
                <li className="card-surface card-interactive group relative flex h-full flex-col rounded-[var(--radius-card)] border border-border p-6 shadow-sm">
                  <span className="mb-4 inline-flex w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary transition duration-300 group-hover:shadow-[0_0_20px_-2px_rgb(18_99_241_/_0.6)]">
                    {step.timing}
                  </span>
                  <p className="text-xs font-semibold text-muted">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-1 text-subhead text-foreground transition-colors group-hover:text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="border-y border-border bg-white py-20 sm:py-28"
        aria-labelledby="cstore-faq-heading"
      >
        <Container className="max-w-3xl">
          <SectionHeading
            id="cstore-faq-heading"
            eyebrow="FAQ"
            title="Questions about convenience POS"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <FAQAccordion items={[...conveniencePage.faqs]} />
          </ScrollReveal>
        </Container>
      </section>

      {/* Related */}
      <section className="py-20 sm:py-28" aria-labelledby="cstore-related-heading">
        <Container>
          <SectionHeading
            id="cstore-related-heading"
            eyebrow="Keep exploring"
            title="Pair convenience with the rest of AlliancePay"
            align="center"
            className="mb-12"
          />
          <ScrollReveal variant="up">
            <RelatedLinks items={[...conveniencePage.related]} />
          </ScrollReveal>
        </Container>
      </section>

      <Container className="pb-6">
        <p className="rounded-[var(--radius-card)] border border-border bg-surface px-5 py-4 text-sm leading-6 text-muted">
          {conveniencePage.disclaimer}
        </p>
      </Container>

      <CTABanner
        title="Ready to run your convenience store on AlliancePay?"
        description="See how AlliancePay helps with checkout, inventory, staffing, and reporting — with claims we can verify for your market."
      />
    </>
  );
}
