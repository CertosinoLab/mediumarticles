const path = require('path');
const API_URL = '//localhost:7000/api';
const API_VERSION = '1.0';
const BASE_URL = `${API_URL}/${API_VERSION}`;

exports.getURL = url => BASE_URL + url;

module.exports = {
  appName: 'Dev App',
  debug: true,
  index: path.resolve(__dirname, '../dist/index.html'),
  assetsRoot: path.resolve(__dirname, '../dist'),
  assetsSubDirectory: 'assets',
  assetsPublicPath: '/',
  // Gzip off by default as many popular static hosts such as
  // Surge or Netlify already gzip all static assets for you.
  // Before setting to `true`, make sure to:
  // npm install --save-dev compression-webpack-plugin
  productionGzip: false,
  productionGzipExtensions: ['js', 'css'],
  // Run the build command with an extra argument to
  // View the bundle analyzer report after build finishes:
  // `npm run build --report`
  // Set to `true` or `false` to always turn it on or off
  bundleAnalyzerReport: process.env.npm_config_report,
};
