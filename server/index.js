const express = require("express");
const app = express();

const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = express.Router();
const PORT = 5000;

let User = require("./models/User");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

userRoutes.route("/").get(function(req, res) {
  User.find(function(err, users) {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

userRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, user) {
    res.json(user);
  });
});

userRoutes.route("/add").post(function(req, res) {
  let user = new User(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json({ user: "user added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new user failed" + err);
    });
});

userRoutes.route("/update/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (!user) {
      res.status(404).send("data is not found");
    } else {
      user.id = req.body.id;
      // user.user_name = req.body.user_name;
      // user.user_username = req.body.user_username;
      // user.user_email = req.body.user_email;
      // user.user_phone = req.body.user_phone;
      // user.user_website = req.body.user_website;

      user
        .save()
        .then(user => {
          res.json("User updated");
        })
        .catch(err => {
          res.status(400).send("Update not possible" + err);
        });
    }
  });
});

app.use("/users", userRoutes);

app.listen(PORT);
