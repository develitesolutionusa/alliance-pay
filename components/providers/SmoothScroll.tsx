"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

type SmoothScrollProps = {
  children: ReactNode;
};

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Reset to top on route change; hash targets are handled by Lenis anchors.
    if (!window.location.hash) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <>
      {enabled ? (
        <ReactLenis
          root
          options={{
            autoRaf: true,
            duration: 1.1,
            smoothWheel: true,
            anchors: true,
            // Keep native touch scrolling on phones for better performance.
            syncTouch: false,
          }}
        >
          <LenisRouteSync />
        </ReactLenis>
      ) : null}
      {children}
    </>
  );
}
