// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://classy-beignet-81956a.netlify.app",
  integrations: [preact()]
});