const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_TOKEN_NAME: process.env.NEXT_PUBLIC_TOKEN_NAME,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_INTERNAL_API_URL: process.env.NEXT_INTERNAL_API_URL,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withNextIntl(nextConfig);
