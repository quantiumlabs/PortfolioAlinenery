/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/PortfolioAlinenery',
  assetPrefix: '/PortfolioAlinenery/',
}

module.exports = nextConfig