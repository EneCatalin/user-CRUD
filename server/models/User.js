const mongoose = require("mongoose");
const { Schema } = mongoose;
// const Schema = mongoose.Schema;
// const {Schema} = mongoose; same as const Schema=mongoose.Schema

const userSchema = new Schema({
  id: {
    type: Number,
    required: [true, "Please enter an id"],
    unique: true
  },
  name: {
    type: String,
    required: [true, "Please enter a name"]
  },
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true
  },
  phone: {
    type: Number,
    required: [true, "Please enter a phone number"],
    unique: true
  },
  website: {
    type: String,
    required: [true, "Please enter a website"],
    unique: true
  }
});

module.exports = mongoose.model("user", userSchema);
