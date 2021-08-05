// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
    "snowpack-sass-compiler",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    port: 3000,
  },
  buildOptions: {
    /* ... */
  },
};
