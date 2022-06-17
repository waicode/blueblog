module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // eslint-config-prettierは最後に記述する
  // eslintで適応したルールとprettierが競合するルールを後から無効化するため
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:@typescript-eslint/recommended",
    "@nuxtjs/eslint-config-typescript",
    "eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {},
};
