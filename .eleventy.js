module.exports = config => {
  config.setTemplateFormats(["html", "css"]);
  config.addPassthroughCopy("images");
  return {
    htmlTemplateEngine: "njk"
  };
};
