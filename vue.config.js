const Dotenv = require('dotenv-webpack')

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/videochat'
    : '/',
  outputDir: 'docs',
  configureWebpack: {
    plugins: [new Dotenv()]
  }
}