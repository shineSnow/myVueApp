let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const vendors = require('./vendor')

module.exports = merge(webpackCommonConfig, {
    entry:{
        index:path.resolve(__dirname, '../src/index.js'),
        vendor:[...vendors]
    },
    output:{
        filename: "[name].[chunkhash].js",
        publicPath:'./'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                exclude:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                include:[path.join(__dirname,'../src')],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.css$/,
                include:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                exclude:[path.join(__dirname,'../src')],
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new UglifyJsPlugin(),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        }),
        new ExtractTextPlugin("styles.css")
    ]
})