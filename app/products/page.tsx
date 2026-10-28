import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AlliancePay POS products for checkout, back office, hardware, and multi-location retail.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Retail tools that work together"
        description="Explore AlliancePay products for the counter, back office, customer display, hardware, and multi-store operations."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Explore Features", href: "/features" }}
      />
      <Container className="grid gap-6 py-12 sm:grid-cols-2">
        {products.map((product, index) => (
          <ScrollReveal
            key={product.slug}
            variant="up"
            delay={index * 70}
            duration={650}
          >
            <ProductCard
              title={product.title}
              description={product.summary}
              href={`/products/${product.slug}`}
              imageSrc={product.image?.src}
              imageAlt={product.image?.alt}
            />
          </ScrollReveal>
        ))}
      </Container>
      <CTABanner />
    </>
  );
}
