import { defineNuxtConfig } from "nuxt";
import eslintPlugin from "vite-plugin-eslint";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // サーバサイドレンダリングは行わない
  ssr: false,
  css: ["bulma/bulma.sass"],
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          // Nuxt3ではまだ`@nuxtjs/style-resources`が使えないので個別に読み込む
          additionalData: `
            @import "../node_modules/bulma/sass/utilities/functions";
            @import "../node_modules/bulma/sass/utilities/initial-variables";
            @import "@/assets/styles/_bulma.scss";
            @import "../node_modules/bulma/bulma.sass";
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixin.scss";
          `,
        },
      },
    },
  },
});
