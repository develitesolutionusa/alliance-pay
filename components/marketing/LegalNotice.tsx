import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type LegalNoticeProps = {
  title: string;
  paragraphs: string[];
  className?: string;
};

export function LegalNotice({ title, paragraphs, className }: LegalNoticeProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-border bg-surface p-6 sm:p-8",
        className,
      )}
    >
      <h2 className="text-subhead text-foreground">{title}</h2>
      <div className="mt-4 space-y-4 text-body text-muted">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
        <p>
          Questions:{" "}
          <a className="font-semibold text-primary" href={`mailto:${siteConfig.supportEmail}`}>
            {siteConfig.supportEmail}
          </a>
        </p>
      </div>
    </div>
  );
}
