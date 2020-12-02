const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async () => {
  const { data } = await Cache(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.INSTAGRAM_TOKEN}`,
    {
      duration: "1d",
      type: "json"
    }
  );

  return data;
};
