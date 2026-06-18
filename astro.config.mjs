// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amirali115c-hub.github.io',
  base: '/clienvora-blog/',

  // No 'fonts' array here ensures the build process won't crash
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});