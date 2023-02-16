const mongoose = require("mongoose");
const colisSchema = mongoose.Schema(
  {
    idAnnonce: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Annonce",
    },
    proposition_Accept: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Proposition",
    },
    statut:[ {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "StatutColis",
    }],
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Colis", colisSchema);
