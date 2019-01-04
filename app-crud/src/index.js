const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const methodOverride = require("method-override");

// Initialize
const app = express();
require("./database");

// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

// Middelwares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Routes
app.use(require("./routes/index"));
app.use(require("./routes/users"));

// Files Statics

// Server listtenings
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
