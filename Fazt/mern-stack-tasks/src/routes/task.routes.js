const express = require("express");
const task = require("../models/task");
const router = express.Router();
const Task = require("../models/task");

router.get("/", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

router.post("/", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
