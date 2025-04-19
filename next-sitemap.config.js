const axios = require("axios");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://altoukhyglass.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,

  // أهم خطوة: توليد المسارات الديناميكية لكل لغة
  additionalPaths: async (config) => {
    // البيانات من API
    const servicesRes = await axios.get(
      "https://api.altoukhyglass.com/services"
    );
    const projectsRes = await axios.get(
      "https://api.altoukhyglass.com/projects"
    );

    const services = servicesRes.data; // لازم تبقى [{ id: 1 }, { id: 2 }, ...]
    const projects = projectsRes.data;

    const langs = ["ar", "en"];

    const servicePaths = langs.flatMap((lang) =>
      services.map((service) => ({
        loc: `/${lang}/services/${service.id}`,
        changefreq: "weekly",
        priority: 0.8,
      }))
    );

    const projectPaths = langs.flatMap((lang) =>
      projects.map((project) => ({
        loc: `/${lang}/projects/${project.id}`,
        changefreq: "weekly",
        priority: 0.8,
      }))
    );

    return [...servicePaths, ...projectPaths];
  },
};
