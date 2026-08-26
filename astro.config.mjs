import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://avouslaville.fr',
  integrations: [tailwind(), sitemap()],
  output: 'static',
  // Ancienne URL de la page agence : redirige pour ne pas casser les liens déjà indexés.
  redirects: {
    '/le-studio': '/agence',
  },
});
