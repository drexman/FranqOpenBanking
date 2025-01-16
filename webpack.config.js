const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/Components'),
      '@config': path.resolve(__dirname, 'src/Config'),
      '@page': path.resolve(__dirname, 'src/Pages'),
      '@routes': path.resolve(__dirname, 'src/Routes'),
      '@services': path.resolve(__dirname, 'src/Services'),
      '@utils': path.resolve(__dirname, 'src/Utils'),
    },
  },
  module: {
    rules: [
        {
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        },
        {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
}