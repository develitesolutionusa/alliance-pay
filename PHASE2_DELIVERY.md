# Phase 2 — Homepage delivery

## 1. What was implemented

Homepage rebuilt to the mockup's layout, with **AlliancePay** branding:

1. Sticky nav
2. Split hero: eyebrow, blue-emphasized headline, trial and demo CTAs, benefit checks, counter photo with a "Built for real stores" badge
3. Capability wordmark strip (no unverified retailer logos)
4. Four value cards, without an extra section title
5. Split features block: copy and Explore all features on the left, six compact tiles on the right
6. Four photography industry cards
7. Why AlliancePay: copy, benefit list, circular operator portrait
8. Blue gradient CTA banner
9. Footer

## 2. Functional vs visual-only

| Area | Status |
|------|--------|
| All CTAs | Route to real pages |
| Hero, industries, portrait | Original generated photography |
| Trust row | Capability names, not customer logos |
| Support card | "Product Support", not an unverified 24/7 claim |
| Trial line | Free trial available, flexible plans, straightforward setup |
| Search icon | Omitted. A non-working search control is not included |

## 3. Checks

- `npx eslint` on the homepage files
- Desktop and mobile layout review in the browser
- Start Free Trial navigates to `/get-started`
- Grocery industry route loads

## 4. Env / integrations

- None new. Optional `NEXT_PUBLIC_SITE_URL` unchanged.

## 5. Next

- **Phase 3 — Inner pages:** deepen products, features, industries, about, and resources with the same photo treatment where it helps.
