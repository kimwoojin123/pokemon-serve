const http = require('http');


const server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'text/html;charset=utf-8'});
  if(req.url === "/"){
    let doc = 
    `<html>
    <head>
    </head>
    <body>
    <a onClick="main()"> 메인입니다. </a>
    <script> 
    function main() {
      setTimeout(function(){
        location.href = "http://localhost:1234/sub"
      },2000)
    }
    </script>
    </body> </html>`
    res.end(doc)
  }
  if(req.url === "/sub"){
    let doc1 = 
    `<html> 
    <head> 
    </head> 
    <body> 
    <a onclick = "main()"> 서브입니다. </a> 
    <script>
    function main() {
      setTimeout(function(){
        location.href = "http://localhost:1234"
      },2000)
    }
    </script>
    </body> 
    </html>`
    res.end(doc1)
  }
})

server.listen(1234)

