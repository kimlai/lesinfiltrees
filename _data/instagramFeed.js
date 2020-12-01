const Cache = require("@11ty/eleventy-cache-assets");

const username = "lesinfiltrees";

module.exports = async () => {
  const {
    graphql: {
      user: {
        edge_owner_to_timeline_media: { edges }
      }
    }
  } = await Cache(`https://www.instagram.com/${username}/?__a=1`, {
    duration: "1d",
    type: "json"
  });

  return edges.map(edge => edge.node);
};
