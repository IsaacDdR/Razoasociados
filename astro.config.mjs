import { defineConfig, passthroughImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  //site: "https://isaacddr.github.io",
  //base: "Razoasociados",
  site: "https://razoasociados.com",
  integrations: [tailwind(), react()],
  image: {
    service: passthroughImageService()
  }
});