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
};

module.exports = nextConfig;
