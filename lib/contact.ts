import { siteConfig } from "@/lib/site";

export const contactContent = {
  eyebrow: "Contact",
  title: "Talk with AlliancePay",
  description:
    "Questions about POS, pricing, hardware, or a store rollout — send a message or email us directly. We review every inquiry.",
  formTitle: "Send a message",
  formDescription:
    "Tell us about your store and what you need. Submissions are validated and rate-limited; we follow up from our team inbox.",
  channelsTitle: "Reach us directly",
  channelsDescription:
    "Prefer email or a guided walkthrough? Use the options below — we do not publish unverified phone lines or support hours.",
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
      id: "demo",
      title: "Book a demo",
      description: "See AlliancePay in a walkthrough tailored to your retail lane.",
      href: "/book-demo",
      external: false,
      actionLabel: "Request demo",
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
  nextStepsTitle: "Other useful paths",
  nextSteps: [
    {
      title: "Pricing overview",
      description: "See plan structure while commercial amounts stay pending approval.",
      href: "/pricing",
    },
    {
      title: "Start a trial conversation",
      description: "Leave details for trial follow-up until self-serve auth is connected.",
      href: "/get-started",
    },
    {
      title: "About AlliancePay",
      description: "Mission and principles — no invented customer counts or logos.",
      href: "/about",
    },
  ],
  note: "Response times will be published with support policy. Until then, expect a human follow-up — not an automated claim of 24/7 coverage.",
} as const;
