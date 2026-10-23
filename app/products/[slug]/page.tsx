import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailTemplate } from "@/components/marketing/DetailTemplate";
import { PosProductPage } from "@/components/marketing/PosProductPage";
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
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "pos") {
    return <PosProductPage />;
  }

  const product = getProduct(slug);
  if (!product) notFound();

  return <DetailTemplate content={product} />;
}
