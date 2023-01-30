const mongoose = require("mongoose");
const annonceSchema = mongoose.Schema(
  {
    profil: {
      type: mongoose.Schema.ObjectId,
      ref: "Profil",
      required: true,
    },
    description: {
      type: String,
      required: [true, "Please enter the caption"],
      trim: true,
    },
    objets: [
      {
        type: mongoose.Schema.ObjectId,
        required: [true, "Please enter the Objet "],
        ref: "Objet",
      },
    ],
    objetCount: {
      type: Number,
      default: 1,
    },
    dateExp:{
        type: Date,
    },
    dateLiv:{
        type: Date,
    },
    pointTrajets:{
        pointExp:{ type: mongoose.Schema.ObjectId, required: true, ref: "PointTrajet" },
        pointDist:{ type: mongoose.Schema.ObjectId, required: true, ref: "PointTrajet" },
    },
    users:{
        userExp:{ type: mongoose.Schema.ObjectId, required: true, ref: "Profil" },
        userDist:{ type: mongoose.Schema.ObjectId, required: true, ref: "Profil" },
    },
    propositions: [{ type: mongoose.Schema.ObjectId, ref: "Proposition" }],
    propositionCount: {
      type: Number,
      default: 0,
    },
    prix: {
        type: double,
        default: 0,
      },
    expire: {
        type: Boolean,
        default: false,
      },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Annonce", annonceSchema);
