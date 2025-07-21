/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ["defaults"],
      renderLegacyChunks: false,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "pdfjs-dist/build/pdf.mjs": "pdfjs-dist/build/pdf.js",
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
