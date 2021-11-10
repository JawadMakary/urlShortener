const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
// get from the DB
// params
router.get("/:code", indexController.getShortUrl);
module.exports = router;
