import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Vocabulaire fermé des catégories, aligné sur les convictions de la page agence
// (+ « Parcours » pour les textes personnels, qui n'est pas une conviction).
// L'ordre ici est l'ordre d'affichage des filtres. Une valeur hors de cette liste
// fait échouer le build : c'est ce qui empêche le vocabulaire de dériver.
export const CATEGORIES = ['Stratégie', 'Design', 'Méthode', 'Parcours'] as const;

// « Méthode » -> « methode ». Partagé par la liste du carnet et la page agence :
// les deux construisent des URL ?categorie=..., elles doivent slugifier pareil.
export const slugifierCategorie = (c: string) =>
  c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

const carnetDeBord = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/carnet-de-bord' }),
  schema: z.object({
    title: z.string(),
    tag: z.enum(CATEGORIES),
    excerpt: z.string(),
    // Chapô abrégé affiché sur mobile (cf. maquettes) ; à défaut, `excerpt` est réutilisé.
    excerptShort: z.string().optional(),
    // Accroche du bloc CTA en bas d'article ; à défaut, « Envie d'en discuter ? ».
    ctaTitle: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { 'carnet-de-bord': carnetDeBord };
