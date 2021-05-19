const express = require("express")
const mongo = require("mongojs")
const bodyparser = require("body-parser")
let app = express();
app.use(express.static(__dirname+"/public"))
let db = mongo("surendra",["friends"])
app.get("/data",(req,res) => {
    //res.send("hello from express - mongodb")
    db.friends.find(function(error,documents){
        res.send(documents);
    })
})

app.post("/datas",(req,res) => {
    db.friends.insert(req.body, (error, document) => {
      if (error) {
        console.log(error);
      } else {
        res.send(document);
      }
    });
}

)

app.listen(3030);
console.log("server is now live in port 3030");