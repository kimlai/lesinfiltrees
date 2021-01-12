module.exports = config => {
  config.setTemplateFormats(["html", "md"]);

  ["images", "css", "js", "admin"].forEach(folder => {
    config.addPassthroughCopy(folder);
    config.addWatchTarget(folder);
  });

  config.addFilter("imageUrl", url =>
    process.env.CONTEXT === "production" ? `/cloudinaried/${url}` : `/${url}`
  );

  config.addCollection("customPages", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("custom_pages/*.md")
      .sort((a, b) => a.navigation < b.navigation);
  });

  return {
    htmlTemplateEngine: "njk"
  };
};
