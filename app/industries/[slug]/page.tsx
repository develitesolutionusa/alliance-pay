import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/marketing/PlaceholderPage";
import { industryRoutes } from "@/lib/routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryRoutes.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryRoutes.find((item) => item.slug === slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industryRoutes.find((item) => item.slug === slug);
  if (!industry) notFound();

  return (
    <PlaceholderPage
      eyebrow="Industries"
      title={industry.title}
      description={industry.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: industry.title },
      ]}
    />
  );
}
