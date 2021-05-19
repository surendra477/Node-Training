const express = require("express");
const app = express();
const data = require("./data.json");
// app.get("/",(req,res) => {
//     res.sendFile(__dirname + "/data.json")
// })
app.use(express.static(`${__dirname}/public`));
// app.use(express.static(`${__dirname}/public`));
// app.get("/", (req, res) => {
//   res.send("Hello Your in main page");
// });
app.get("/data", (req, res) => {
  res.send(data);
});
app.listen(5000, "localhost", (error) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("server is now live in localhost 5000");
  }
});
