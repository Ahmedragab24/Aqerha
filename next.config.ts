/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // pathname: "/imagesfp/**",
      },
    ],
  },
};

export default nextConfig;
