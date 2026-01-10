// @ts-check
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import reactCompilerPlugin from "babel-plugin-react-compiler";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react({
      babel: {
        plugins: [reactCompilerPlugin],
      },
    }),
  ],
  adapter: netlify(),
});
