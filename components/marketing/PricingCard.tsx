import { Check, X } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import type { BillingInterval, PricingPlan } from "@/lib/pricing";
import { formatPlanPrice } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
  interval?: BillingInterval;
  className?: string;
};

export function PricingCard({
  plan,
  interval = "monthly",
  className,
}: PricingCardProps) {
  const price = formatPlanPrice(plan, interval);
  const showPeriod = plan.monthlyPriceCents !== null || plan.annualPriceCents !== null;

  return (
    <article
      className={cn(
        "card-gradient card-interactive relative flex h-full flex-col rounded-[var(--radius-card)] p-6 shadow-sm sm:p-8",
        plan.highlighted && "shadow-md ring-1 ring-primary/25",
        className,
      )}
    >
      {plan.highlighted ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
          Recommended
        </span>
      ) : null}
      <h3 className="text-gradient text-card">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted">{plan.description}</p>
      <div className="mt-6">
        <p className="text-gradient text-stat">
          {price}
          {showPeriod ? (
            <span className="text-base font-medium text-muted">
              /{interval === "annual" ? "yr" : "mo"}
            </span>
          ) : null}
        </p>
        {!showPeriod ? (
          <p className="mt-1 text-sm text-muted">Pricing available on request</p>
        ) : null}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
            )}
            <span className={feature.included ? "text-foreground" : "text-muted"}>
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {plan.highlighted ? (
          <PrimaryButton href={plan.ctaHref} className="w-full">
            {plan.ctaLabel}
          </PrimaryButton>
        ) : (
          <SecondaryButton href={plan.ctaHref} className="w-full">
            {plan.ctaLabel}
          </SecondaryButton>
        )}
      </div>
    </article>
  );
}
