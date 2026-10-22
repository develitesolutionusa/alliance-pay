import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "section-wash border-b border-border py-14 sm:py-20",
        className,
      )}
    >
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-gradient-brand mb-3 text-sm font-semibold tracking-wide">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-gradient text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg leading-8 text-muted">{description}</p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
