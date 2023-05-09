const mongoose = require("mongoose");
const ChatSchema = mongoose.Schema({
  profil: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profil",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);
