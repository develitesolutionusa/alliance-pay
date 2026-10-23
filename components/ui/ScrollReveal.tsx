"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  variant?: RevealVariant;
  /** Stagger delay in milliseconds */
  delay?: number;
  /** Animation duration in milliseconds */
  duration?: number;
  /** Root margin for when the reveal triggers */
  rootMargin?: string;
  /** Reveal once (default) or every time it enters the viewport */
  once?: boolean;
  style?: CSSProperties;
};

const variantClass: Record<RevealVariant, string> = {
  up: "sr-up",
  fade: "sr-fade",
  left: "sr-left",
  right: "sr-right",
  scale: "sr-scale",
};

export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  variant = "up",
  delay = 0,
  duration = 700,
  rootMargin = "0px 0px -8% 0px",
  once = true,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-ready", "is-visible");
      return;
    }

    node.classList.add("is-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          if (once) observer.unobserve(node);
        } else if (!once) {
          node.classList.remove("is-visible");
        }
      },
      { threshold: 0.12, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return (
    <Tag
      ref={ref as RefObject<HTMLDivElement & HTMLLIElement>}
      className={cn("scroll-reveal", variantClass[variant], className)}
      style={
        {
          ...style,
          "--sr-delay": `${delay}ms`,
          "--sr-duration": `${duration}ms`,
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
