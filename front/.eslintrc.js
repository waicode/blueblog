module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint-config-prettierは最後に記述する
  // eslintで適応したルールとprettierが競合するルールを後から無効化するため
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // NuxtはPathでPrefixが有効なので無効化
    'vue/multi-word-component-names': 'off',
    // Vue3ではtemplate配下に複数のタグを記述できるので無効化
    'vue/no-multiple-template-root': 'off',
  },
};
