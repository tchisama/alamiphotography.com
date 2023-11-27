/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/alamiphotography-b75a1.appspot.com/o/files%2F**',
          },
          {
            protocol: "https",
            hostname: "alamiphotography.vercel.app",
            pathname: "_next/image?url=https**"
          }
        ],
      },
    
}

module.exports = nextConfig
