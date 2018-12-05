const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  venueId: { type: String, unique: true, require: true },
  name: String,
  city: String,
  state: String,
  photo: String
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
