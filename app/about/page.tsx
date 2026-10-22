import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/marketing/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about AlliancePay and our focus on independent retailers.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="Company"
      title="Built for independent retailers"
      description="AlliancePay is a retail POS and store-management platform. Mission, team, and proof points will use approved company facts only."
      crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
    />
  );
}
