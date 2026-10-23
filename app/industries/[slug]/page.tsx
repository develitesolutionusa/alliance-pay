import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
import { GroceryStoresPage } from "@/components/marketing/GroceryStoresPage";
import { Container } from "@/components/ui/Container";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { groceryPage } from "@/lib/grocery-page";
import { getIndustryPage, industryPages } from "@/lib/industry-pages";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "grocery-stores") {
    return {
      title: "Grocery Stores",
      description: groceryPage.description,
    };
  }
  const industry = getIndustryPage(slug);
  if (!industry) return {};
  return { title: industry.title, description: industry.description };
}

function IndustryDetailFallback() {
  return (
    <Container className="py-16">
      <LoadingSkeleton lines={6} className="max-w-2xl" />
    </Container>
  );
}

export default function IndustryDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<IndustryDetailFallback />}>
      <IndustryDetailContent params={params} />
    </Suspense>
  );
}

async function IndustryDetailContent({ params }: Props) {
  const { slug } = await params;

  if (slug === "grocery-stores") {
    return <GroceryStoresPage />;
  }

  const industry = getIndustryPage(slug);
  if (!industry) notFound();

  return <DetailTemplate content={industry} />;
}
