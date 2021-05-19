const http = require("http");
let config = require("./config.json");
const fs = require("fs");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // fs.readFile("."+req.url);
  console.log("." + req.url);
  if (req.url === "/") {
    fs.readFile("./home.html", function (error, data) {
      if (data) {
        res.end(data + "");
      }
    });
  } else {
    fs.readFile("./" + req.url, function (error, data) {
      if (data) {
        res.end(data + "");
      } else {
        // console.log(error)
        res.end("<h1>404 : requested page not found</h1>");
      }
    });
  }
});

server.listen(config.port, config.host, (error) => {
  if (error) {
    console.log("Error : ", error);
  } else {
    console.log("server is now live on localhost : 2020");
  }
});
