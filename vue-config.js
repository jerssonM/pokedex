var path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@styles": path.resolve("src/styles"),
        "@components": path.resolve("src/components"),
      },
    },
  },
};
