const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@components' : path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@store' : path.resolve(__dirname, 'src/db'),
      '@utils' : path.resolve(__dirname, 'src/utils'),
    },
  },
  
  module: {
    rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {loader: 'babel-loader', options:{ presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],},},
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
    ]
  },
  
  plugins:[
    new HtmlWebpackPlugin({
      template: "src/public/index.html", // create a template to start from
    }),
  ],

  devServer: {
    static: './dist',
    historyApiFallback: true,
    port: 3000, // Port to run the development server on
    hot: true, // Enable hot module replacement
  },
}