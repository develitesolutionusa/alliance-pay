# Phase 1 — Foundation delivery

## 1. What was implemented

- **Design system:** AlliancePay light-only tokens in `app/globals.css` (primary, surface, muted, borders, radii, shadows); Inter via `next/font`; reduced-motion base rules.
- **Page shell:** `SiteHeader` (desktop mega menus + keyboard/Escape), `MobileNav` (drawer, scroll lock), `SiteFooter`, root `app/layout.tsx` with AlliancePay metadata.
- **Shared components:** Container, SectionHeading, Primary/SecondaryButton, Hero, PageHero, FeatureCard, IndustryCard, BenefitCard, TrustStrip, PricingCard, PricingToggle, FAQAccordion, TestimonialCard (blocks unverified quotes), CTABanner, Breadcrumbs, LeadForm, FormField, ProductMockup, EmptyState, LoadingSkeleton, Logo, CookieConsent stub.
- **Data config:** `lib/navigation.ts`, `lib/features.ts`, `lib/industries.ts`, `lib/pricing.ts` (amounts unpublished), `lib/site.ts`, `lib/routes.ts`.
- **Routes (shells):** `/`, products, features, industries (+ dynamic slugs), pricing, about, resources, faq, contact, book-demo, get-started, login, privacy, terms, cookies, `not-found`, `loading`.
- **Homepage:** Section structure wired with foundation components (full visual polish remains Phase 2).

## 2. Functional vs pending

| Area | Status |
|------|--------|
| Navigation / footer links | Functional to real routes |
| Pricing amounts / annual toggle | Visual structure only — amounts `null`, toggle hidden |
| Lead forms | Client validation works; email/CRM delivery pending (Phase 4) |
| Login / trial accounts | Honest pending states — no fake auth |
| Trust logos / testimonials | Omitted / blocked until verified |
| Industry photography | Placeholder surfaces |
| Legal copy | Explicit placeholders pending counsel |

## 3. Checks executed

- `npm run lint` — pass
- `npx tsx --test lib/pricing.test.ts` — pass
- `npm run build` — pass (39 routes)

## 4. Environment / integrations

- Optional: `NEXT_PUBLIC_SITE_URL` for canonical/metadata base (defaults to `https://alliancepay.com`).
- New deps: `lucide-react`, `tsx` (dev, unit test runner).
- No secrets required for Phase 1.

## 5. Open questions / next milestone

- Approve logo mark (current: “AP” wordmark), support email, social URLs.
- Provide verified pricing to unlock amounts + annual toggle.
- **Next:** Phase 2 — Homepage polish (mockup fidelity, original imagery, why-AlliancePay section).
