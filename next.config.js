/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wanderon.in',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
    ],
  },
}

module.exports = nextConfig
