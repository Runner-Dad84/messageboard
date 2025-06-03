const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const assetsPath = path.join(__dirname, "public");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/", newRouter);


const links = [
    { href: "/", text: "Home" },
    { href: "/messages", text: "Messages" }
];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.get("/", (req, res) => {
    res.render("index", { links: links, messages: messages });
  });

const PORT = 3012;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
