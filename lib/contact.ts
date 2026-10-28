import { siteConfig } from "@/lib/site";

export const contactContent = {
  eyebrow: "Contact",
  title: "Talk with AlliancePay",
  description:
    "Questions about POS, pricing, hardware, or a store rollout — send a message, call, or email us directly. We review every inquiry.",
  formTitle: "Send a message",
  formDescription:
    "Tell us about your store and what you need. Submissions are validated and rate-limited; we follow up from our team inbox.",
  channelsTitle: "Reach us directly",
  channelsDescription:
    "Call or email the team. We review every inquiry and do not publish unverified support hours.",
  channels: [
    {
      id: "email",
      title: "Email",
      description: siteConfig.supportEmail,
      href: `mailto:${siteConfig.supportEmail}`,
      external: true,
      actionLabel: "Compose email",
    },
    {
      id: "phone",
      title: "Phone",
      description: siteConfig.supportPhone,
      href: `tel:${siteConfig.supportPhoneTel}`,
      external: true,
      actionLabel: "Call now",
    },
    {
      id: "faq",
      title: "Browse FAQ",
      description: "Quick answers on pricing status, industries, hardware, and forms.",
      href: "/faq",
      external: false,
      actionLabel: "View FAQ",
    },
  ],
} as const;
