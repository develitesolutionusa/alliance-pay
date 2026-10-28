import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
  className?: string;
  /** Must be false unless the quote is an approved real endorsement. */
  verified?: boolean;
};

export function TestimonialCard({
  quote,
  name,
  role,
  className,
  verified = false,
}: TestimonialCardProps) {
  if (!verified) {
    return (
      <aside
        className={cn(
          "rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-6 text-sm text-muted",
          className,
        )}
      >
        Customer testimonials will appear here once AlliancePay has approved
        endorsements. Fabricated reviews are not shown.
      </aside>
    );
  }

  return (
    <blockquote
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-white p-6 shadow-sm",
        className,
      )}
    >
      <p className="text-body text-foreground">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-4 text-sm">
        <cite className="not-italic font-semibold text-foreground">{name}</cite>
        <span className="text-muted"> · {role}</span>
      </footer>
    </blockquote>
  );
}
