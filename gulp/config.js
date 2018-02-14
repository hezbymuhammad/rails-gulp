var publicAssets = "./public/assets";
var sourceFiles  = "./gulp/assets";

module.exports = {
  publicAssets: publicAssets,

  sw: {
    target: "service-worker.js",
    targetDir: "./public/"
  }
};
