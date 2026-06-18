// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://amirali115c-hub.github.io',
	base: '/clienvora-blog/',
	integrations: [mdx(), sitemap()],
    // No 'fonts' array here ensures the build process won't crash
});
