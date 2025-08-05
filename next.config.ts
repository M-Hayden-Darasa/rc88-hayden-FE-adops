import { i18n } from './next-i18next.config'

module.exports = {
  i18n,
  images: {
    formats: ['image/webp'],
    domains: ['framerusercontent.com'],
  },
  // TODO
  // webpack(config: {
  //   module: { rules: { test: RegExp; issuer: RegExp; resourceQuery: RegExp; use: string[] }[] }
  // }) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     issuer: /\.[jt]sx?$/,
  //     resourceQuery: /component/,
  //     use: ['@svgr/webpack'],
  //   })
  //   return config
  // },
}
