const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const app = express();

mongoose.connect(keys.mongoURI);

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

app.listen(5000);
