const Path = require("path");
const express = require("express");
const morgan = require("morgan");
// const handlebars = require("express-handlebars");
const { engine } = require("express-handlebars");
const app = express();
const port = 5001;

const route = require("./routes");

app.use(express.static(Path.join(__dirname, "public")));
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine
// app.engine("handlebars", handlebars());
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", Path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
