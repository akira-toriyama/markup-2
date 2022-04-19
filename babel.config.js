/** @type {import('@babel/core').TransformOptions} */
module.exports = {
  presets: ["next/babel"],
  plugins: ["@vanilla-extract/babel-plugin"],
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id"],
    },
  },
};
