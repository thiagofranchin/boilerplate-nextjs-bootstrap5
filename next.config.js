/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')
const withSass = require('@zeit/next-sass')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})

module.exports = withSass({})
