/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com", "links.papareact.com"],
  },
};

module.exports = nextConfig;
