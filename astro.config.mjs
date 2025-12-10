// @ts-check
import { defineConfig, redirect } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false, // Do not prefix default locale with /en/
      redirectToDefaultLocale: true, // Redirect / to /en/
    }
  }
});
