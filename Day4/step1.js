const fs = require('fs')
// fs.writeFile('temp.txt','wellcome to your life' , function(err){
//     if(err){
//         console.log("Error: ", err);
//     }else{
//         console.log("file is now created");
//     }
// })


if(fs.existsSync('temp')){
    console.log("the file is created already");
    console.log(process.cwd());
    process.chdir("temp")
    console.log(process.cwd());

    process.chdir('../')
    console.log(process.cwd());
    //fs.rmdirSync("temp")
}else{
fs.mkdir("temp",function(err){
      if(err){
          console.log("Error: ", err);
      }else{
          console.log("file is now created");
      }
})}