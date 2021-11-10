const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");
// post to the db
router.post("/shorten", urlController.createShortUrl);
module.exports = router;
