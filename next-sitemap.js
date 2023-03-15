// Ref: https://www.youtube.com/watch?v=fOoH9Z5adrg&ab_channel=LeighHalliday
// Ref: https://www.npmjs.com/package/next-sitemap
// Ref: https://medium.com/wesionary-team/how-to-implement-sitemap-in-next-js-using-next-sitemap-77ca7bb56544

const siteUrl = "https://charlesouverleaux.co";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
