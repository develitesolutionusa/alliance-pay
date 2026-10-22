import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/marketing/PlaceholderPage";
import { featureRoutes } from "@/lib/routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return featureRoutes.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = featureRoutes.find((item) => item.slug === slug);
  if (!feature) return {};
  return { title: feature.title, description: feature.description };
}

export default async function FeatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const feature = featureRoutes.find((item) => item.slug === slug);
  if (!feature) notFound();

  return (
    <PlaceholderPage
      eyebrow="Features"
      title={feature.title}
      description={feature.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Features", href: "/features" },
        { label: feature.title },
      ]}
    />
  );
}
