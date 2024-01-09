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

document.querySelectorAll(".listing-details").forEach((item) => {
  let results = "";
  let links = item.getElementsByTagName("a");
  let businessName = item.getElementsByTagName("h3");
  let phone = item.querySelector('span[itemprop="telephone"]');
  let address = item.querySelector('span[itemprop="streetAddress"]');
  // console.log(businessName[0].textContent);
  // console.log(phone?.textContent);
  results += businessName[0].textContent + " " + phone?.textContent + " " + address?.textContent;
  Array.from(links).forEach((link) => {
    if (link.textContent === "Website") {
      results += " " + link.href;
    }
  });
  console.log(results);
});
