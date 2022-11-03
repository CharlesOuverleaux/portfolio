/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    appName: "Charles Ouverleaux",
    appVersion: "2.0.0",
    twitterLink: "https://twitter.com/CO_IN_TECH",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    return config;
  },
};

module.exports = nextConfig;
