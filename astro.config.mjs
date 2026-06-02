import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://avouslaville.fr',
  integrations: [tailwind()],
  output: 'static',
});
