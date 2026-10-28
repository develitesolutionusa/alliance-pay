"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavChild } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  items: NavChild[];
  open: boolean;
  labelledBy: string;
  onNavigate?: () => void;
};

export function MegaMenu({ items, open, labelledBy, onNavigate }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [alignEnd, setAlignEnd] = useState(false);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!open || !panel) return;
    const { left, right } = panel.getBoundingClientRect();
    const overflowsRight = right > window.innerWidth - 12;
    const overflowsLeft = left < 12;
    if (!alignEnd && overflowsRight) setAlignEnd(true);
    if (alignEnd && overflowsLeft && !overflowsRight) setAlignEnd(false);
  }, [open, alignEnd, items]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      role="region"
      aria-labelledby={labelledBy}
      className={cn(
        "absolute top-full z-50 mt-2 w-[min(36rem,calc(100vw-2rem))] rounded-[var(--radius-card)] border border-border bg-white p-3 shadow-md",
        alignEnd ? "right-0 left-auto" : "left-0",
      )}
    >
      <ul className="grid gap-1 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href + item.title}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "block rounded-xl px-3 py-3 transition-colors hover:bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              )}
            >
              <span className="block text-sm font-semibold text-foreground">
                {item.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-muted">
                {item.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
