var express = require('express');
var app = express();
let port = 8080

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});