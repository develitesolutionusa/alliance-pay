"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={cn(
          "absolute inset-0 bg-foreground/40 transition-opacity",
          open ? "opacity-100" : "opacity-0",
        )}
        aria-label="Close menu"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
      />
      <div
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-white shadow-md transition-transform duration-200",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-foreground hover:bg-surface"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="text-base font-semibold text-foreground"
                >
                  {item.title}
                </Link>
                {item.children ? (
                  <ul className="mt-2 space-y-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href + child.title}>
                        <Link
                          href={child.href}
                          onClick={onClose}
                          className="block py-1.5 text-sm text-muted hover:text-foreground"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 border-t border-border p-4" onClick={onClose}>
          <SecondaryButton href="/login" className="w-full">
            Login
          </SecondaryButton>
          <PrimaryButton href="/get-started" className="w-full">
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
