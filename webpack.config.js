
const path = require(`path`);
const HtmlWebPackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: {
      main: `./src/index`,
    },
    output: {
      path: path.resolve(__dirname, `dist`),
      filename: `[name].bundle.js`,
    },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: `html-loader`,
          // options: {minimize: true},
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.ts$/,
        use: `ts-loader`,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          `file-loader`,
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          `style-loader`,
          `css-loader`,
          `sass-loader`,
        ],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: `file-loader`,
            options: {
              name: `[name].[ext]`,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
        TweenLite: path.resolve(`node_modules`, `gsap/src/uncompressed/TweenLite.js`),
        TweenMax: path.resolve(`node_modules`, `gsap/src/uncompressed/TweenMax.js`),
        TimelineLite: path.resolve(`node_modules`, `gsap/src/uncompressed/TimelineLite.js`),
        TimelineMax: path.resolve(`node_modules`, `gsap/src/uncompressed/TimelineMax.js`),
        ScrollMagic: path.resolve(`node_modules`, `scrollmagic/scrollmagic/uncompressed/ScrollMagic.js`),
        "animation.gsap": path.resolve(`node_modules`, `scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js`),
        "debug.addIndicators": path.resolve(`node_modules`, `scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js`),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: `./src/index.html`,
      filename: `./index.html`,
      favicon: `./src/images/favicon.png`,
    })],
};
