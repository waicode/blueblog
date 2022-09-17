module.exports = {
  '*.{js,jsx,ts,tsx}': ['yarn lint:script', 'yarn lint:prettier'],
  '*.{css,less,sass,scss}': ['yarn lint:style', 'yarn lint:prettier'],
  '*.{md}': ['yarn lint:markdown'],
};
