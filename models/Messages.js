const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  author: { type: String, required: true },
  message: {
    type: String,
    maxlength: 300
  },
  time: { type: Date, default: Date.now }
});

const Messages = mongoose.model("Messages", messageSchema);

module.exports = Messages;
