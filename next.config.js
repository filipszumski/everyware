/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com", "picsum.photos"],
    formats: ["image/avif", "image/webp"],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
