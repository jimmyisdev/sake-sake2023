/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "thecocktaildb.com",
        port: "",
        pathname: "/images/media/drink/**",
      },
    ],
  },
};

module.exports = nextConfig;
