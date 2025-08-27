/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.aqerha.com",
      },
      {
        protocol: "https",
        hostname: "economyplusme.com",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "invest-gate.me",
      },
      {
        protocol: "https",
        hostname: "assets.asharqbusiness.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // pathname: "/imagesfp/**",
      },
    ],
  },
};

export default nextConfig;
