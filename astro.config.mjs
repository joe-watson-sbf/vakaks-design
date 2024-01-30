import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    experimentalReactChildren: true
  }), sentry(), spotlightjs()],
  output: "server",
  adapter: vercel(),
  image: {
    domains: ["astro.build"],
    remotePatterns: [{
      protocol: "https"
    }]
  }
});