const fs = require("fs");
const Cache = require("@11ty/eleventy-cache-assets");

const excludedPhotos = ["17865418085150958"];

module.exports = async () => {
  const { data } = await Cache(
    `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.INSTAGRAM_TOKEN}`,
    {
      duration: "1d",
      type: "json"
    }
  );

  for (const image of data) {
    const source = image.media_url;
    const localUrl = `images/instagram/${image.id}.jpeg`;
    const imageBuffer = await Cache(source, { duration: "1y", type: "buffer" });
    fs.mkdirSync("images/instagram", { recursive: true });
    fs.writeFileSync(localUrl, imageBuffer);
  }

  return data
    .filter(({ id }) => !excludedPhotos.includes(id))
    .map(image => {
      image.local_url = `images/instagram/${image.id}.jpeg`;
      return image;
    });
};
