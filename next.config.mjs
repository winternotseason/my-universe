/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "apod.nasa.gov",
      },
      {
        hostname: "mars.nasa.gov",
      },
      {
        hostname: "shopping-phinf.pstatic.net",
      },
      {
        hostname: "i.scdn.co",
      },
    ],
  },
  env: {
    NASA_API_KEY: "gPIWx53boOzJaWnh3BDgFUU5RFyYu81rxhUwyGUp",
    NAVER_CLIENT_ID: "BoJTxbnp8XfeqDvtDwHc",
    NAVER_CLIENT_SECRET: "wUmPD8WYJB",
    NEXTAUTH_URL : isProd ? 'https://my-universe-flax.vercel.app/' :
    'http://localhost:3000/'
  },
};

export default nextConfig;
