const mongoose = require("mongoose");

const proposalSchema = mongoose.Schema({
  profil: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profil",
    required: true,
  },
  Annonce: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Annonce",
    required: true,
  },
  text: {
    type: String,
    required: [true, "Please enter the propostion"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },
  proposalDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["Accepted", "Sending", "Archived"],
    default: "Sending",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Proposal", proposalSchema);
