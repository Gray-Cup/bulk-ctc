import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';


import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Set your site's URL
  site: 'https://bulkctc.com',

  integrations: [
    mdx(),
    sitemap()
  ],

  adapter: cloudflare(),
});