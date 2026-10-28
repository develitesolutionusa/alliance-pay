"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useLenis } from "lenis/react";
import { ChevronDown, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { NavItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function subscribeToClient() {
  return () => {};
}

/** True only after hydration, so the menu can portal to document.body. */
function useIsClient() {
  return useSyncExternalStore(subscribeToClient, () => true, () => false);
}

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  const lenis = useLenis();
  const mounted = useIsClient();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (!open) setOpenSection(null);
  }, [open]);

  useEffect(() => {
    if (open) {
      setInteractive(true);
      return;
    }
    const timer = window.setTimeout(() => setInteractive(false), 220);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenis?.stop();
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      lenis?.start();
    };
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[60] h-dvh overflow-hidden lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
      inert={!interactive}
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
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-foreground hover:bg-surface"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-4 py-4" data-lenis-prevent>
          <ul className="space-y-1">
            {items.map((item) => {
              const sectionId = `${menuId}-${item.title}`;
              const expanded = openSection === item.title;

              if (!item.children?.length) {
                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="block rounded-lg px-2 py-3 text-base font-semibold text-foreground hover:bg-surface"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={item.title}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="min-w-0 flex-1 rounded-lg px-2 py-3 text-base font-semibold text-foreground hover:bg-surface"
                    >
                      {item.title}
                    </Link>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-surface"
                      aria-expanded={expanded}
                      aria-controls={sectionId}
                      onClick={() =>
                        setOpenSection((current) =>
                          current === item.title ? null : item.title,
                        )
                      }
                    >
                      <span className="sr-only">
                        {expanded ? `Hide ${item.title}` : `Show ${item.title}`}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 transition-transform",
                          expanded && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                  </div>
                  {expanded ? (
                    <ul
                      id={sectionId}
                      className="mb-2 space-y-1 border-l border-border pl-3"
                    >
                      {item.children.map((child) => (
                        <li key={child.href + child.title}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block rounded-lg px-3 py-2.5 hover:bg-surface"
                          >
                            <span className="block text-sm font-semibold text-foreground">
                              {child.title}
                            </span>
                            <span className="mt-0.5 block text-xs leading-5 text-muted">
                              {child.description}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className="border-t border-border p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
          onClick={onClose}
        >
          <PrimaryButton href="/contact" className="w-full">
            Get Started
          </PrimaryButton>
        </div>
      </div>
    </div>,
    document.body,
  );
}
