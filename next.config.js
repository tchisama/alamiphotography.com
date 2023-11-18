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
        ],
      },
    
}

module.exports = nextConfig
