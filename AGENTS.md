# AGENTS.md

Site vitrine (avouslaville.fr) : Astro 5 statique + Tailwind 3, déployé sur GitHub Pages.

## Commandes

- `npm run dev` — serveur de dev
- `npm run build` — build de production (vérifier avant de commit si modifies le code)
- Pas de tests, pas de lint, pas de typecheck configurés.

## Déploiement

- Push sur `main` déclenche `.github/workflows/deploy.yml` (build + déploiement GitHub Pages) — tout push sur main est publié automatiquement.
- `astro.config.mjs` définit `site: https://avouslaville.fr`, `output: 'static'`.

## Structure

- `src/pages/` — 6 pages : `index`, `le-studio`, `expertises`, `realisations`, `carnet-de-bord`, `contact`
- `src/layouts/Layout.astro`, `src/components/Header.astro` / `Footer.astro` — partagés par toutes les pages
- `src/styles/global.css` — styles globaux

## Ressources

- Les maquettes (design de référence) sont dans `assets/maquettes` : une maquette desktop (`WEB.pdf`) et une mobile (`MOBIL.pdf`). S'y référer pour toute modification visuelle.
- Les images sont dans `src/pages/images` et `assets/images`, organisées par page.

## Contenu

- Le contenu et les commentaires du projet sont en français — suivre cette convention.
