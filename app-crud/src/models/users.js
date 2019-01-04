const mongosse = require("mongoose");
const { Schema } = mongosse;

const userSchema = new Schema({
  userName: {
    type: String,
    require: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  age: {
    type: Number,
    required: true
  }
});

// exports
module.exports = mongosse.model("users", userSchema);
