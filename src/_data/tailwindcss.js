let thePostCSS = require("../../utils/postcss.js");

module.exports = async function () {
  return await thePostCSS("tailwind/tailwind.css", (input) => input);
};