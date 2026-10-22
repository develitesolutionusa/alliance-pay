import { FeatureIcon, type IconName } from "@/components/icons/FeatureIcon";
import { cn } from "@/lib/utils";

type BenefitCardProps = {
  title: string;
  description: string;
  icon: IconName;
  className?: string;
};

export function BenefitCard({
  title,
  description,
  icon,
  className,
}: BenefitCardProps) {
  return (
    <article
      className={cn(
        "card-gradient card-interactive rounded-[var(--radius-card)] p-6 shadow-sm",
        className,
      )}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <FeatureIcon name={icon} className="h-5 w-5" />
      </div>
      <h3 className="text-gradient text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
    </article>
  );
}
