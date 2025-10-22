/** @type {import('next-sitemap').IConfig} */
const citiesData = require("./data/cities.json");

module.exports = {
  siteUrl: "https://unionphotoco.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = [];

    result.push({ 
      loc: "/locations",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    });

    // Dynamically generate paths based on cities data
    const cities = Object.values(citiesData);
    cities.forEach((city) => {
      result.push({ 
        loc: `/locations/${city.name.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      });
    });

    return result;
  },
};
