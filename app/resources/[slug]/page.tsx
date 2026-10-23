import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/marketing/CTABanner";
import { ResourceCard } from "@/components/marketing/ResourceCard";
import { Container } from "@/components/ui/Container";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getRelatedResources,
  getResource,
  resources,
} from "@/lib/resources";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) return {};
  return { title: article.title, description: article.description };
}

function ResourceArticleFallback() {
  return (
    <Container className="max-w-3xl py-10 sm:py-14">
      <LoadingSkeleton lines={8} className="max-w-2xl" />
    </Container>
  );
}

export default function ResourceArticlePage({ params }: Props) {
  return (
    <Suspense fallback={<ResourceArticleFallback />}>
      <ResourceArticleContent params={params} />
    </Suspense>
  );
}

async function ResourceArticleContent({ params }: Props) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) notFound();

  const related = getRelatedResources(article.slug);

  return (
    <>
      <article>
        <Container className="max-w-3xl py-10 sm:py-14">
          <ScrollReveal variant="up">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              {article.category}
            </p>
            <h1 className="text-gradient mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              {article.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {article.readingMinutes} min read
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={100} className="mt-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-border shadow-md">
              <Image
                src={article.image.src}
                alt={article.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <div className="mt-10 space-y-10">
            {article.sections.map((section, index) => (
              <ScrollReveal key={section.heading} variant="up" delay={index * 60}>
                <section aria-labelledby={`section-${index}`}>
                  <h2
                    id={`section-${index}`}
                    className="text-2xl font-semibold tracking-tight text-foreground"
                  >
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-7 text-muted">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </ScrollReveal>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted">
            Looking for product detail?{" "}
            <Link href="/features" className="font-semibold text-primary">
              Explore features
            </Link>{" "}
            or{" "}
            <Link href="/book-demo" className="font-semibold text-primary">
              book a demo
            </Link>
            .
          </p>
        </Container>
      </article>

      {related.length > 0 ? (
        <section
          className="border-t border-border bg-surface py-14"
          aria-labelledby="related-resources"
        >
          <Container>
            <SectionHeading
              id="related-resources"
              eyebrow="More guides"
              title="Related resources"
              className="mb-8"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <ResourceCard key={item.slug} article={item} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTABanner />
    </>
  );
}
