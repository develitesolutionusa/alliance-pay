import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
import { getIndustryPage, industryPages } from "@/lib/industry-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.description };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
  if (!industry) notFound();

  return <DetailTemplate content={industry} />;
}
