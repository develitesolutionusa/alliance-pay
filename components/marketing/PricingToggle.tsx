"use client";

import type { BillingInterval } from "@/lib/pricing";
import { cn } from "@/lib/utils";

type PricingToggleProps = {
  value: BillingInterval;
  onChange: (value: BillingInterval) => void;
  className?: string;
};

export function PricingToggle({ value, onChange, className }: PricingToggleProps) {
  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border bg-surface p-1",
        className,
      )}
      role="group"
      aria-label="Billing interval"
    >
      {(["monthly", "annual"] as const).map((interval) => {
        const selected = value === interval;
        return (
          <button
            key={interval}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(interval)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors",
              selected
                ? "bg-white text-foreground shadow-sm"
                : "text-muted hover:text-foreground",
            )}
          >
            {interval}
          </button>
        );
      })}
    </div>
  );
}
