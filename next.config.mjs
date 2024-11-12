/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'demo.icm.intershop.de',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
