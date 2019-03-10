// Importing important packages
const express = require("express");

// Using express and routes
const app = express();
const userRoutes = express.Router();
let User = require("../models/User");

//also works
userRoutes.route("/delete/:id").get(function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, user) {
    if (err) res.json(err);
    else res.json("User Deleted Successfully");
  });
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
      user.name = req.body.name;
      user.username = req.body.username;
      user.email = req.body.email;
      user.phone = req.body.phone;
      user.website = req.body.website;

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

// userRoutes.route("/delete/:id").delete(function(req, res) {
//   User.findById(req.params.id, function(err, user) {
//     if (!user) {
//       res.status(404).send("Nothing to delete");
//     } else {
//       user
//         .delete()
//         .then(user => {
//           res.json("User deleted");
//         })
//         .catch(err => {
//           res.status(400).send("Nothing to delete" + err);
//         });
//     }
//   });
// });
app.use("/users", userRoutes);

module.exports = userRoutes;
