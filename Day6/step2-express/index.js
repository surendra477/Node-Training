const express = require("express")
const app = express();

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/public/home.html");
// });
// app.get("/product", function (req, res) {
//   res.sendFile(__dirname + "/public/product.html");
// });
// app.get("/about", function (req, res) {
//   res.sendFile(__dirname + "/public/about.html");
// });   

// app.use(express.static(__dirname + "/public"));
app.use(express.static(`${__dirname}/public`));
app.listen(3000,"localhost",function(error){
    if(error){
        console.log("Error : ",error);
    }else{
        console.log("server is running on port number 3000");
    }
})