import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About us",
  description: aboutContent.description,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border bg-white lg:min-h-[40rem]">
        <div className="absolute inset-0 hidden lg:block" aria-hidden>
          <Image
            src={aboutContent.image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[92%_48%]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_16%,rgb(255_255_255_/_0.94)_30%,rgb(255_255_255_/_0.62)_42%,rgb(255_255_255_/_0.16)_54%,transparent_66%)] lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/4 hidden h-72 w-72 rounded-full bg-primary/20 blur-3xl motion-safe:animate-[grocery-glow_6s_ease-in-out_infinite] lg:block"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 hidden h-56 w-56 rounded-full bg-[#3d93ff]/25 blur-3xl motion-safe:animate-[grocery-glow_7.5s_ease-in-out_infinite_reverse] lg:block"
          aria-hidden
        />
        <p className="sr-only max-lg:hidden">{aboutContent.image.alt}</p>

        <Container className="relative py-14 sm:py-20 lg:flex lg:min-h-[40rem] lg:items-center">
          <div className="relative max-w-xl">
            <div
              className="pointer-events-none absolute -inset-x-5 -inset-y-6 hidden rounded-3xl bg-white/45 blur-xl lg:block"
              aria-hidden
            />
            <div className="relative">
              <ScrollReveal variant="up" delay={40}>
                <p className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-white/95 px-3 py-1 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_0_24px_-4px_rgb(18_99_241_/_0.45)]">
                  <span className="text-gradient-brand">{aboutContent.eyebrow}</span>
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={100}>
                <h1 className="text-gradient text-4xl font-bold tracking-tight transition duration-300 hover:drop-shadow-[0_0_18px_rgb(18_99_241_/_0.35)] sm:text-5xl">
                  {aboutContent.title}
                </h1>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={180}>
                <p className="mt-5 max-w-xl text-lg leading-8 text-foreground/80">
                  {aboutContent.description}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="up" delay={260}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="/contact">Start Free Trial</PrimaryButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>

        <Container className="relative pb-14 lg:hidden">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-border shadow-[0_24px_50px_-28px_rgb(16_27_53_/_0.45)]">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[72%_center]"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28 lg:py-32" aria-labelledby="overview-heading">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="scale">
            <div className="group relative">
              <div className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_24px_50px_-28px_rgb(16_27_53_/_0.4)] ring-1 ring-primary/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_-18px_rgb(18_99_241_/_0.45)] group-hover:ring-primary/30">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={aboutContent.overview.image.src}
                    alt={aboutContent.overview.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.5rem] opacity-0 transition duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgb(18_99_241_/_0.28),0_0_36px_-8px_rgb(18_99_241_/_0.55)]"
                aria-hidden
              />
            </div>
          </ScrollReveal>
          <div>
            <SectionHeading
              id="overview-heading"
              title={aboutContent.overview.title}
              description={aboutContent.overview.paragraphs[0]}
              titleClassName="transition duration-300 hover:drop-shadow-[0_0_16px_rgb(18_99_241_/_0.28)]"
            />
            <div className="mt-8 space-y-5">
              {aboutContent.overview.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-base leading-7 text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        className="border-y border-border bg-surface py-20 sm:py-28 lg:py-32"
        aria-labelledby="principles-heading"
      >
        <Container>
          <SectionHeading
            id="principles-heading"
            title="How AlliancePay shows up for retailers"
            className="mb-10 sm:mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {aboutContent.principles.map((principle, index) => (
              <ScrollReveal
                key={principle.title}
                variant="up"
                delay={index * 70}
              >
                <div className="card-interactive h-full rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm hover:border-primary/25">
                  <h3 className="text-lg font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="See AlliancePay for your store"
        description="Start a trial conversation or contact the team about checkout, inventory, and staff tools."
        className="py-20 sm:py-28"
        cardClassName="transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-16px_rgb(18_99_241_/_0.65),0_0_36px_-8px_rgb(61_147_255_/_0.55)]"
      />
    </>
  );
}
