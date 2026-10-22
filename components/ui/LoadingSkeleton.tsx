import { cn } from "@/lib/utils";

type LoadingSkeletonProps = {
  className?: string;
  lines?: number;
};

export function LoadingSkeleton({ className, lines = 3 }: LoadingSkeletonProps) {
  return (
    <div className={cn("animate-pulse space-y-3", className)} aria-hidden>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-4 rounded bg-border",
            index === lines - 1 ? "w-2/3" : "w-full",
          )}
        />
      ))}
      <span className="sr-only">Loading</span>
    </div>
  );
}
