# AlliancePay

Premium light-theme retail POS marketing site for **AlliancePay**.

## Stack

- Next.js App Router (16) · React 19 · TypeScript · Tailwind CSS 4
- Lucide icons · data-driven nav / features / industries / pricing config

## Scripts

```bash
npm run dev      # local development
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint
npm run test:unit
```

## Project docs

- `AGENTS.md` — product & agent specification
- `PHASE0_AUDIT.md` — repository audit
- `PHASE1_DELIVERY.md` — foundation milestone notes
- `PHASE2_DELIVERY.md` — homepage milestone notes
- `PHASE3_DELIVERY.md` — inner pages milestone notes
- `PHASE4_DELIVERY.md` — conversion flows (forms, consent)

## Environment

Copy `.env.example` to `.env.local`. Lead forms deliver via Resend and/or a webhook when those variables are set. Optional analytics (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) shows a consent banner and loads only after accept.

The site assistant calls Groq through the OpenAI SDK. Set `GROQ_API_KEY` (from the Groq console) on the server. `GROQ_MODEL` defaults to `openai/gpt-oss-120b`, which is on Groq's free plan. The key is never sent to the browser.

## Notes

Pricing amounts, partner logos, and legal commitments stay unpublished until approved. Merchant login / self-serve auth remain pending until a POS auth milestone.
