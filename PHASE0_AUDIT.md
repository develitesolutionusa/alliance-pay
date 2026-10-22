# Phase 0 — Audit: AlliancePay

**Date:** 2026-10-22  
**Scope:** Marketing website (Phases 1–5). Authenticated POS (Phase 6) is out of scope until separately approved.

---

## 1. Repository snapshot

| Item | Finding |
|------|---------|
| Package manager | npm (`package-lock.json` present; `node_modules` installed) |
| Framework | **Next.js 16.4.2** App Router |
| UI | **React 19.3.0** / **React DOM 19.3.0** |
| Styling | **Tailwind CSS v4** via `@tailwindcss/turbopack` (no classic `tailwind.config`) |
| Language | TypeScript 5, `strict: true`, path alias `@/*` → `./*` |
| Lint | ESLint 9 + `eslint-config-next` (core-web-vitals + typescript) |
| Git | **No `.git` directory** — version control not initialized |
| Env files | None (`.env*` ignored by `.gitignore`) |
| CI / GitHub Actions | None |
| Vercel project link | No `.vercel`; Vercel MCP not authenticated in this session |
| Database / ORM / Auth | None (correct for marketing-first scope) |
| Tests | No unit, integration, or e2e harness |
| Custom components | None beyond create-next-app defaults |

### Source layout (today)

```
alliance-pay/
├── AGENTS.md
├── app/
│   ├── favicon.ico          # default Next favicon
│   ├── globals.css          # Tailwind import + dark-mode media query
│   ├── layout.tsx           # Geist fonts, placeholder metadata
│   └── page.tsx             # create-next-app starter page
├── public/                  # next.svg, vercel.svg, etc. (starter assets)
├── next.config.ts           # Turbopack CSS + experimental flags
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

### Quality check (executed)

- `npm run lint` — passed  
- `npm run build` — passed (Next.js 16.4.2 production build)

---

## 2. What exists vs. AGENTS.md requirements

### Present

- Next.js App Router + TypeScript + Tailwind — matches recommended stack
- Strict TypeScript
- Working lint and build scripts
- Product specification in `AGENTS.md`
- Visual reference mockup (structure only; rebrand as AlliancePay)

### Missing (marketing site)

| Area | Gap |
|------|-----|
| Branding | Still “Create Next App”; Geist fonts; dark-mode CSS; no AlliancePay tokens |
| Design system | No CSS variables for primary/surface/muted; no shared UI kit |
| Shell | No `SiteHeader`, mega menu, mobile nav, footer |
| Routes | Only `/`; all products/features/industries/pricing/company/legal routes absent |
| Content config | No data files for nav, features, industries, plans, FAQs |
| Forms | No demo/contact lead capture, validation, or delivery |
| SEO | No sitemap, robots, OG, structured data, per-route metadata |
| Assets | No licensed retail photography, logo, or product renders |
| A11y / motion | No reduced-motion policy; starter page uses dark: variants (spec is light-only) |
| Testing | No Vitest/Jest/Playwright (or equivalent) |
| Deploy | Target assumed Vercel; not linked or documented |
| Git | Repo not initialized |

### Intentionally deferred (Phase 6)

- PostgreSQL / Prisma or Drizzle  
- Auth provider, RBAC, MFA  
- POS checkout, inventory, payments, hardware SDKs  
- Tenant isolation and PCI scope work  

---

## 3. Design / content constraints from mockup + AGENTS.md

**Use from mockup (structure & hierarchy only):**

1. Sticky nav → hero (split copy + POS visual) → benefit chips → trust strip → 4 value cards → 6 feature tiles → 4 industry cards → why/partner section → blue CTA banner → rich footer  
2. Inner patterns: features grid, industries photography, 3-tier pricing cards, about/mission layout  

**Do not ship from mockup without approval:**

- OctoPOS name, octopus logo, or copy  
- Fake retailer logos (Circle K, Walmart, etc.)  
- Fabricated prices ($39 / $99 / $249) or “Most Popular” unless justified by real config  
- Unverified claims (“Trusted by Thousands”, “10,000+ Stores”, “99.9% Uptime”, “24/7 Support”)  
- Trial length / “no contract” badges until commercial terms are confirmed  

**Design tokens (suggested; map into Tailwind `@theme`):**

- `--background: #FFFFFF`, `--surface: #F7FAFF`, `--text: #101B35`, `--muted: #64748B`  
- `--primary: #1263F1`, `--primary-hover: #0B4DCE`, `--border: #E3EAF4`, `--success: #16835D`  
- Light theme only by default; remove starter dark-mode preference styling  

---

## 4. Dependencies to add (Phase 1–4)

