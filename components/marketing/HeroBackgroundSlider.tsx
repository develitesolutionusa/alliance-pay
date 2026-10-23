"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type HeroSlide = {
  src: string;
  alt: string;
  /** Tailwind object-position class for crop focus */
  objectPosition?: string;
};

type HeroBackgroundSliderProps = {
  slides: HeroSlide[];
  /** Auto-advance interval in ms; ignored when reduced motion is preferred */
  intervalMs?: number;
  className?: string;
};

export function HeroBackgroundSlider({
  slides,
  intervalMs = 5500,
  className,
}: HeroBackgroundSliderProps) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, reduceMotion, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={cn("absolute inset-0", className)}>
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, index) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-700 ease-out",
              slide.objectPosition ?? "object-center",
              index === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      {/* Visually decorative; expose current slide for screen readers */}
      <p className="sr-only" aria-live="polite">
        {slides[active]?.alt}
      </p>

      {slides.length > 1 ? (
        <div
          className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 lg:bottom-8 lg:left-auto lg:right-8 lg:translate-x-0"
          role="group"
          aria-label="Hero image slides"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show ${slide.alt}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition-[width,background-color] duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                index === active
                  ? "w-7 bg-primary"
                  : "bg-white/80 shadow-sm ring-1 ring-black/10 hover:bg-white",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
