module.exports = config => {
  config.setTemplateFormats(["html", "css"]);
  config.addPassthroughCopy("images");
  config.addFilter("imageUrl", url =>
    process.env.CONTEXT === "production" ? `/cloudinaried/${url}` : url
  );
  return {
    htmlTemplateEngine: "njk"
  };
};
