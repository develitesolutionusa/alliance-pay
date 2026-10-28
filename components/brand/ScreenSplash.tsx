"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BEATS = ["Checkout", "Inventory", "Your store"] as const;
const BEAT_MS = 760;
const LEAVE_MS = 520;

export function ScreenSplash() {
  const [beat, setBeat] = useState(0);
  const [phase, setPhase] = useState<"run" | "leave" | "done">("run");

  useEffect(() => {
    if (phase !== "run") return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: number[] = [];

    if (reduce) {
      setBeat(BEATS.length - 1);
      timers.push(window.setTimeout(() => setPhase("leave"), 180));
    } else {
      BEATS.forEach((_, index) => {
        if (index === 0) return;
        timers.push(window.setTimeout(() => setBeat(index), index * BEAT_MS));
      });
      timers.push(
        window.setTimeout(() => setPhase("leave"), BEATS.length * BEAT_MS + 160),
      );
    }

    const block = (event: Event) => event.preventDefault();
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      document.documentElement.style.overflow = previousOverflow;
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "leave") return;
    const timer = window.setTimeout(() => setPhase("done"), LEAVE_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  const line = BEATS[beat];

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80] flex items-center justify-center bg-white/40 backdrop-blur-2xl transition-opacity duration-500",
        phase === "leave" && "pointer-events-none opacity-0",
      )}
      role="status"
      aria-live="off"
      aria-label="Loading AlliancePay"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl motion-safe:animate-[splash-glow_2.4s_ease-in-out_infinite]"
        aria-hidden
      />
      <div className="relative flex flex-col items-center px-6">
        <Image
          src="/brand/alliancepay-logo.png"
          alt=""
          width={1400}
          height={443}
          priority
          className="motion-safe:animate-[splash-logo-in_0.7s_cubic-bezier(0.22,1,0.36,1)_both] h-auto w-[min(78vw,320px)]"
        />
        <div className="mt-7 flex h-10 flex-col items-center" aria-hidden>
          <span
            key={`rule-${line}`}
            className="block h-0.5 w-28 origin-left rounded-full bg-primary motion-safe:animate-[splash-rule_0.45s_cubic-bezier(0.22,1,0.36,1)_both]"
          />
          <p
            key={line}
            className="mt-3 text-sm font-semibold tracking-[0.22em] text-primary uppercase motion-safe:animate-[splash-beat_0.76s_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            {line}
          </p>
        </div>
      </div>
    </div>
  );
}
