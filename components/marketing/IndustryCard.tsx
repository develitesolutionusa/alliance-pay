"use client";

import { useId, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type IndustryCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageHint: string;
  className?: string;
  /** `flip` — 3D cover ↔ detail (landing Industries). */
  variant?: "default" | "flip";
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeFinePointer(onStoreChange: () => void) {
  const media = window.matchMedia("(hover: hover) and (pointer: fine)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

function getFinePointer() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function IndustryCard({
  title,
  description,
  href,
  imageSrc,
  imageHint,
  className,
  variant = "default",
}: IndustryCardProps) {
  const titleId = useId();
  const [flipped, setFlipped] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const finePointer = useSyncExternalStore(
    subscribeFinePointer,
    getFinePointer,
    () => true,
  );

  if (variant !== "flip" || reducedMotion) {
    return (
      <DefaultIndustryCard
        title={title}
        description={description}
        href={href}
        imageSrc={imageSrc}
        imageHint={imageHint}
        className={className}
      />
    );
  }

  const showBack = finePointer ? undefined : flipped;

  return (
    <article
      className={cn(
        "industry-flip group relative h-full min-h-[22rem] [perspective:1400px]",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full min-h-[22rem] rounded-[var(--radius-card)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]",
          finePointer &&
            "group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]",
          !finePointer && flipped && "[transform:rotateY(180deg)]",
        )}
      >
        {/* Cover face */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden rounded-[var(--radius-card)] border border-border shadow-md [backface-visibility:hidden]",
            "bg-foreground",
          )}
        >
          <Image
            src={imageSrc}
            alt={imageHint}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/95 via-[#0a1628]/35 to-transparent"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/70">
              Industry
            </p>
            <h3
              id={titleId}
              className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl"
            >
              {title}
            </h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href={href}
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-button)] bg-white px-3.5 py-2 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                View industry
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {!finePointer ? (
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-button)] bg-white/15 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-expanded={flipped}
                  aria-controls={`${titleId}-back`}
                  onClick={() => setFlipped(true)}
                >
                  Flip card
                </button>
              ) : (
                <span className="text-sm text-white/70">Hover to flip</span>
              )}
            </div>
          </div>
        </div>

        {/* Detail face */}
        <div
          id={`${titleId}-back`}
          className={cn(
            "absolute inset-0 flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border p-5 shadow-md sm:p-6",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "bg-[linear-gradient(160deg,#0b4dce_0%,#1263f1_42%,#071c62_100%)]",
          )}
          aria-hidden={finePointer ? undefined : !showBack}
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/70">
            Built for
          </p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {title}
          </h3>
          <p className="mt-4 flex-1 text-sm leading-6 text-white/85">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 rounded-[var(--radius-button)] bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm transition hover:bg-primary-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Learn more
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {!finePointer ? (
              <button
                type="button"
                className="text-sm font-semibold text-white/80 underline-offset-2 hover:text-white hover:underline"
                onClick={() => setFlipped(false)}
              >
                Flip back
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function DefaultIndustryCard({
  title,
  description,
  href,
  imageSrc,
  imageHint,
  className,
}: Omit<IndustryCardProps, "variant">) {
  return (
    <article
      className={cn(
        "card-interactive group h-full rounded-[var(--radius-card)] shadow-sm",
        className,
      )}
    >
      <div className="card-gradient flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] transition-[background] duration-200">
        <div className="relative h-40 overflow-hidden sm:h-44">
          <Image
            src={imageSrc}
            alt={imageHint}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-gradient text-lg font-semibold">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-6 text-muted">{description}</p>
          <Link
            href={href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-hover"
          >
            Learn more
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
