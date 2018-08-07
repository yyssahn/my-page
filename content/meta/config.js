const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Kyle's Random Shenanigans", // <title>
  shortSiteTitle: "Kyle says Hello World!", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Kyle Ahn",
  authorTwitterAccount: "yyssahn",
  // info
  infoTitle: "Kyle's Site",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Kyle's Site/Blog to rant about random stuff",
  manifestShortName: "KyleBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "yyssahn@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/yyssahn" },
    { name: "twitter", url: "https://twitter.com/yyssahn" },
    { name: "facebook", url: "http://facebook.com/yoonsung.ahn" },
    { name: "linkedin", url: "http://facebook.com/yoonsung.ahn" }
  ]
};
