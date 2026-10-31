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

## Activate orders

1. Obtain and manually verify the actual Google Form responder URL. Set `NUSARA_ORDER_FORM_URL` in `.env.local` or Vercel.
2. Optionally use Google Forms > Pre-fill form to create verified category links and set the category environment variables. Never guess entry IDs.
3. Rebuild/redeploy after changing environment variables; the page is statically generated.
4. Check each category opens the correct form in a new tab. A click is not evidence of order completion.

Only HTTPS `forms.gle/<id>` and `docs.google.com/forms/d/[e/]<id>/viewform` responder URLs pass structural validation. Existence and ownership must be checked manually. Invalid category links fall back to a valid base; missing links lead to the explicit pending-order section. No form is embedded and no personal data is collected by this application.

## Asset provenance and replacement

All visuals are local, derived from the supplied brand PDF and logo screenshot. They are concept references, not verified final merchandise photography. Keep visible concept labels until approved photography arrives.

- Hero and product cutouts: PDF page 5; unused collage space and labels cropped away.
- Motif and decorative border: PDF page 5.
- Folded scarf and concept packaging: PDF page 1.
- Logo: supplied screenshot, with original shapes and lettering preserved; dark pixels isolated from the cream background into a transparent raster. Obtain vector artwork for best fidelity.
- Favicon: first symbol from that supplied logo.
- Social preview: local composition using supplied logo and hero concept.

Replace assets in `public/images/` with approved WebP/AVIF files and update alt text and crops. Set product `imageStatus` to `approved` only after approval; also update hero/lookbook labels and `site.imageNotice`. Recheck mobile and desktop crops. Remove unused images as inventory settles.

## Client details still needed

- Verified order form and optional prefilled category URLs.
- Final product/lifestyle photos and vector logo.
- Verified prices, materials, dimensions, variants and availability if published.
- Payment and delivery policies and approved FAQ answers.
- Official social/contact details if wanted.
- Production domain: set `NUSARA_SITE_URL` (for example your real HTTPS origin) for absolute social metadata. Vercel automatically supplies its production URL; local development falls back to localhost. Add a canonical URL/sitemap once the domain is confirmed.
- Confirmation of final packaging and QR storytelling implementation. The page describes QR storytelling as a concept.

Survey statistics, university/group details, fake reviews, discounts and inventory claims are excluded.

## Vercel deployment

Import the repo with this directory as project root (`nusara` if importing its parent). Select Next.js, install with `pnpm install --frozen-lockfile`, build with `pnpm build`, and use the default output directory. Configure verified form environment variables, then deploy. Google Fonts download at build time and are self-hosted by Next.js, so the build needs network access. Blank form configuration is supported for a concept preview. Resolve the commercial details above before launch.

## Navigation, motion and footer

- `src/components/layout/Navbar.tsx` uses a native full-screen dialog on mobile, with focus containment, Escape dismissal, background scroll locking and automatic dismissal at the desktop breakpoint.
- `src/components/ui/Accordion.tsx` animates FAQ expansion/collapse with CSS grid rows. Questions remain native keyboard-operable buttons with explicit expanded state; closed answers are inert.
- `src/components/ui/BrandIntro.tsx` is a decorative 1.25-second opening screen, dismissed entirely by CSS even without JavaScript. It does not wait for remote data or claim to measure loading progress. Reduced-motion visitors skip it.
- Footer copy and link groups are editable in `footerContent` in `src/config/site.ts`. The reference-inspired composition uses NUSARA's plum palette and existing motif artwork; unconfigured social/contact links stay hidden.
- All new transitions honor `prefers-reduced-motion`.
