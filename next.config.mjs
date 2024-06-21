/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images : {
    remotePatterns: [
      {
        protocol : 'https',
        hostname : 'apod.nasa.gov',
        port: ''
      }
    ]
  }
};

export default nextConfig;
