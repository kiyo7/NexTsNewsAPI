/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};

module.exports = nextConfig;
