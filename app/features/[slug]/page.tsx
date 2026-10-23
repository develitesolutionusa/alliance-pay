import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
import { Container } from "@/components/ui/Container";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { featurePages, getFeaturePage } from "@/lib/feature-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featurePages.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) return {};
  return { title: feature.title, description: feature.description };
}

function FeatureDetailFallback() {
  return (
    <Container className="py-16">
      <LoadingSkeleton lines={6} className="max-w-2xl" />
    </Container>
  );
}

export default function FeatureDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<FeatureDetailFallback />}>
      <FeatureDetailContent params={params} />
    </Suspense>
  );
}

async function FeatureDetailContent({ params }: Props) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) notFound();

  return <DetailTemplate content={feature} />;
}
