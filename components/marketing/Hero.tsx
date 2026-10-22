import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { benefitIndicators } from "@/lib/site";
import { cn } from "@/lib/utils";

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
      <Image
        src="/images/home/Modern%20AlliancePay%20POS%20Checkout%20Scene.png"
        alt="AlliancePay checkout on a grocery counter, with a receipt printer, barcode scanner, and a screen listing fresh produce, milk, bread, and eggs."
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_58%]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_36%,rgb(255_255_255_/_0.72)_54%,rgb(255_255_255_/_0.12)_74%,transparent_100%)] lg:bg-[linear-gradient(90deg,#ffffff_0%,rgb(255_255_255_/_0.92)_18%,rgb(255_255_255_/_0.55)_32%,rgb(255_255_255_/_0.12)_46%,transparent_58%)]"
        aria-hidden
      />
      <p className="absolute bottom-5 right-4 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm sm:right-8 lg:hidden">
        Built for real stores
      </p>

      <Container className="relative z-10 flex min-h-[40rem] items-center py-16 sm:min-h-[44rem] lg:min-h-[40rem] lg:py-20">
        <div className="min-w-0 max-w-xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-white/80 px-3 py-1 text-sm font-semibold">
            <span className="text-gradient-brand">{eyebrow}</span>
          </p>
          <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-[42ch] text-lg leading-8 text-muted">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/get-started" className="px-6 py-3 text-base">
              Start Free Trial
            </PrimaryButton>
            <SecondaryButton href="/book-demo" className="px-6 py-3 text-base">
              Book a Demo
            </SecondaryButton>
          </div>

          <ul className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
            {benefitIndicators.map((item) => (
              <li
                key={item.id}
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80"
                title={item.note}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10 text-success">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
