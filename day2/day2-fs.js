var fs = require('fs')
fs.writeFileSync("file","text") //we cannot use a callback in this fun 
fs.writeFile('krishna.txt',"welcome to krishna life",function(error){
    if(error){
        console.log("Error :" ,error);
    }else{
        console.log("File created ...");
    }
})

// console.log("line num 10");