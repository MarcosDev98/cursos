const { route } = require(".");

const router = require("express").Router();

router.get("/users", (req, res) => {
  res.send("Users");
});

router.get("/users/signin", (req, res) => {
  res.send("Ingresando a la aplicación.");
});

router.get("/users/signup", (req, res) => {
  res.send("Formulario de Autenticación.");
});

module.exports = router;
