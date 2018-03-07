let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')

module.exports = merge(webpackCommonConfig, {
    entry: {
        index: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname,'./src/index.js')
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('develop')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})