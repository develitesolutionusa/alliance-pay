import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureIcon, type IconName } from "@/components/icons/FeatureIcon";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  variant?: "card" | "row";
  className?: string;
};

export function FeatureCard({
  title,
  description,
  href,
  icon,
  variant = "card",
  className,
}: FeatureCardProps) {
  if (variant === "row") {
    return (
      <Link
        href={href}
        className={cn(
          "card-interactive group flex gap-4 rounded-2xl p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          className,
        )}
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25">
          <FeatureIcon name={icon} className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <h3 className="text-gradient text-subhead-sm">{title}</h3>
          <span className="mt-1 block text-sm leading-6 text-muted">
            {description}
          </span>
          <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "card-surface card-interactive group flex h-full flex-col rounded-[var(--radius-card)] p-6 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-sm shadow-primary/25">
        <FeatureIcon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="text-gradient text-subhead">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
