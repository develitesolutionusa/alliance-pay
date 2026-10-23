import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
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

export default async function FeatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeaturePage(slug);
  if (!feature) notFound();

  return <DetailTemplate content={feature} />;
}
