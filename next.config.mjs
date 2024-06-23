/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apod.nasa.gov",
        port: "",
      },
      {
        protocol: "https",
        hostname: "mars.nasa.gov",
        port: "",
      },
    ],
  },
};

export default nextConfig;
