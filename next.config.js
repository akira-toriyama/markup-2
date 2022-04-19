/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx"],
};

module.exports =
  require("@vanilla-extract/next-plugin").createVanillaExtractPlugin()(
    nextConfig
  );
