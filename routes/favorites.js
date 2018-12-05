const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Favorite = require("../models/Favorite");
const User = require("../models/User");

// Get all favorites from current user
router.get("/", (req, res) => {
  Favorite.find({}, (err, favorite) => {
    res.json(favorite);
  });
});

// Posting favorite to current user
router.post("/", (req, res) => {
  Favorite.create(
    {
      venueId: req.body.venueId,
      name: req.body.name,
      city: req.body.city,
      state: req.body.state,
      photo: req.body.photo
    },
    (err, favorite) => {
      User.findById(req.body.id, (err, user) => {
        user.favorites.push(favorite._id);
        user.save();
      });
    }
  );
});

module.exports = router;
