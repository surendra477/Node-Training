const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: "Welcome to Index Page",
    heroes: ["Ironman", "Captain America", "Hulk", "Doctor Strange"],
  });
});

app.get("/about", (req, res) => {
  res.render("index.ejs", {
    title: "wellcome to about page",
    heroes: ["Ironman", "Captain America", "Hulk", "Doctor Strange"],
  });
});
app.get("/contact", (req, res) => {
  res.render("index.ejs", {
    title: "wellcome to contact page",
    heroes: ["Ironman", "Captain America",  "Doctor Strange"],
  });
});
app.listen(3000, "localhost", function (error) {
  if (error) {
    console.log("Error : ", error);
  } else {
    console.log("server is running on port number 3000");
  }
});