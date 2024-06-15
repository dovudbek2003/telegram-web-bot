const express = require("express");
const path = require("path");

const app = express();

app.set("views", "src/views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "Users list", className: "active" });
});

app.post("/", (req, res) => {
  res.render("index", { title: "Users list", className: "" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
