/** @type {import('next-sitemap').IConfig} */
const fs = require("fs");
const path = require("path");
const citiesData = require("./data/cities.json");
const blogByTag = require("./data/blog-by-tag.json");

function tagToSlug(tag) {
  return tag
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function getBlogSlugs() {
  const blogDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

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

    const cities = Object.values(citiesData);
    cities.forEach((city) => {
      result.push({
        loc: `/locations/${city.name.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      });
    });

    result.push({
      loc: "/blog",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    });

    const blogSlugs = getBlogSlugs();
    blogSlugs.forEach((slug) => {
      result.push({
        loc: `/${slug}`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      });
    });

    Object.keys(blogByTag).forEach((tag) => {
      result.push({
        loc: `/topics/${tagToSlug(tag)}`,
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.6,
      });
    });

    return result;
  },
};
