module.exports = config => {
  config.setTemplateFormats(["html", "css"]);
  return {
    htmlTemplateEngine: "njk"
  };
};
