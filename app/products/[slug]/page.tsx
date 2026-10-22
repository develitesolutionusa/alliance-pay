import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlaceholderPage } from "@/components/marketing/PlaceholderPage";
import { productRoutes } from "@/lib/routes";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productRoutes.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productRoutes.find((item) => item.slug === slug);
  if (!product) return {};
  return { title: product.title, description: product.description };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = productRoutes.find((item) => item.slug === slug);
  if (!product) notFound();

  return (
    <PlaceholderPage
      eyebrow="Products"
      title={product.title}
      description={product.description}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: product.title },
      ]}
    />
  );
}
