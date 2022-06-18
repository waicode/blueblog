module.exports = {
  /**
   * 利用するプラグイン
   */
  plugins: [
    'stylelint-declaration-block-no-ignored-properties', // 効果のないプロパティを検出
    'stylelint-declaration-strict-value', // リテラル値の直接指定を禁止
    'stylelint-no-unsupported-browser-features', // ブラウザ非対応プロパティを検出
    'stylelint-order', // ソート指定
  ],

  /**
   * ベースルールの追加
   */
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-prettier'],

  /**
   * 追加ルールの設定
   *
   * https://stylelint.io/user-guide/configuration
   */
  rules: {
    'scss/dollar-variable-empty-line-before': null, // 変数定義の前に空行を入れないことを許容
    'selector-class-pattern': '[A-Z]+', // セレクタのクラスは最初の文字は大文字（BEM）
    'no-descending-specificity': null, // 詳細度が高いセレクタを先に書くことを許容
    // 効果のないプロパティを検出
    'plugin/declaration-block-no-ignored-properties': true,
    // .browserlistrcに従い非対応を除いたブラウザ別のlint対応
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: ['last 0.5 years'],
        ignorePartialSupport: true,
      },
    ],
    // 使用可能な単位の指定
    'declaration-property-unit-allowed-list': {
      'line-height': [], // line-heightは「単位なし」の記述のみを許可
    },
    // リテラル値スタイルの禁止
    'scale-unlimited/declaration-strict-value': [
      [
        // 禁止対象項目
        '/color$/',
        'fill',
        'stroke',
        'z-index',
        'font-size',
        'font-weight',
        'line-height',
        'border-radius',
        'margin',
        'margin-top',
        'margin-right',
        'margin-bottom',
        'margin-left',
        'padding',
        'padding-top',
        'padding-right',
        'padding-bottom',
        'padding-left',
      ],
      {
        // 以下のリテラル値のみ許可
        ignoreValues: {
          '/color$/': ['inherit', 'currentColor', 'transparent'],
          'font-size': 0,
          'line-height': 0,
          margin: [0, 'auto'],
          'margin-top': 0,
          'margin-right': 0,
          'margin-bottom': 0,
          'margin-left': 0,
          padding: [0, 'auto'],
          'padding-top': 0,
          'padding-right': 0,
          'padding-bottom': 0,
          'padding-left': 0,
        },
        disableFix: true, // 自動補正はしない
      },
    ],
    // 特殊なフォントを許可（font-family: 'Font Awesome 5 Free';）
    'font-family-no-missing-generic-family-keyword': null,
    // レガシースタイルのカラー指定 ex. rgb(0, 0, 0), rgba(12, 122, 231, 0.2)
    'color-function-notation': 'legacy',
  },
  root: true,
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
};
