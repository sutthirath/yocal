const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Messages = require("../models/Messages");

// Get all messages from chat history
router.get("/", (req, res) => {
  Messages.find({}, (err, msg) => {
    res.send(msg);
  });
});

// Stores the chat messages
router.post("/", (req, res) => {
  Messages.create({
    author: req.body.author,
    message: req.body.message,
    time: req.body.time
  });
  console.log(Messages);
});

module.exports = router;
