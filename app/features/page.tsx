import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureIcon } from "@/components/icons/FeatureIcon";
import { CTABanner } from "@/components/marketing/CTABanner";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  featureGroups,
  featurePages,
  getFeaturePage,
} from "@/lib/feature-pages";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore AlliancePay POS features for checkout, inventory, staff, loyalty, payments, and reporting.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything you need in one platform"
        description="A practical AlliancePay feature set for independent retailers — checkout, stock, staff, loyalty, payments, and reporting without unverified claims."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "View Products", href: "/products" }}
      />

      {featureGroups.map((group, groupIndex) => {
        const items = group.slugs
          .map((slug) => getFeaturePage(slug))
          .filter((feature): feature is NonNullable<typeof feature> => Boolean(feature));

        return (
          <section
            key={group.id}
            className={
              groupIndex % 2 === 1
                ? "border-y border-border bg-surface py-16 sm:py-20"
                : "py-16 sm:py-20"
            }
            aria-labelledby={`features-${group.id}-heading`}
          >
            <Container>
              <SectionHeading
                id={`features-${group.id}-heading`}
                eyebrow={group.eyebrow}
                title={group.title}
                description={group.description}
                className="mb-10"
              />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((feature, index) => (
                  <ScrollReveal
                    key={feature.slug}
                    variant="up"
                    delay={index * 70}
                    duration={650}
                    className="h-full"
                  >
                    <Link
                      href={`/features/${feature.slug}`}
                      className="card-surface card-interactive group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                        <Image
                          src={feature.heroImage.src}
                          alt={feature.heroImage.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/30">
                          <FeatureIcon name={feature.icon} className="h-5 w-5" />
                        </span>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h2 className="text-gradient text-subhead">
                          {feature.title}
                        </h2>
                        <p className="mt-2 flex-1 text-sm leading-6 text-muted">
                          {feature.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                          Learn more
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="py-12 sm:py-16" aria-labelledby="all-features-heading">
        <Container>
          <p id="all-features-heading" className="sr-only">
            All AlliancePay features
          </p>
          <p className="text-center text-sm text-muted">
            {featurePages.length} features across counter, operations, and growth —{" "}
            <Link href="/contact" className="font-semibold text-primary">
              contact us
            </Link>{" "}
            to map them to your store.
          </p>
        </Container>
      </section>

      <CTABanner
        title="See the features that matter for your store"
        description="Contact us and we will focus on the workflows you run every day — not a generic feature tour."
      />
    </>
  );
}
