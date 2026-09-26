import { defineConfig } from "vite";

import vituum from "vituum";
import nunjucks from "@vituum/vite-plugin-nunjucks";

import data from "./src/data/data.config.js";

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true, // Fixed your small typo here!, before `emptyOurDi` after.. this is the after dude :)

    /**
     * force the nunjucks to read on `src/templates/` :D
     * cause i want.. hehe :D
     */
    rollupOptions: {
      input: ["./src/templates/*.{html,njk,json}"],
    },
  },

  server: {
    port: 5000,
    host: "localhost",
  },

  plugins: [
    vituum({
      pages: {
        dir: "./src/templates",
      },
    }),
    nunjucks({
      root: "./src/templates",
      globals: data,
    }),
  ],
});
