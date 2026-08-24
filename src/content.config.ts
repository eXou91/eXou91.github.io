import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const carnetDeBord = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/carnet-de-bord' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    excerpt: z.string(),
    // Chapô abrégé affiché sur mobile (cf. maquettes) ; à défaut, `excerpt` est réutilisé.
    excerptShort: z.string().optional(),
    date: z.date(),
  }),
});

export const collections = { 'carnet-de-bord': carnetDeBord };
