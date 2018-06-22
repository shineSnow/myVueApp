let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        alias:{
            VIEW: path.resolve(__dirname, "../src/views"),
            CMP:path.resolve(__dirname, "../src/components")
        },
        extensions: ['.js', '.css', '.vue', '.json']
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                use:['file-loader']
            },
            {
                test:/\.json$/,
                use:['json-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'vueApp',
            template:path.resolve(__dirname,'../index.html'),
            inject:'body'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor', 'manifest'],
            minChunks: Infinity,
        }),
        new CleanWebpackPlugin([path.resolve(__dirname,'../dist')])
    ]

}