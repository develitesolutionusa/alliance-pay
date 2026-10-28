"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileWasOpen = useRef(false);
  const menuButtonIds = useId();

  useEffect(() => {
    if (mobileWasOpen.current && !mobileOpen) {
      menuButtonRef.current?.focus();
    }
    mobileWasOpen.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <Container className="flex h-[4.5rem] items-center gap-4">
        <Logo priority />

        <nav
          ref={navRef}
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {mainNav.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const buttonId = `${menuButtonIds}-${item.title}`;
            const isOpen = openMenu === item.title;

            if (!hasChildren) {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-nav text-foreground/80 hover:bg-surface hover:text-foreground"
                >
                  {item.title}
                </Link>
              );
            }

            return (
              <div key={item.title} className="relative">
                <button
                  id={buttonId}
                  type="button"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-nav text-foreground/80 hover:bg-surface hover:text-foreground",
                    isOpen && "bg-surface text-foreground",
                  )}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setOpenMenu((current) =>
                      current === item.title ? null : item.title,
                    )
                  }
                  onMouseEnter={() => setOpenMenu(item.title)}
                >
                  {item.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                <div onMouseLeave={() => setOpenMenu(null)}>
                  <MegaMenu
                    items={item.children!}
                    open={isOpen}
                    labelledBy={buttonId}
                    onNavigate={() => setOpenMenu(null)}
                  />
                </div>
              </div>
            );
          })}
          <PrimaryButton href="/contact" className="ml-3">
            Get Started
          </PrimaryButton>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-foreground hover:bg-surface lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={mainNav}
      />
    </header>
  );
}
