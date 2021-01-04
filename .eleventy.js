module.exports = config => {
  config.setTemplateFormats(["html"]);

  ["images", "css", "js", "admin"].forEach(folder => {
    config.addPassthroughCopy(folder);
    config.addWatchTarget(folder);
  });

  config.addFilter("imageUrl", url =>
    process.env.CONTEXT === "production" ? `/cloudinaried/${url}` : url
  );

  return {
    htmlTemplateEngine: "njk"
  };
};
