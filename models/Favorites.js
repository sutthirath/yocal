const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  place: {
    name: String,
    location: String
  }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
