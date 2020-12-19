module.exports = config => {
  config.setTemplateFormats(["html"]);
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("css");
  config.addPassthroughCopy("js");
  config.addWatchTarget("css");
  config.addWatchTarget("js");
  config.addFilter("imageUrl", url =>
    process.env.CONTEXT === "production" ? `/cloudinaried/${url}` : url
  );
  return {
    htmlTemplateEngine: "njk"
  };
};
