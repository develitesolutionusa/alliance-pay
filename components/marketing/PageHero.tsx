import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  align = "left",
  className,
  children,
}: PageHeroProps) {
  const centered = align === "center";

  return (
    <section
      className={cn(
        "section-wash border-b border-border py-14 sm:py-20",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "max-w-3xl",
            centered && "mx-auto text-center",
          )}
        >
          {eyebrow ? (
            <ScrollReveal variant="up" delay={40}>
              <p className="text-gradient-brand mb-3 text-sm font-semibold tracking-wide">
                {eyebrow}
              </p>
            </ScrollReveal>
          ) : null}
          <ScrollReveal variant="up" delay={100}>
            <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl">
              {title}
            </h1>
          </ScrollReveal>
          {description ? (
            <ScrollReveal variant="up" delay={180}>
              <p
                className={cn(
                  "mt-5 text-lg leading-8 text-muted",
                  centered && "mx-auto max-w-2xl",
                )}
              >
                {description}
              </p>
            </ScrollReveal>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <ScrollReveal variant="up" delay={260}>
              <div
                className={cn(
                  "mt-8 flex flex-col gap-3 sm:flex-row",
                  centered && "sm:justify-center",
                )}
              >
                {primaryCta ? (
                  <PrimaryButton href={primaryCta.href}>
                    {primaryCta.label}
                  </PrimaryButton>
                ) : null}
                {secondaryCta ? (
                  <SecondaryButton href={secondaryCta.href}>
                    {secondaryCta.label}
                  </SecondaryButton>
                ) : null}
              </div>
            </ScrollReveal>
          )}
          {children ? (
            <ScrollReveal variant="up" delay={320} className="mt-8">
              {children}
            </ScrollReveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
