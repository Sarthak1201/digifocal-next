# Digifocal Ascend — Next.js

This is the Next.js (App Router) version of the original Vite + React Digifocal site.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm start` — start the production server
- `npm run lint` — lint the codebase

## Project structure

```
app/
  layout.tsx                       # Root layout — global metadata, GA4, AdSense, fonts
  providers.tsx                    # QueryClient, Helmet, Tooltip, Toasters, scroll/GA/AdSense tracking
  page.tsx                         # Home page (server) — exports metadata
  ClientPage.tsx                   # Home page (client) — was src/pages/Index.tsx
  not-found.tsx                    # 404 page
  about/                           # /about
  contact/                         # /contact
  services/                        # /services
    software-solutions/, automation/, consulting/, talent/
  industries/                      # /industries
    finance/, healthcare/, retail/, startups/
  careers/                         # /careers
    [slug]/                        # /careers/[slug] — dynamic JobDetail
  blogs/                           # /blogs (the index page)
  blog/                            # /blog/<slug> — six static blog posts
  privacy-policy/                  # /privacy-policy

src/
  components/                      # All React components (mostly "use client")
  hooks/                           # useJobs, use-toast, use-mobile
  lib/                             # utils.ts (cn helper)
  assets/                          # hero-bg-with-blackout.mp4
public/                            # Static files served at /
```

## Page convention (server + client split)

Every route uses a **two-file pattern**:

- `page.tsx` — server component that exports `metadata` and renders the client page
- `ClientPage.tsx` — client component (marked `"use client"`) containing the actual UI

This lets us keep all the animations, hooks, and `react-helmet-async` JSON-LD blocks working while still getting **server-rendered meta tags** — a big SEO upgrade over the original.

For the dynamic `/careers/[slug]` route, `generateMetadata` builds a per-slug title at request time.

## What changed from the Vite version

| Vite / React                                     | Next.js (App Router) equivalent                       |
| ------------------------------------------------ | ----------------------------------------------------- |
| `src/main.tsx` + `index.html`                    | `app/layout.tsx`                                      |
| `src/App.tsx` (BrowserRouter + Routes)           | File-based routing in `app/`                          |
| `useLocation()`                                  | `usePathname()` from `next/navigation`                |
| `useNavigate()`                                  | `useRouter()` from `next/navigation`                  |
| `useParams()` (react-router)                     | `useParams()` from `next/navigation`                  |
| `<Navigate to="..." replace />`                  | `router.replace("...")`                               |
| `<Link to="...">` (react-router)                 | `<Link href="...">` from `next/link`                  |
| `<NavLink to="...">`                             | `<Link href="...">` (NavLink wasn't used anywhere)    |
| `react-helmet-async` only                        | `metadata` API in `page.tsx` **+** Helmet for dynamic content (kept for JSON-LD blocks) |
| `react-ga4` initialized in `main.tsx`            | Initialized once in `app/providers.tsx`               |
| AdSense script injected per page (JobDetail)     | Loaded once globally via `<Script>` in `app/layout.tsx`; rescan triggered per-route from `Providers` |
| Window/document scroll-to-top in `App.tsx`       | `ScrollToTop` client component in `Providers`         |
| `vite.config.ts` + plugins                       | `next.config.mjs` + `tsconfig.json` paths             |
| Netlify `_redirects` for SPA fallback            | Not needed — Next.js handles per-route 404s natively  |

### Removed dependencies

- `react-router-dom`
- `vite`, `@vitejs/plugin-react-swc`, `vite-plugin-sitemap`
- `lovable-tagger`, `eslint-plugin-react-refresh`, `typescript-eslint`, `@eslint/js`, `globals`

### Kept dependencies (work the same)

- `@tanstack/react-query`, `framer-motion`, `gsap`, `three`, `@react-three/fiber`, `@react-three/drei`
- `react-helmet-async` (still used inside client components for JSON-LD schema)
- `react-ga4`, `@emailjs/browser`, `papaparse`
- All Radix UI primitives, shadcn/ui components, lucide-react icons, Tailwind, etc.

## Notes

- AdSense `data-ad-slot` placeholders (`XXXXXXXXXX` in JobDetail) are leftover from the original. Replace with your real slot ID when you have it.
- The original `src/pages/Insights.tsx` wasn't referenced from any route, so it wasn't migrated. Add `app/insights/page.tsx` if you need it back.
- The Google AdSense `<script>` now loads exactly once (in `app/layout.tsx`) instead of being re-injected on every JobDetail mount as it was originally.
- All static-asset imports (`@/assets/*.mp4`, etc.) work the same way — Next.js handles them natively via its built-in loader.
