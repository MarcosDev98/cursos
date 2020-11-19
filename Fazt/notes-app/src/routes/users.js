const { route } = require(".");

const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("Users");
});

router.get("/users/signin", (req, res) => {
  res.render("users/signin");
});

router.get("/users/signup", (req, res) => {
  res.render("users/signup");
});

module.exports = router;
