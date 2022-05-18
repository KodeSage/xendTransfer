/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   env: {
    MAINNET: process.env.MAINNET,
    ROPSTEN: process.env.ROPSTEN,
    RINKEBY: process.env.RINKEBY,
    KOVAN: process.env.KOVAN
  }
  // generateEtags: false,
}

module.exports = nextConfig
