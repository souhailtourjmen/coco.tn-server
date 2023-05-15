const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const colisSchema = mongoose.Schema(
  {
    idAnnonce: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Annonce",
    },

    proposal_Accept: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Proposal",
    },
    statut: [
      {
        statutColis: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "StatutColis",
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
// Ensure that idAnnonce and proposal_Accept combination is unique
colisSchema.index({ idAnnonce: 1, proposal_Accept: 1 }, { unique: true });
colisSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Colis", colisSchema);
