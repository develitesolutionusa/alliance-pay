import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { productRoutes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Products",
  description: "AlliancePay POS products for checkout, back office, hardware, and multi-location retail.",
};

export default function ProductsPage() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Products" }]}
        />
      </Container>
      <PageHero
        eyebrow="Products"
        title="Retail tools that work together"
        description="Explore AlliancePay products for the counter, back office, customer display, hardware, and multi-store operations."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
      <Container className="grid gap-4 py-12 sm:grid-cols-2">
        {productRoutes.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-foreground">
              {product.title}
            </h2>
            <p className="mt-2 text-sm text-muted">{product.description}</p>
          </Link>
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
