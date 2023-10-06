const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    if (req.url === '/') {
        let doc = `<html> <head> </head> <body> <h1> <a href = "/sub"> 메인입니다. </a> </h1> </body> </html>`;
        res.end(doc);
    }
    if (req.url === '/sub') {
        let doc1 = `<html> <head> </head> <body> <h1> <a href = "/"> 서브입니다. </a> </h1> </body> </html>`;
        res.end(doc1);
    }
});
server.listen(1234);
