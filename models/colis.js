const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const colisSchema = mongoose.Schema(
  {
    idAnnonce: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Annonce",
      unique: true,
    },
    
    proposal_Accept: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Proposal",
    },
    statut:[ {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "StatutColis",
      
    } ],
    
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
colisSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Colis", colisSchema);
