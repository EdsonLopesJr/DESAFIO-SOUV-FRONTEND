/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
    baseUrl: "./src",
    paths: {
      "@/*": ["*"],
    },
  },
  images: {
    domains: ["edsonlopesjr.github.io"],
  },
};

export default nextConfig;
