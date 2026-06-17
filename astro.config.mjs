// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Ensure this matches the URL where your site is hosted
    site: 'https://amirali115c-hub.github.io',
    
    // This MUST match your repository name exactly (e.g., /squealing-star/)
    // This setting resolves your 404 errors by telling Astro where the site lives.
    base: '/clienvora-blog/',
    
    integrations: [mdx(), sitemap()],
    
    // We removed the 'fonts' object because it is likely causing build issues.
    // If you want to use custom fonts, it is safer to import them via CSS 
    // in your src/styles/global.css file.
});
