const path = require("path");
// less 스타일시트 언어 컴파일
const lessMiddleware = require("less-middleware");

const express = require("express");
const app = express();
const port = 3000;

// View Engine으로 Pug 사용 및 Pug 디렉토리 제공
app.set("views", path.resolve(__dirname, "./views"));
app.set("view engine", "pug");

// 정적 디렉토리 제공
app.use(lessMiddleware(path.resolve(__dirname, "./styles")));
app.use(express.static(path.resolve(__dirname, "./styles")));

app.get("/artist", (req, res) => {
  let { group, description, songs } = req.query;
  songs = songs.split(",");
  res.render("group", { group, description, songs });
});

app.get("/:nickname", (req, res) => {
  const { nickname } = req.params;
  res.render("index", { nickname });
});

app.listen(port);
