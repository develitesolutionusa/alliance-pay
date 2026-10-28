import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      variant="up"
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-gradient-brand mb-3 text-eyebrow">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-gradient text-section",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-body text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  );
}
