"use client";

import { useCallback, useSyncExternalStore } from "react";
import Link from "next/link";
import {
  CONSENT_EVENT,
  analyticsConfigured,
  readConsent,
  writeConsent,
} from "@/lib/consent";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

/**
 * Consent banner for nonessential analytics. Hidden until a measurement ID is configured.
 */
export function CookieConsent() {
  const shouldShow = useSyncExternalStore(
    subscribe,
    () => analyticsConfigured() && readConsent() === null,
    () => false,
  );

  const accept = useCallback(() => {
    writeConsent("accepted");
  }, []);

  const reject = useCallback(() => {
    writeConsent("rejected");
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-4 shadow-[0_-8px_24px_rgb(16_27_53_/_0.08)] backdrop-blur-sm sm:p-5"
    >
      <div className="mx-auto flex max-w-[var(--container)] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <h2
            id="cookie-consent-title"
            className="text-sm font-semibold text-foreground"
          >
            Analytics cookies
          </h2>
          <p
            id="cookie-consent-desc"
            className="mt-1 text-sm leading-6 text-muted"
          >
            AlliancePay uses optional analytics only with your consent. Essential
            site function does not require this. See our{" "}
            <Link
              href="/cookies"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              cookie notice
            </Link>{" "}
            for details.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-2">
          <SecondaryButton type="button" onClick={reject}>
            Reject
          </SecondaryButton>
          <PrimaryButton type="button" onClick={accept}>
            Accept analytics
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
