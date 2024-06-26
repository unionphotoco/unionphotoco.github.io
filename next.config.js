const path = require("path");

const nextConfig = {
  env: {
    TEMPLATE_PURCHASE_LINK: process.env.TEMPLATE_PURCHASE_LINK
      ? process.env.TEMPLATE_PURCHASE_LINK
      : "https://themeforest.net/user/themebiotic?ref=themebiotic",
    TEMPLATE_PURCHASE_PRICE: process.env.TEMPLATE_PURCHASE_PRICE
      ? process.env.TEMPLATE_PURCHASE_PRICE
      : "$29",
    TEMPLATE_MARKET_PROFILE_LINK: process.env.TEMPLATE_MARKET_PROFILE_LINK
      ? process.env.TEMPLATE_MARKET_PROFILE_LINK
      : "https://1.envato.market/themebiotic",
  },
  // i18n,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  distDir: "dist",
};

module.exports = nextConfig;
