/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'media.rawg.io'],
  },
});
