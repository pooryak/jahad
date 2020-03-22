const withFonts = require('next-fonts');
const withLess = require('@zeit/next-less');

module.exports = withLess(withFonts({
  cssModules: true,
  enableSvg: true
}))