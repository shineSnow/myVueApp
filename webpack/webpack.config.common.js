let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // entry:{
    //     app:path.resolve(__dirname,'../src/index.js')
    // },
    output: {
        path:path.resolve(__dirname,'../dist'),
        filename: "bundle.js",
        publicPath: "/"
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                exclude:/node_modules/,
                use:['vue-loader']
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
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
            template:path.join(__dirname,'../index.html'),
            inject:'body'
        }),
        new CleanWebpackPlugin([path.resolve(__dirname,'../dist')])
    ]

}