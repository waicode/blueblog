import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // サーバサイドレンダリングは行わない
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Nuxt3ではまだ`@nuxtjs/style-resources`が使えないので個別に読み込む
          additionalData: '@import "@/assets/styles/global.scss";',
        },
      },
    },
  },
});
