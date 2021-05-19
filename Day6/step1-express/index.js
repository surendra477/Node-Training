const express = require("express")
const app = express();
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/product", function (req, res) {
  res.sendFile(__dirname + "/product.html");
});
app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/about.html");
});
app.listen(3000,"localhost",function(error){
    if(error){
        console.log("Error : ",error);
    }else{
        console.log("server is running on port number 3000");
    }
})