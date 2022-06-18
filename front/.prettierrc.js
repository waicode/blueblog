module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  semi: true,
  overrides: [
    {
      files: '{,.**/,**/}{.*,*}.json',
      options: {
        printWidth: 80,
      },
    },
  ],
};
