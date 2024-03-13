/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'productimages.hepsiburada.net',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
