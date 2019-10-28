
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const htmlRoutes = require("./routes/htmlRoutes.js");
const APIRoutes = require( "./routes/APIRoutes.js");
app.use(HtmlRoutes);
app.use(ApiRoutes);


db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});