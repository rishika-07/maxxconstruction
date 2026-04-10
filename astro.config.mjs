// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://rishika-07.github.io',
  base: '/maxxconstruction/',
  integrations: [react()],
});
