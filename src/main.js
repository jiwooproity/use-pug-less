const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

app.set("views", path.resolve(__dirname, "./views"));
app.set("views", path.resolve(__dirname, "./test"));
app.set("view engine", "pug");

app.get("/artist", (req, res) => {
  const { group } = req.query;
  res.render("group", { group });
});

app.get("/test/:id", (req, res) => {
  const { id } = req.params;
  res.render("test", { id });
});

app.get("/:nickname", (req, res) => {
  const { nickname } = req.params;
  res.render("index", { nickname });
});

app.listen(port, () => {
  console.log(`online to ${port}`);
});
