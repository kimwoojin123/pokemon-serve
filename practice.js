const http = require('http');

const server = http.createServer(function(req, res){
  
  
  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8'});
  if(req.url === "/"){
    let doc = `<html> <head> </head> <body> <h1> <a href = "http://localhost:1234/load"> 메인입니다. </a> </h1> </body> </html>`
    res.setTimeout(2000, ()=>{
    res.end(doc)
    })
  }
  if(req.url === "/load"){
    let doc2 = `<html> <head> <meta http-equiv="Refresh" content="2;url=http://localhost:1234/sub" /> </head> <body> <h1> 로딩중입니다. </h1> </body> </html>`
    res.end(doc2)
  }

  if(req.url === "/sub"){
    let doc1 = `<html> <head> </head> <body> <h1> <a href = "http://localhost:1234"> 서브입니다. </a> </h1> </body> </html>`
    res.end(doc1)
}})
server.listen(1234)