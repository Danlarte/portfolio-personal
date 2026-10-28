// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      // Localized 404 pages must not be indexed as regular pages.
      serialize: (item) => (/\/404\/?$/.test(item.url) ? undefined : item),
    }),
  ],
  site: "https://daniel-lazarte.pages.dev",
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: true,
      // The root "/" page is a real page that detects the visitor language
      // (cookie + navigator.language) and redirects to /es/ or /en/.
      redirectToDefaultLocale: false,
    },
  },
});
