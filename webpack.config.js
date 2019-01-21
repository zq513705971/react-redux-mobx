'use strict';
let webpack = require('webpack');
let path = require('path');
/**
 * 提取css到单独文件
 * npm install --save-dev mini-css-extract-plugin
 */
let miniCssExtractPlugin = require("mini-css-extract-plugin");
/**
 * js 压缩
 * npm install uglifyjs-webpack-plugin --save-dev
 */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
/**
 * css 压缩 会清除css中注释
 * npm install --save-dev optimize-css-assets-webpack-plugin
 */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

let mode = "development";
//let mode = "production";

console.log(path.join(__dirname, '/src/index.js'))

let config = {
    mode: mode,
    entry: {
        index: path.join(__dirname, '/src/index.js')
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, '/dist')
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new miniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [
                miniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash:5].[ext]'
                }
            }]
        }]
    },
    optimization: {
        /**
         * 分包
         */
        // splitChunks: {
        //     chunks: 'all',
        //     minSize: 30000,
        //     maxSize: 0
        // },
        // minimizer: [
        //     new UglifyJsPlugin({
        //         cache: true,
        //         parallel: true,
        //         /**
        //         *  sourceMap 和 devtool: 'inline-source-map', 冲突
        //         */
        //         sourceMap: false, // set to true if you want JS source maps, 
        //         /**
        //         *  extractComments 导出备注
        //         */
        //         extractComments: 'all'
        //     }),
        //     new OptimizeCSSAssetsPlugin({})
        // ]
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        historyApiFallback: true,
        port: '3001',
        inline: true,//实时刷新
        hot: true
    }
};

module.exports = config;