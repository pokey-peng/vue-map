const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-map/" : "/",
});
