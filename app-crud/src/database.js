const moongose = require("mongoose");

// Settings
const url = "mongodb://localhost/app-crud-db";
const opts = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
};

// Connect
moongose
  .connect(
    url,
    opts
  )
  .then(db => console.log("DB is connected"))
  .catch(err => console.log(err));
