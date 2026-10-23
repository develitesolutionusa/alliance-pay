import type { Metadata } from "next";
import Image from "next/image";
import { CTABanner } from "@/components/marketing/CTABanner";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutContent } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutContent.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.eyebrow}
        title={aboutContent.title}
        description={aboutContent.description}
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="py-14 sm:py-16" aria-labelledby="mission-heading">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal variant="up">
            <SectionHeading
              id="mission-heading"
              title={aboutContent.mission.title}
              description={aboutContent.mission.paragraphs[0]}
            />
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              {aboutContent.mission.paragraphs[1]}
            </p>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-border shadow-md sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={aboutContent.image.src}
                alt={aboutContent.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section
        className="border-y border-border bg-surface py-14 sm:py-16"
        aria-labelledby="principles-heading"
      >
        <Container>
          <SectionHeading
            id="principles-heading"
            eyebrow="Principles"
            title="How AlliancePay shows up for retailers"
            className="mb-8"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutContent.principles.map((principle, index) => (
              <ScrollReveal
                key={principle.title}
                variant="up"
                delay={index * 70}
              >
                <div className="h-full rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm">
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

      <section className="py-14 sm:py-16" aria-labelledby="story-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            id="story-heading"
            title={aboutContent.story.title}
            description={aboutContent.story.paragraphs[0]}
          />
          <p className="mt-4 text-base leading-7 text-muted">
            {aboutContent.story.paragraphs[1]}
          </p>
        </Container>
      </section>

      <CTABanner
        title="See AlliancePay for your store"
        description="Book a demo or start a trial conversation — no fabricated customer counts required."
      />
    </>
  );
}
