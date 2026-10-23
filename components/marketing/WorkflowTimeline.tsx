"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type WorkflowTimelineProps = {
  steps: { title: string; description: string }[];
  className?: string;
  onActiveChange?: (index: number) => void;
};

const RAIL_CLASS = "w-4";

export function WorkflowTimeline({
  steps,
  className,
  onActiveChange,
}: WorkflowTimelineProps) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeRef = useRef(0);
  const onActiveChangeRef = useRef(onActiveChange);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const last = steps.length - 1;
      activeRef.current = last;
      setActiveIndex(last);
      setProgress(1);
      onActiveChangeRef.current?.(last);
      return;
    }

    const update = () => {
      const items = itemRefs.current.filter(Boolean) as HTMLLIElement[];
      if (items.length === 0) return;

      const viewportCenter = window.innerHeight * 0.42;
      let closest = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const markerY = rect.top + 14;
        const distance = Math.abs(markerY - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      if (closest !== activeRef.current) {
        activeRef.current = closest;
        setActiveIndex(closest);
        onActiveChangeRef.current?.(closest);
      }

      const first = items[0].getBoundingClientRect();
      const last = items[items.length - 1].getBoundingClientRect();
      const start = first.top + 14;
      const end = last.top + 14;
      const span = Math.max(end - start, 1);
      const raw = (viewportCenter - start) / span;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [steps.length]);

  return (
    <ol className={cn("relative", className)}>
      <div
        className={cn(
          "pointer-events-none absolute top-3.5 bottom-3.5 left-0",
          RAIL_CLASS,
        )}
        aria-hidden
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 overflow-hidden bg-border">
          <div
            className="w-full bg-primary transition-[height] duration-150 ease-out"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </div>

      {steps.map((step, index) => {
        const isActive = index <= activeIndex;
        const isCurrent = index === activeIndex;
        return (
          <li
            key={step.title}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn(
              "relative grid grid-cols-[1rem_minmax(0,1fr)] gap-5 pb-12 last:pb-0 sm:gap-7 sm:pb-16",
              "transition-opacity duration-300",
              isActive ? "opacity-100" : "opacity-50",
            )}
          >
            <span
              className={cn(
                "relative z-10 flex items-start justify-center pt-1.5",
                RAIL_CLASS,
              )}
              aria-hidden
            >
              <span
                className={cn(
                  "block h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-colors duration-300",
                  isCurrent || isActive
                    ? "border-primary bg-primary"
                    : "border-border bg-background",
                  isCurrent && "ring-4 ring-primary/15",
                )}
              />
            </span>
            <div>
              <p
                className={cn(
                  "text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300",
                  isActive ? "text-primary" : "text-muted",
                )}
              >
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-[1.65rem]">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-muted">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
