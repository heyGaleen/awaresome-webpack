// webpack.common.js
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpcakPlugin = require('html-webpack-plugin')
const FileListPlugin = require('./src/plugins/file-list-plugin')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: false,
  devServer: {
    compress: true,
    open: true
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: path.resolve(__dirname, '../loader-custom/dist/index.js')
        }]
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   type: 'asset/resource'
      // },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 1024 // 1kb
        //   }
        // }
        use: [{
          loader: 'image-webpack-loader',
          options: {
            // jpeg 压缩配置
            mozjpeg: {
              quality: 80
            }
          }
        }]
      },
      {
        test: /\.svg$/,
        type: 'asset/source'
      },
      // {
      //   test: /\.tsx$/,
      //   loader: 'babel-loader',
      //   options: {
      //     'presets': [["@babel/preset-react", {
      //       "runtime": "automatic"
      //     }],
      //     '@babel/preset-typescript']
      //   }
      // },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          "presets": [
            ["@babel/preset-react", {
              "runtime": "automatic"
            }]
          ]
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['babel-loader','ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [new ESLintPlugin({ extensions: ['.js', '.ts'] }),new HtmlWebpcakPlugin({
    template: './index.ejs'
  }),new FileListPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'src')
    },
    extensions: ['.jsx', '.js'],
  }
}