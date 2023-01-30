const mongoose = require("mongoose");
const colisSchema = mongoose.Schema(
  {
   id_Annonce:{ type: mongoose.Schema.ObjectId, required: true, ref:"Annonce" },
   id_Transporteur:{ type: mongoose.Schema.ObjectId, required: true, ref:"Profil" },
   id_Expediteur:{ type: mongoose.Schema.ObjectId, required: true, ref:"Profil" },
   id_Distinataire:{ type: mongoose.Schema.ObjectId, required: true, ref:"Profil" },
    statut:{ type: mongoose.Schema.ObjectId, required: true, ref: "StatutColis" },
    created: {
        type: Date,
        default: Date.now,
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Colis", colisSchema);
