module.exports = {
  plugins: [
    require(`tailwindcss`)(`./src/tailwind/tailwind.config.js`),
    require(`autoprefixer`),
  ],
};