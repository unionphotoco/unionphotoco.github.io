/** @type {import('next-sitemap').IConfig} */
const citiesData = require("./data/cities.json");

module.exports = {
  siteUrl: "https://unionphotoco.com",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = [];

    result.push({ loc: "/locations" });

    // Dynamically generate paths based on cities data
    const cities = Object.values(citiesData);
    cities.forEach((city) => {
      result.push({ loc: `/locations/${city.name.toLowerCase()}` });
    });

    return result;
  },
};
