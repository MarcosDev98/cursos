const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.send("Notess");
});

module.exports = router;
