let http = require('http');
let port = 1010;
let host = "localhost"

let server = http.createServer(function(request,res){
    res.writeHead(200,{
        "Content-Type" : "text/html"
    })
    if(request.url === "/index.html") {
      res.write("<h1>index page</h1>");
      res.end();
    }else if(request.url === "/"){
           res.write("<h2>main page</h2>")
    }
    
    else if (request.url === "/about.html") {
      res.write("<h1>about page</h1>");
      res.end();
    } else if (request.url === "/contact.html") {
      res.write("<h1>contact page</h1>");
      res.end();
    }else{
          res.writeHead(404, {
            "Content-Type": "text/html",
          });
            res.write("<h1>Requested page not found </h1>");
            res.end();
    }
})

server.listen(port,host,function(error){
    if(error){
        console.log(error);
    }else{
        console.log("web server is running in "+host + " "+port);
    }
})