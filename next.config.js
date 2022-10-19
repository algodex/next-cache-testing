/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/time/:animal',
          destination: 'http://localhost:4005/animal/:animal'
        },
      ]
    }
  }
}

module.exports = nextConfig
