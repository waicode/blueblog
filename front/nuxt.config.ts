import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 自動インポートは行わない
  autoImports: {
    dirs: [],
    global: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global.scss";',
        },
      },
    },
  },
});
