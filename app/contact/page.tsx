import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Mail, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { CTABanner } from "@/components/marketing/CTABanner";
import { PageHero } from "@/components/marketing/PageHero";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent } from "@/lib/contact";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the AlliancePay team about POS, demos, pricing, or store rollout questions.",
};

const channelIcons = {
  email: Mail,
  phone: Phone,
  faq: HelpCircle,
} as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        align="center"
        eyebrow={contactContent.eyebrow}
        title={contactContent.title}
        description={contactContent.description}
        secondaryCta={{ label: "View FAQ", href: "/faq" }}
      />

      <section className="py-14 sm:py-16" aria-labelledby="contact-form-heading">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <ScrollReveal variant="up">
            <SectionHeading
              id="contact-form-heading"
              eyebrow="Inquiry"
              title={contactContent.channelsTitle}
              description={contactContent.channelsDescription}
            />

            <ul className="mt-8 space-y-3">
              {contactContent.channels.map((channel) => {
                const Icon = channelIcons[channel.id];
                const className = cn(
                  "group flex gap-4 rounded-[var(--radius-card)] border border-border bg-white p-4 shadow-sm transition",
                  "hover:border-primary/30 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                );
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-semibold text-foreground">
                          {channel.title}
                        </span>
                        <ArrowRight
                          className="h-4 w-4 shrink-0 text-muted transition group-hover:translate-x-0.5 group-hover:text-primary"
                          aria-hidden
                        />
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-muted">
                        {channel.description}
                      </span>
                      <span className="mt-2 inline-block text-sm font-semibold text-primary">
                        {channel.actionLabel}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={channel.id}>
                    {channel.external ? (
                      <a href={channel.href} className={className}>
                        {body}
                      </a>
                    ) : (
                      <Link href={channel.href} className={className}>
                        {body}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>

          <ScrollReveal variant="up" delay={120}>
            <div className="rounded-[1.25rem] border border-border bg-gradient-to-b from-white to-[#f4f8ff] p-6 shadow-sm sm:p-8">
              <h2 className="text-title text-foreground">
                {contactContent.formTitle}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                {contactContent.formDescription}
              </p>
              <LeadForm
                intent="contact"
                submitLabel="Send inquiry"
                className="mt-6"
              />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <CTABanner
        title="Prefer a live walkthrough?"
        description="Contact us for your store type — grocery, convenience, liquor, or specialty retail."
      />
    </>
  );
}
