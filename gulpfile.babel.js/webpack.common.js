import webpack                from 'webpack'
import EncodingPlugin         from 'webpack-encoding-plugin'
import path                   from 'path'
import {paths}                from './config.js'

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  cache    : true,
  output   : {
    filename : '[name].bundle.js',
  },
  // optimization: {
  //   splitChunks: {
  //     name   : 'vendor',
  //     chunks : 'initial',
  //   }
  // },
  plugins  : [
  //new BundleAnalyzerPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new EncodingPlugin({
    encoding: 'utf-8'
  }),
  new webpack.ProvidePlugin({
    $                : 'jquery/dist/jquery',
    jQuery           : 'jquery/dist/jquery',
    objectFitImages  : 'object-fit-images',
    anime            : ['animejs/lib/anime.es.js', 'default'],
    //lazySizes        : 'lazysizes',
    picturefill      : 'picturefill',
    // Barba            : 'barba.js',
    //Rellax           : 'rellax'
  })
  ],
  module: {
    rules: [
    {
      test: /\.js$/,
      exclude: /node_modules\/(?!(dom7|swiper)\/).*/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    },
    {
      test: /\.ts$/,
      use: [
      { loader: "babel-loader" },
      { loader: "ts-loader" }
      ],
      exclude: /node_modules/
    }
    ]
  },
  resolve: {
    modules    : ["node_modules"],
    extensions : ['.ts', '.js'],
    alias      : {
      '@as'         : paths.assetsDir,
      '@js'         : paths.jsSrcDir,
      '@ts'         : paths.tsSrcDir
    }
  }
};