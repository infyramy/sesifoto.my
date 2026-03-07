const majorVersion = (() => {
  try {
    const version = require('tailwindcss/package.json').version || '0.0.0';
    return Number.parseInt(version.split('.')[0], 10) || 0;
  } catch {
    return 0;
  }
})();

const tailwindPlugin =
  majorVersion >= 4
    ? require('@tailwindcss/postcss')
    : require('tailwindcss');

module.exports = {
  plugins: [tailwindPlugin, require('autoprefixer')],
};
