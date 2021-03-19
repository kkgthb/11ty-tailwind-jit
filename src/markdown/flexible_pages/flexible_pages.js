module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      return `/${data.permalink}/index.html`;
    },
  },
};
