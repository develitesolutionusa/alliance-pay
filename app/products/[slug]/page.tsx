import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BackOfficeProductPage } from "@/components/marketing/BackOfficeProductPage";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
import { PosProductPage } from "@/components/marketing/PosProductPage";
import { Container } from "@/components/ui/Container";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";
import { backOfficePage } from "@/lib/back-office-page";
import { getProduct, products } from "@/lib/products";
import { posPage } from "@/lib/pos-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "pos") {
    return {
      title: "POS Checkout",
      description: posPage.description,
    };
  }
  if (slug === "back-office") {
    return {
      title: "Back Office",
      description: backOfficePage.description,
    };
  }
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

function ProductDetailFallback() {
  return (
    <Container className="py-16">
      <LoadingSkeleton lines={6} className="max-w-2xl" />
    </Container>
  );
}

export default function ProductDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<ProductDetailFallback />}>
      <ProductDetailContent params={params} />
    </Suspense>
  );
}

async function ProductDetailContent({ params }: Props) {
  const { slug } = await params;

  if (slug === "pos") {
    return <PosProductPage />;
  }

  if (slug === "back-office") {
    return <BackOfficeProductPage />;
  }

  const product = getProduct(slug);
  if (!product) notFound();

  return <DetailTemplate content={product} />;
}
