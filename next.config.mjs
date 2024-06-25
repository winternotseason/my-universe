/** @type {import('next').NextConfig} */

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
    DB_USERNAME: "root",
    DB_PASSWORD: "dbwls0901",
    DB_HOST : '127.0.0.1'
  },
};

export default nextConfig;
