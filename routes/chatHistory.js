const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Messages = require("../models/Messages");

router.post("/", (req, res) => {
  Messages.create({
    author: req.body.author,
    message: req.body.message,
    time: req.body.time
  });
  console.log(Messages);
});

module.exports = router;
