let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(webpackCommonConfig, {

    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new UglifyJsPlugin()
    ]
})