import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckListProps = {
  items: { title: string; description: string }[];
  className?: string;
};

export function CheckList({ items, className }: CheckListProps) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li
          key={item.title}
          className="flex gap-3 rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-sm"
        >
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
            <Check className="h-4 w-4" aria-hidden />
          </span>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
