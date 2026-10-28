import { cn } from "@/lib/utils";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
  className?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-dashed border-border bg-surface px-6 py-12 text-center",
        className,
      )}
    >
      <h2 className="text-subhead text-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{description}</p>
      {actionLabel && actionHref ? (
        <PrimaryButton href={actionHref} className="mt-6">
          {actionLabel}
        </PrimaryButton>
      ) : null}
    </div>
  );
}
