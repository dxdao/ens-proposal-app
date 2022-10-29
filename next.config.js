/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  reactStrictMode: true,
  env: {
    PORT: process.env.PORT || 3000,
    PINATA_JWT_KEY: process.env.PINATA_JWT_KEY,
  },
  output: {
    standalone: true,
  },
  images: {
    domains: [
      'assets.coingecko.com',
      'assets.coingecko.com',
      'raw.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
