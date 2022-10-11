import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from "vite-plugin-vuetify";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue3-barcode-scanner-demo/",
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});