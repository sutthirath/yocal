const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  venueId: String
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
