const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const assetsPath = path.join(__dirname, "public");
const { body, validationResult } = require("express-validator");

//static path
app.use(express.static(assetsPath));

//use main js file
app.use(express.static('public'));

//parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routers
app.use("/", indexRouter);
app.use("/", newRouter);

//set veiw engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
