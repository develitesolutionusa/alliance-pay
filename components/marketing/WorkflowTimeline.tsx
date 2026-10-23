"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type WorkflowTimelineProps = {
  steps: { title: string; description: string }[];
  className?: string;
  onActiveChange?: (index: number) => void;
  /**
   * `scroll` — progress follows viewport (default, other product pages).
   * `autoplay` — guided step cycle when the timeline is in view (Back Office).
   */
  mode?: "scroll" | "autoplay";
};

const RAIL_CLASS = "w-4";
const AUTOPLAY_MS = 2200;

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function WorkflowTimeline({
  steps,
  className,
  onActiveChange,
  mode = "scroll",
}: WorkflowTimelineProps) {
  const rootRef = useRef<HTMLOListElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeRef = useRef(0);
  const onActiveChangeRef = useRef(onActiveChange);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );

  const lastIndex = Math.max(steps.length - 1, 0);
  const displayIndex = reducedMotion ? lastIndex : activeIndex;
  const displayProgress = reducedMotion
    ? 1
    : mode === "autoplay"
      ? steps.length <= 1
        ? 1
        : activeIndex / lastIndex
      : progress;

  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  useEffect(() => {
    if (mode !== "autoplay" || reducedMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= 0.35);
      },
      { threshold: [0.2, 0.35, 0.5] },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [mode, reducedMotion]);

  useEffect(() => {
    if (mode !== "autoplay" || reducedMotion) return;
    if (!inView || paused || steps.length === 0) return;

    const id = window.setInterval(() => {
      const next = (activeRef.current + 1) % steps.length;
      activeRef.current = next;
      setActiveIndex(next);
      onActiveChangeRef.current?.(next);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [mode, reducedMotion, inView, paused, steps.length]);

  useEffect(() => {
    if (reducedMotion) {
      onActiveChangeRef.current?.(lastIndex);
    }
  }, [reducedMotion, lastIndex]);

  useEffect(() => {
    if (mode !== "scroll" || reducedMotion) return;

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

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    queueMicrotask(update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [mode, steps.length, reducedMotion, lastIndex]);

  return (
    <ol
      ref={rootRef}
      className={cn("relative", className)}
      onMouseEnter={mode === "autoplay" ? () => setPaused(true) : undefined}
      onMouseLeave={mode === "autoplay" ? () => setPaused(false) : undefined}
      onFocusCapture={mode === "autoplay" ? () => setPaused(true) : undefined}
      onBlurCapture={
        mode === "autoplay"
          ? (event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setPaused(false);
              }
            }
          : undefined
      }
    >
      <div
        className={cn(
          "pointer-events-none absolute top-3.5 bottom-3.5 left-0",
          RAIL_CLASS,
        )}
        aria-hidden
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 overflow-hidden bg-border">
          <div
            className={cn(
              "w-full bg-primary ease-out",
              mode === "autoplay"
                ? "transition-[height] duration-700"
                : "transition-[height] duration-150",
            )}
            style={{ height: `${displayProgress * 100}%` }}
          />
        </div>
      </div>

      {steps.map((step, index) => {
        const isActive = index <= displayIndex;
        const isCurrent = index === displayIndex;
        const isUpcoming = index > displayIndex;
        return (
          <li
            key={step.title}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className={cn(
              "relative grid grid-cols-[1rem_minmax(0,1fr)] gap-5 pb-12 last:pb-0 sm:gap-7 sm:pb-16",
              "transition-[opacity,transform] duration-500 ease-out",
              isActive ? "opacity-100" : "opacity-40",
              mode === "autoplay" && isCurrent && "translate-x-0",
              mode === "autoplay" && isUpcoming && "translate-x-1",
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
                  "block h-2.5 w-2.5 shrink-0 rounded-full border-2 transition-all duration-500",
                  isCurrent || isActive
                    ? "border-primary bg-primary"
                    : "border-border bg-background",
                  isCurrent && "scale-110 ring-4 ring-primary/20",
                  mode === "autoplay" &&
                    isCurrent &&
                    !reducedMotion &&
                    "motion-safe:animate-[workflow-pulse_2.2s_ease-in-out_infinite]",
                )}
              />
            </span>
            <div
              className={cn(
                "transition-[opacity,transform] duration-500 ease-out",
                mode === "autoplay" && isCurrent && "translate-y-0 opacity-100",
                mode === "autoplay" && !isCurrent && isUpcoming && "opacity-40",
              )}
            >
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
