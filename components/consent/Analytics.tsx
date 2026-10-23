"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import {
  CONSENT_EVENT,
  analyticsConfigured,
  readConsent,
} from "@/lib/consent";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/**
 * Loads Google Analytics only after explicit consent and when a measurement ID is configured.
 */
export function Analytics() {
  const choice = useSyncExternalStore(
    subscribe,
    () => readConsent()?.choice ?? null,
    () => null,
  );

  if (!analyticsConfigured() || !measurementId) return null;
  if (choice !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="alliancepay-ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'update', {
            analytics_storage: 'granted'
          });
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
