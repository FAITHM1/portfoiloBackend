//dependencies
const express = require("express");
const cors = require("cors");
//importing json file
const projects = require("./project.json");
const about = require("./about.json");
//app
const app = express();
//middle ware
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
//project route to get data
app.get("/projects", (req, res) => {
  res.json(projects);
});
app.get("/about", (req, res) => {
  res.json(about);
});

const PORT = process.env.PORT || 4501;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
