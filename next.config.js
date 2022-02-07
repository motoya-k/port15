const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/to10",
  webpack(config, options) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },
}

module.exports = nextConfig
