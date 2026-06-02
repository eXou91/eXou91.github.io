import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eXou91.github.io',
  integrations: [tailwind()],
  output: 'static',
});
