let fs = require("fs")
fs.readFile("data.json",function(err,data){
    if(err){
        console.log(err);
    }else{
        let hdata = JSON.parse(data)
        console.log(hdata.heroes[0].title);
    }
})

// fs.readFile("./data.json", function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     let hdata = JSON.parse(data);
//     console.log(hdata.heroes[0].title);
//   }
// });