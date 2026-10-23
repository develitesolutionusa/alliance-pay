import { Store } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type CTABannerProps = {
  title?: string;
  description?: string;
  className?: string;
};

export function CTABanner({
  title = "Ready to transform your store?",
  description = "Checkout, inventory, and staff tools for independent retailers in one platform.",
  className,
}: CTABannerProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} aria-labelledby="cta-banner-title">
      <Container>
        <ScrollReveal variant="up" duration={750}>
          <div className="bg-banner-gradient relative flex flex-col gap-5 overflow-hidden rounded-[1.75rem] px-5 py-5 text-white shadow-md sm:px-7 sm:py-5 lg:flex-row lg:items-center lg:gap-8 lg:px-8">
            <div
              className="pointer-events-none absolute -left-8 top-0 h-28 w-28 rounded-full bg-white/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-6 bottom-0 h-24 w-24 rounded-full bg-[#8ec2ff]/30 blur-2xl"
              aria-hidden
            />
            <div className="relative flex min-w-0 flex-1 items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                <Store className="h-6 w-6" aria-hidden />
              </span>
              <div className="min-w-0">
                <h2 id="cta-banner-title" className="text-xl font-bold tracking-tight sm:text-2xl">
                  {title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-white/80 sm:text-[0.95rem]">
                  {description}
                </p>
              </div>
            </div>
            <div className="relative flex shrink-0 flex-col gap-3 sm:flex-row lg:justify-end">
              <PrimaryButton
                href="/get-started"
                className="bg-on-light focus-visible:!outline-white"
              >
                Start Free Trial
              </PrimaryButton>
              <SecondaryButton
                href="/book-demo"
                className="btn-on-brand focus-visible:!outline-white"
              >
                Book a Demo
              </SecondaryButton>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
