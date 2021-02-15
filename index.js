const replace = require("@rollup/plugin-replace");
const { config } = require("dotenv");

const insertEnv = () =>
  replace({
    process: JSON.stringify({
      env: {
        ...config().parsed,
      },
    }),
  });

module.exports = insertEnv;
