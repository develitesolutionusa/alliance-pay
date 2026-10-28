import { PageHero } from "@/components/marketing/PageHero";
import { CTABanner } from "@/components/marketing/CTABanner";

type PlaceholderPageProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

/** Fallback shell for routes that are intentionally pending external configuration. */
export function PlaceholderPage({
  title,
  description,
  eyebrow,
}: PlaceholderPageProps) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "View Features", href: "/features" }}
      />
      <CTABanner />
    </>
  );
}
