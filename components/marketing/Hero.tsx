import { Check } from "lucide-react";
import {
  HeroBackgroundSlider,
  type HeroSlide,
} from "@/components/marketing/HeroBackgroundSlider";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { benefitIndicators } from "@/lib/site";
import { cn } from "@/lib/utils";

const heroSlides: HeroSlide[] = [
  {
    src: "/images/home/Modern AlliancePay POS Checkout Scene.png",
    alt: "AlliancePay checkout on a grocery counter, with a receipt printer, barcode scanner, and a screen listing fresh produce, milk, bread, and eggs.",
    objectPosition: "object-[78%_55%]",
  },
  {
    src: "/images/home/Modern Restaurant POS Station.png",
    alt: "AlliancePay restaurant POS station on a marble counter with menu items on screen, receipt printer, and barcode scanner in a bright dining room.",
    objectPosition: "object-[80%_52%]",
  },
  {
    src: "/images/home/Modern Grocery Checkout with AlliancePay.png",
    alt: "AlliancePay grocery checkout with a basket of produce, receipt printer, barcode scanner, and product grid on the terminal.",
    objectPosition: "object-[82%_50%]",
  },
];

type HeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  className?: string;
};

export function Hero({
  eyebrow = "Modern POS for Modern Retail",
  title,
  description,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative isolate min-h-[40rem] overflow-hidden border-b border-border bg-white sm:min-h-[44rem] lg:min-h-[40rem]",
        className,
      )}
    >
      <HeroBackgroundSlider slides={heroSlides} />
      {/* Soft wash over the full frame so busy slides never punch through type */}
      <div
        className="pointer-events-none absolute inset-0 bg-white/25 lg:bg-white/10"
        aria-hidden
      />
      {/* Strong left/top scrim — keeps heading, CTAs, and benefits readable */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_42%,rgb(255_255_255_/_0.92)_58%,rgb(255_255_255_/_0.55)_72%,rgb(255_255_255_/_0.18)_86%,transparent_100%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_22%,rgb(255_255_255_/_0.97)_34%,rgb(255_255_255_/_0.78)_44%,rgb(255_255_255_/_0.35)_54%,rgb(255_255_255_/_0.08)_64%,transparent_72%)]"
        aria-hidden
      />
      <p className="pointer-events-none absolute bottom-14 right-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm sm:right-8 lg:bottom-5 lg:hidden">
        Built for real stores
      </p>

      <Container className="relative z-10 flex min-h-[40rem] items-center py-16 sm:min-h-[44rem] lg:min-h-[40rem] lg:py-20">
        <div className="relative min-w-0 max-w-xl">
          <div
            className="pointer-events-none absolute -inset-x-4 -inset-y-6 rounded-3xl bg-white/70 blur-xl sm:-inset-x-6 sm:-inset-y-8 lg:bg-white/55"
            aria-hidden
          />
          <div className="relative">
            <ScrollReveal variant="up" delay={40}>
              <p className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-white/95 px-3 py-1 text-sm font-semibold shadow-sm">
                <span className="text-gradient-brand">{eyebrow}</span>
              </p>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={120}>
              <h1 className="text-gradient text-4xl font-bold tracking-tight drop-shadow-[0_1px_0_rgb(255_255_255_/_0.85)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {title}
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={200}>
              <p className="mt-5 max-w-[42ch] text-lg leading-8 text-foreground/75">
                {description}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="up" delay={280}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PrimaryButton href="/contact" className="px-6 py-3 text-base">
                  Start Free Trial
                </PrimaryButton>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="up" delay={360}>
              <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                {benefitIndicators.map((item) => (
                  <li
                    key={item.id}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                    title={item.note}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success">
                      <Check className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
