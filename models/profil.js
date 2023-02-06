const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const profilSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: "User",
    unique : true
  },
  statut:[{
    type: String,
    default: "annonceur",
  }],
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  listAnnonce: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  annonceCount: {
    type: Number,
    default: 0,
  },
  listColis: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colis",
    },
  ],
  colisCount: {
    type: Number,
    default: 0,
  },
  listReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  reviewCount: {
    type: Number,
    default: 0,
  },
  listChanel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  channelCount: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
  expireAt: {
    type: Date,
    default: Date.now() + 24 * 60 * 60 * 1000,
  },
});
profilSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Profil", profilSchema);
