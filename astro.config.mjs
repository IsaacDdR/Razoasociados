import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://https://isaacddr.github.io",
  integrations: [tailwind()],
  image: {
   service: passthroughImageService(),
 }
});