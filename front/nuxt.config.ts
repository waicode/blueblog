import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // サーバサイドレンダリングは行わない
  ssr: false,
  css: ["bulma/bulma.sass"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Nuxt3ではまだ`@nuxtjs/style-resources`が使えないので個別に読み込む
          additionalData: `
            @import "../node_modules/bulma/sass/utilities/functions";
            @import "../node_modules/bulma/sass/utilities/initial-variables";
            @import "@/assets/styles/global.scss";
            @import "../node_modules/bulma/bulma.sass";
          `,
        },
      },
    },
  },
});
