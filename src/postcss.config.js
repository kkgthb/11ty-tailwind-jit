module.exports = {
  plugins: [
    require(`@tailwindcss/jit`)(`./src/tailwind/tailwind.config.js`),
    require(`autoprefixer`),
  ],
};