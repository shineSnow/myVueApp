let express = require('express');
let webpack = require('webpack')
let webpackDevMiddleware = require('webpack-dev-middleware')
let webpackHotMiddleware = require('webpack-hot-middleware')
let webpackDevConfig = require('./webpack/webpack.config.dev')
let proxy = require('http-proxy-middleware')
let proxyConfig = require('./proxy.config')
let app = express();
let port = 3000

let compiler = webpack(webpackDevConfig)

// attach to the compiler & the servery
app.use(webpackDevMiddleware(compiler, {
// public path should be the same with webpack config
    publicPath:webpackDevConfig.output.publicPath,
    noInfo:true,
    stats: {
        colors: true
    }
}))

app.use(webpackHotMiddleware(compiler))

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

app.use('/',proxy(proxyConfig))

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});