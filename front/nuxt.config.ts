import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600&family=Noto+Sans+JP:wght@300;400;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/styles/global.scss', '@/assets/styles/reset.scss'],
  runtimeConfig: {
    public: {
      pageSize: 5,
      amazonTrackingId: 'amayutazon-22',
      rakutenAffiliateId: 'g0000012.1zx7x6a7.g0000013.rphkh6ef',
      yahooValueCommerceSid: '3125738',
      yahooValueCommercePid: '887190364',
    },
  },
  modules: ['@nuxt/content'],
  content: {
    navigation: {
      fields: ['category', 'createdAt', 'updatedAt'],
    },
  },
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        scss: {
          // Nuxt3ではまだ`@nuxtjs/style-resources`が使えないので個別に読み込む
          additionalData: `
            @import "@/assets/styles/_variables.scss";
            @import "@/assets/styles/_mixin.scss";
          `,
        },
      },
    },
  },
});
