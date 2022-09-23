import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      // タイトル・説明文・画像はページ毎に`useHead`を使って設定すること
      htmlAttrs: { lang: 'ja' },
      // title: '', // 要設定
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // { property: 'og:title', content: '' }, // 要設定
        // { property: 'og:description', content: '' }, // 要設定
        { property: 'og:image', content: 'https://archt.blue/images/ogp-main.png' }, // 必要に応じて上書き
        { property: 'twitter:card', content: 'summary_large_image' },
        // { property: 'twitter:title', content: '' }, // 要設定
        // { property: 'twitter:description', content: '' }, // 要設定
        { property: 'twitter:site', content: '@waicode37' },
        { property: 'twitter:creator', content: '@waicode37' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          href: '/fonts/NotoSansJP-DemiLight.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: true,
        },
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
          href: 'https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600&family=Noto+Sans+JP:wght@100;300;400;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/styles/global.scss', '@/assets/styles/reset.scss'],
  runtimeConfig: {
    public: {
      baseUrl: 'https://archt.blue',
      pageSize: 5,
      gaId: 'G-3JHC646NJ9',
      amazonTrackingId: 'amayutazon-22',
      rakutenAffiliateId: 'g0000012.1zx7x6a7.g0000013.rphkh6ef',
      yahooValueCommerceSid: '3125738',
      yahooValueCommercePid: '887190364',
    },
  },
  modules: ['@nuxt/content', '@vueuse/nuxt'],
  components: [
    {
      path: '~/components',
      global: true,
    },
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
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
