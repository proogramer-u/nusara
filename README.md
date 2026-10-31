# NUSARA

Indonesian fashion landing page inspired by Palembang songket. Next.js App Router, strict TypeScript, Tailwind CSS v4, Lucide, next/font and next/image. No backend, accounts, payments, customer data storage or analytics.

## Local setup

Use Node.js 22.6+ or current LTS and pnpm 10.29.3.

```sh
pnpm install --frozen-lockfile
cp .env.example .env.local
pnpm dev
```

Open the Local URL printed by Next.js. Checks:

```sh
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm start
```

On a fresh checkout, run `pnpm dev` or `pnpm build` before typechecking so Next.js generates route types. Tests use built-in Node TypeScript stripping.

## Editing

- `src/config/site.ts`: navigation, brand copy, optional social/contact details and pending-order text. Blank social/contact values stay hidden.
- `src/data/products.ts`: categories, descriptions, image paths and category form links. Each product explicitly uses `price: null`, `variants: []`, `colors: []`, and `specifications: []` while awaiting client information. A null price displays “Harga segera hadir”; empty detail lists stay hidden. Replace these with a confirmed price in rupiah, variant/color names, or `{ label, value }` specification entries. The existing product card renders these fields without a redesign.
- `src/data/faq.ts`: answers and draft flags. Draft operational answers are visibly marked as awaiting brand confirmation.
- `src/components/sections/`: individual sections.
- `src/app/globals.css`: palette, type and responsive rules.
- `src/app/layout.tsx`: Indonesian metadata and social preview.

## Navigation, motion and footer

- `src/components/layout/Navbar.tsx` uses a native full-screen dialog on mobile, with focus containment, Escape dismissal, background scroll locking and automatic dismissal at the desktop breakpoint.
- `src/components/ui/Accordion.tsx` animates FAQ expansion/collapse with CSS grid rows. Questions remain native keyboard-operable buttons with explicit expanded state; closed answers are inert.
- `src/components/ui/BrandIntro.tsx` is a decorative 1.25-second opening screen, dismissed entirely by CSS even without JavaScript. It does not wait for remote data or claim to measure loading progress. Reduced-motion visitors skip it.
- Footer copy and link groups are editable in `footerContent` in `src/config/site.ts`. The reference-inspired composition uses NUSARA's plum palette and existing motif artwork; unconfigured social/contact links stay hidden.
- All new transitions honor `prefers-reduced-motion`.
