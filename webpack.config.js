const HtmlWebPackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});
module.exports = {
  /* mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: 'https://microapp-trkcll-assesment.netlify.app/',
  }, */
  mode: 'development',
  devServer: {
    open: true,
    static: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback:{
      index:'/public/index.html'
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      }
    },
    {
      test: /\.(css|less)$/,
      use: ["style-loader", "css-loader"]
    }
    ]
  },
  plugins: [
    htmlPlugin,
    new ModuleFederationPlugin({
      name: "Host",
      filename: "remoteEntry.js",
      remotes: {
        MicroFrontend: "MicroFrontend@https://microapp-trkcll-assesment.netlify.app/remoteEntry.js"
        // MicroFrontend: "MicroFrontend@https://localhost:3000/remoteEntry.js" (Eğer iki projeyi de localhost'da dev modunda çalıştıracaksak)
      }
    })
  ]
};