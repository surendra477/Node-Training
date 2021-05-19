const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs")
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
//let data = ["a", "b", "c"];
// app.get("/",function(req,res){
//  res.render("home.ejs", {
//    page_title:"Home Page",
//  ary:data
//  });
// })
let jsonData = fs.readFileSync("./heroes.json")
let datas = JSON.parse(jsonData)
app.get("/", function (req, res) {
  res.render("home.pug", {
    page_title: "Pug Page",
    ary: datas.data,
  });
});
app.post("/", function (req, res) {
  console.log("post happen");
  datas.data.push(req.body.list);
  // console.log(req.body.list);
  fs.writeFileSync("./heroes.json" , JSON.stringify(datas))
  res.redirect("/");
});
app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error : " + error);
  } else {
    console.log("server is running in port number 3000");
  }
});
