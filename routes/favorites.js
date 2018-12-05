const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Favorite = require("../models/Favorite");
const User = require("../models/User");

// Get all favorites from current user
router.get("/", (req, res) => {
  Favorite.find({}, (err, favorite) => {
    console.log(favorite);
  });
});

// Posting favorite to current user
router.post("/", (req, res) => {
  Favorite.create({ venueId: req.body.venueId }, (err, favorite) => {
    User.findById(req.body.id, (err, user) => {
      user.favorites.push(favorite._id);
      user.save();
    });
  });
});

module.exports = router;
