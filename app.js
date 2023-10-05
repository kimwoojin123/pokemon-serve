const http = require('http');

const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  
  let doc = `<html> <head> </head> <body> <h1> hello </h1> </body> </html>`
  
  res.end(doc)
});

server.listen(1234);