import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { whyAlliancePay } from "@/lib/home";
import { cn } from "@/lib/utils";

type WhyAlliancePayProps = {
  className?: string;
};

export function WhyAlliancePay({ className }: WhyAlliancePayProps) {
  return (
    <section className={cn("bg-white py-16 sm:py-20", className)}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)_minmax(220px,0.72fr)] lg:gap-8 xl:gap-12">
          <ScrollReveal variant="left">
            <p className="text-gradient-brand text-sm font-semibold">
              {whyAlliancePay.eyebrow}
            </p>
            <h2 className="text-gradient mt-3 text-section">
              {whyAlliancePay.title}
            </h2>
            <p className="mt-4 max-w-md text-body text-muted">
              {whyAlliancePay.description}
            </p>
            <Link
              href={whyAlliancePay.cta.href}
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
            >
              {whyAlliancePay.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </ScrollReveal>

          <ul className="space-y-5">
            {whyAlliancePay.points.map((point, index) => (
              <ScrollReveal
                key={point.title}
                as="li"
                variant="up"
                delay={index * 90}
                className="flex gap-3"
              >
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-foreground">{point.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ul>

          <ScrollReveal variant="scale" delay={120} className="relative mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-full border-[10px] border-white shadow-[0_18px_40px_-20px_rgb(16_27_53_/_0.45)]">
              <Image
                src="/images/home/owner.jpg"
                alt="Retail operator in an apron. Illustrative portrait, not a customer endorsement."
                fill
                className="object-cover object-top"
                sizes="320px"
              />
            </div>
            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-gradient px-4 py-2 text-xs font-semibold text-white">
              Built for real stores
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
