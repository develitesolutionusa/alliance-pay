import type { FAQItem } from "@/components/marketing/FAQAccordion";
import type { IconName } from "@/components/icons/FeatureIcon";

export type ContentImage = {
  src: string;
  alt: string;
};

export type ContentBenefit = {
  title: string;
  description: string;
};

export type ContentWorkflow = {
  title: string;
  description: string;
};

export type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

export type DetailContent = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  image?: ContentImage;
  benefits: ContentBenefit[];
  workflows: ContentWorkflow[];
  faqs: FAQItem[];
  related: RelatedLink[];
  disclaimer?: string;
  icon?: IconName;
};
