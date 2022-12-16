/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "platform-lookaside.fbsbx.com",
      "links.papareact.com",
      "z-p3-scontent.fmnl26-1.fna.fbcdn.net",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
