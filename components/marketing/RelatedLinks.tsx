import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { RelatedLink } from "@/lib/content-types";
import { cn } from "@/lib/utils";

type RelatedLinksProps = {
  items: RelatedLink[];
  className?: string;
};

export function RelatedLinks({ items, className }: RelatedLinksProps) {
  if (items.length === 0) return null;

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="card-surface card-interactive group flex flex-col rounded-[var(--radius-card)] p-5 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <h3 className="text-subhead-sm text-foreground">{item.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">
            {item.description}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Explore
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
