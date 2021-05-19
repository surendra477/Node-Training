const fs = require("fs")
//Read a file


// const stream = fs.createReadStream("sample.txt")
// stream.on("data",(data) => {
//     console.log(data);
// })
const data = "written by stream man"
const stream = fs.createWriteStream("data.txt");
stream.write(data)