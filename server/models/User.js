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
    required: [true, "Please enter an author"]
  },
  username: {
    type: String,
    required: [true, "Please enter the ISBN"],
    unique: true
  },
  email: {
    type: String,
    required: [true, "Please enter a description"],
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

mongoose.model("users", userSchema);
