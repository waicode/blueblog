const { mergeConfig } = require('vite');
const Components = require('unplugin-vue-components/vite');
const AutoImport = require('unplugin-auto-import/vite');
const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    config.plugins = config.plugins ?? [];

    // Nuxt3のVue3自動インポートをStorybookで再現
    config.plugins.push(
      AutoImport({
        imports: ['vue'],
        dts: '.storybook/auto-imports.d.ts',
      }),
    );
    // Nuxt3のコンポーネント自動インポートをStorybookで再現
    config.plugins.push(
      Components({
        dirs: ['components'],
        directoryAsNamespace: true,
        dts: '.storybook/components.d.ts',
      }),
    );

    // Nuxtが用意している処理をモック化
    config.resolve.alias['#app'] = require.resolve('./__mocks__/nuxtMock.ts');

    return mergeConfig(config, {
      base: config.build ? '/blueblog/' : '/',
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `
              @import "@/assets/styles/_variables.scss";
              @import "@/assets/styles/_mixin.scss";
            `,
          },
        },
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../'),
          '~': path.resolve(__dirname, '../'),
        },
      },
    });
  },
};
