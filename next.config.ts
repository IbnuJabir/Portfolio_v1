import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // add image domains
  images: {
    domains: [
      "assets.aceternity.com",
      "zadalmead.com",
      "trello-on-rails.vercel.app",
      "github.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zadalmead.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "trello-on-rails.vercel.app",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
