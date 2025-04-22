// @ts-check
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown(),
    icon({
      iconDir: "src/assets/icons",
    }),
  ],

  markdown: {
    shikiConfig: {
      theme: "catppuccin-macchiato",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});