| Dependency | Purpose | Phase |
|------------|---------|-------|
| `lucide-react` | Consistent icons | 1 |
| `zod` (+ optionally `react-hook-form`, `@hookform/resolvers`) | Form validation | 4 |
| Email/CRM SDK (e.g. Resend) **or** form endpoint | Demo/contact delivery | 4 |
| Rate-limit / anti-spam (e.g. Upstash Redis or Turnstile) | Abuse protection | 4 |
| Vitest (or Jest) | Unit tests for pricing/config/validation | 5 |
| Playwright | E2E nav, mobile menu, forms, pricing toggle | 5 |

Keep stack lean: no second CSS framework, no database for the marketing site unless forms require one.

---

## 5. Credentials & external services (needed later)

| Service | Status | Notes |
|---------|--------|-------|
| Hosting (Vercel recommended) | Not linked | Auth Vercel MCP / CLI when ready to deploy |
| Domain / DNS | Unknown | Needed for production SEO/canonicals |
| Demo/contact email or CRM | Not configured | Required before claiming forms “work” |
| Analytics (optional) | Not configured | Gate behind cookie consent if required |
| Image CDN / asset host | Local `public/` only | Prefer `next/image` + licensed originals |
| Auth / payments / POS vendors | N/A until Phase 6 | |

**No secrets exist in the repo today.** Do not commit `.env` files.

---

## 6. Approved business facts

**Confirmed by project brief:**

- Brand name: **AlliancePay**  
- Category: retail POS / store-management platform  
- Theme: premium light SaaS  
- Target industries: grocery, convenience, liquor, smoke shops  
- Primary visual reference: supplied mockup (layout inspiration only)  

**Not yet approved (block truthful marketing copy until provided):**

- Legal entity name, address, support email/phone  
- Pricing plans, amounts, billing cadence, setup fees, taxes  
- Trial duration, contract terms, SLA/uptime, support hours  
- Real customers, logos, testimonials, store counts  
- Confirmed integrations and payment methods  
- Hardware compatibility list  
- Operating markets / regulatory disclaimers  
- Privacy/terms counsel-reviewed text  

Until approved, keep claims configurable and conservative (or omit).

---

## 7. Assumptions

1. Preserve the current Next.js 16 + React 19 + Tailwind 4 stack; do not re-bootstrap.  
2. Marketing site ships before any POS backend.  
3. Deployment target is Vercel unless the team specifies otherwise.  
4. Mockup prices and partner logos are **illustrative only** and will not be hardcoded as product truth.  
5. Forms may start as validated lead capture with a pending delivery backend if CRM/email is not ready—must be labeled honestly.  
6. Git initialization and remote hosting are team decisions (not done in this audit).  

---

## 8. Recommended implementation plan

| Phase | Focus | Exit criteria |
|-------|--------|----------------|
| **1 — Foundation** | Tokens, typography (Inter or approved sans), layout shell, header/footer, shared components, light-only CSS | Design system usable; no dead nav links to unbuilt pages (stub or hide) |
| **2 — Homepage** | Recreate mockup section order with AlliancePay identity and original assets | `/` matches hierarchy; CTAs route to real or clearly pending flows |
| **3 — Inner pages** | Products, features, industries, pricing, about, resources, FAQ, legal templates | All IA routes exist; content from config; no fabricated claims |
| **4 — Conversion** | `/book-demo`, `/contact`, `/get-started`; validation, rate limit, delivery | Submissions succeed end-to-end or honest pending state |
| **5 — Polish** | SEO, a11y, performance, tests, deploy, monitoring | Definition-of-done checklist green |
| **6 — POS** | Separate scope approval only | N/A until approved |

**Immediate next step after audit approval:** Phase 1 — Foundation.

---

## 9. Risks & open questions

1. **No git remote** — collaboration and rollback risk until initialized.  
2. **Unapproved commercial facts** — blocks honest pricing, trust strip, and legal pages.  
3. **Asset gap** — need AlliancePay logo + licensed retail/POS imagery before launch-quality homepage.  
4. **Form delivery** — choose email (Resend) vs CRM before Phase 4.  
5. **Dark-mode starter CSS** — conflicts with light-only brand; remove early in Phase 1.  
6. **Next 16 experimental flags** (`agentFeedback`, `cacheComponents`, `partialPrefetching`) — keep unless they cause build issues; revisit if unstable.  

### Questions for stakeholders

1. Approved company facts for About, contact, and legal?  
2. Real pricing config (or “Contact us” only until priced)?  
3. Preferred form delivery (email vs CRM)?  
4. Initialize git + GitHub/Vercel now?  
5. Logo / brand kit available, or generate a temporary wordmark?  

---

## 10. Phase 0 delivery summary

1. **Implemented:** Audit only; no product code changes.  
2. **Functional vs visual:** Starter Next app builds; AlliancePay UI not started.  
3. **Checks:** `lint` ✅, `build` ✅.  
4. **Env / integrations:** None required yet; Vercel/email/CRM pending.  
5. **Next milestone:** Phase 1 — Foundation (tokens, shell, shared components).  
)
