var http = require('http');
var Addition=require('./Addition.js');
console.log(Addition.AddNumber(3,2));

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World v1.0:' + Addition.AddNumber(2,2));
}).listen(8080);
