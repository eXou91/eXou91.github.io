# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Site vitrine (`avouslaville.fr`) : Astro 5 statique + Tailwind 3, déployé sur GitHub Pages. Portfolio de "À vous la ville" (design graphique & édition stratégique pour la ville, l'architecture, l'urbanisme).

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (run before committing code changes)
- `npm run preview` — preview the production build locally
- No tests, no lint, no typecheck configured.

## Deployment

- Pushing to `main` triggers `.github/workflows/deploy.yml` (`npm ci` → `npm run build` → deploy to GitHub Pages) — every push to `main` is published automatically. There is no staging/preview environment.
- `astro.config.mjs` sets `site: https://avouslaville.fr` and `output: 'static'`.
- Custom domain is configured via `public/CNAME` (copied to `dist/CNAME` on build).

## Architecture

- 6 pages under `src/pages/`: `index`, `le-studio`, `expertises`, `realisations`, `carnet-de-bord`, `contact`. Each is a standalone `.astro` file (no nested routes/dynamic routes).
- `src/layouts/Layout.astro` wraps every page (sets `<head>`, imports `global.css`, takes `title`/`description` props via `<Layout title="..." description="...">`).
- `src/components/Header.astro` and `Footer.astro` are shared across all pages. `Header.astro` takes an `activePage` prop to highlight the current nav item and contains both the desktop nav and a mobile hamburger overlay (vanilla inline `<script>`, no framework/islands).
- No UI framework (React/Vue/etc.) is installed — everything is plain Astro components + Tailwind utility classes + occasional inline `<script is:inline>` for interactivity.
- Path alias `@/*` → `src/*` (see `tsconfig.json`), used e.g. `import Layout from '@/layouts/Layout.astro'`.

### Responsive pattern

Pages commonly render **two parallel markup blocks** for mobile vs. desktop (e.g. `md:hidden` mobile block + `hidden md:block`/`md:flex` desktop block) rather than one fluid layout — see `src/pages/index.astro`. When editing a page, check whether a change needs to be mirrored in both the mobile and desktop blocks.

### Images

- All images live in `assets/images/`, organized by page (`assets/images/index/`, `assets/images/expertises/`, `assets/images/logo/`, etc.), each with `web/` and `mobile/` variants where relevant (`.webp`).
- Images are imported at the top of `.astro` files and rendered via Astro's built-in `<Image>` from `astro:assets` (not raw `<img>`), e.g. `import introWebImg from '../../assets/images/index/web/intro_index.webp';`.

### Design reference

- Reference mockups live in `assets/maquettes/` (`web/` for desktop, `Mobile/` for mobile — check both when validating a visual change).

### Styling

- Tailwind config (`tailwind.config.mjs`) defines the brand palette (`navy`, `royal`, `coral`, `paper`, `cream`, `blush`, `rose`) and font families (`sans`: Inter, `display`: Neue Haas Display) — prefer these tokens over raw hex/arbitrary values when possible.
- `src/styles/global.css` holds global styles, imported once in `Layout.astro`.

## Content conventions

- Site content, copy, and code comments are in French — follow this convention.
