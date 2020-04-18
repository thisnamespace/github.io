const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/react'],
        plugins: ['transform-class-properties']
      }
    }, {
      test: /\.html$/,
      use: [{loader: "html-loader"}]
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.styl$/,
      use: [{loader: "style-loader"},{loader: "css-loader"},{loader: "stylus-loader"}]
    },{
				test: /\.(woff2?|ttf|otf|eot|svg|png|jpg)$/,
				exclude: /node_modules/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			}]
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};