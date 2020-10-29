const express = require('express');
const router = express.Router();
const { test } = require("../controllers/categoryController");


router.get('/', test);




module.exports = router;
