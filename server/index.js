const express = require("express");
const app = express();

const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", userRoutes);

app.listen(PORT);
