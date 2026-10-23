export const CONSENT_STORAGE_KEY = "alliancepay-cookie-consent";
export const CONSENT_EVENT = "alliancepay:consent-change";

export type ConsentChoice = "accepted" | "rejected";

export type ConsentRecord = {
  choice: ConsentChoice;
  updatedAt: string;
};

export function analyticsConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim());
}

export function readConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.choice !== "accepted" && parsed.choice !== "rejected") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  const record: ConsentRecord = {
    choice,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: record }),
  );
  return record;
}

export function clearConsent() {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(
    new CustomEvent(CONSENT_EVENT, { detail: null }),
  );
}
