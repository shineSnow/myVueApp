let path = require('path')
let webpack = require('webpack')
let merge = require('webpack-merge')
const webpackCommonConfig = require('./webpack.config.common.js')

module.exports = merge(webpackCommonConfig, {
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname,'../src/index.js')
        ]
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:/node_modules/,
                use:['style-loader','css-loader','postcss-loader']
            },
            {
                test:/\.css$/,
                exclude:[path.join(__dirname,'../src')],
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
})