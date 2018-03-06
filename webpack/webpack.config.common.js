let path = require('path')

module.exports = {
    entry:{
        app:path.resolve(__dirname,'./src/index.js')
    },
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "bundle.js"
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
    }

}