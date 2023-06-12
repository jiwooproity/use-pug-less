const path = require("path");
const lessMiddleware = require("less-middleware");

const express = require("express");
const app = express();
const port = 3000;

// View Engine으로 Pug 사용 및 Pug 디렉토리 제공
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "pug");

// 정적 디렉토리 제공
app.use(lessMiddleware(path.resolve("./public/less")));
app.use(express.static(path.resolve("./public/less")));

// 정적 디렉토리 제공 ( 이미지 등 .. )
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.render("index");
});

// app.get("/home", (req, res) => {
//   res.render("home");
// });

app.listen(port);
