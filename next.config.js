/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  env: {
    title: "Braandly",
    titleDescription: "Where great brands are built"
  }
};

module.exports = nextConfig;
