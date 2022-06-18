const commonRules = {
  // 本番ではコンソールログとデバッグログの出力を禁止する
  'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  // export形式は統一せずdefault/namedのいずれも許可する
  'import/no-default-export': ['off'],
  'import/prefer-default-export': ['off'],
  // 値の再代入を一部の変数名で許可する
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: ['state', 'acc', 'e', 'ctx', 'req', 'request', 'res', 'response', '$scope'],
    },
  ],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint-config-prettierは最後に記述する
  // eslintで適応したルールとprettierが競合するルールを後から無効化するため
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: { ...commonRules },
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['eslint-config-prettier'],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.ts', '**/*.d.ts'],
      extends: ['plugin:@typescript-eslint/recommended', '@nuxtjs/eslint-config-typescript', 'eslint-config-prettier'],
      rules: { ...commonRules },
    },
    {
      files: ['**/*.vue'],
      globals: {
        withDefaults: true,
        defineProps: true,
        defineExpose: true,
        defineEmits: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        '@nuxtjs/eslint-config-typescript',
        'eslint-config-prettier',
      ],
      rules: {
        ...commonRules,
        // NuxtはPathでPrefixが有効なので無効化
        'vue/multi-word-component-names': 'off',
        // Vue3ではtemplate配下に複数のタグを記述できるので無効化
        'vue/no-multiple-template-root': 'off',
      },
    },
  ],
};
