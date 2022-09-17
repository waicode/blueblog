module.exports = {
  '*.{js,jsx,ts,tsx}': [() => 'yarn run lint:script', () => 'yarn run lint:prettier'],
  '*.{css,less,sass,scss}': [() => 'yarn run lint:style', () => 'yarn run lint:prettier'],
  '*.{md}': [() => 'yarn run lint:markdown'],
};
