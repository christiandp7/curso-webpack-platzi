const path = require("path");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/index.js"),
    precios: path.resolve(__dirname, "src/precios.js"),
    contacto: path.resolve(__dirname, "src/contacto.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
  mode: "development",
};
