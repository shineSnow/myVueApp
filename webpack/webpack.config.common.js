let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry:{
        app:path.resolve(__dirname,'./src/index.js')
    },
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename: "bundle.js",
        publicPath: "/"
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
            title:'vue app',
            template:path.resolve(__dirname,'./index.tpl.html'),
            inject:'body'
        }),
        new CleanWebpackPlugin(['./dist'])
    ]

}