const express = require("express");
const router = express.Router();

// Models
const users = require("../models/users");

// New User
router.get("/users/add", (req, res) => {
  res.render("users/new-user");
});

router.post("/users/new-user", (req, res) => {
  const { userName, email, firstName, lastName, age } = req.body;
  const errors = [];
  if (!userName) {
    errors.push({ text: "write a userName." });
  }
  if (!email) {
    errors.push({ text: "write a email." });
  }
  if (!firstName) {
    errors.push({ text: "write a firstName." });
  }
  if (!lastName) {
    errors.push({ text: "write a lastName." });
  }
  if (!age) {
    errors.push({ text: "write a age." });
  }
  if (errors.length > 0) {
    res.render("users/new-user", {
      errors,
      userName,
      email,
      firstName,
      lastName,
      age
    });
  } else {
    const newUser = new users({
      userName,
      email,
      firstName,
      lastName,
      age
    });
    newUser.save();
    res.redirect("/users");
  }
});

// Users Route
router.get("/users", async (req, res) => {
  const allUsers = await users.find();
  res.render("users/all-users", { allUsers });
});

// Edit Route
router.get("/users/edit/:id", async (req, res) => {
  const id = req.params.id;
  const user = await users.findById(id);
  res.render("users/edit-user", { user });
});

router.put("/users/edit-user/:id", async (req, res) => {
  const { userName, email, firstName, lastName, age } = req.body;

  await users.findByIdAndUpdate(req.params.id, {
    userName,
    email,
    firstName,
    lastName,
    age
  });
  res.redirect("/users");
});

// Delete Route
router.delete("/users/delete/:id", async (req, res) => {
  const id = req.params.id;
  await users.findByIdAndDelete(id);
  res.redirect("/users");
});

// Exports
module.exports = router;
