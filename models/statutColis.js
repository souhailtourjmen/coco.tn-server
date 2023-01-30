const mongoose = require("mongoose");
const statutColisSchema = mongoose.Schema(
  {
    statut: {
        type: String,
        enum: ['enregistré','en transit','recupérer','non livré','livré','retour'],
        default: 'enregistré'
      },
  },
  { timestamps: true }
);

module.exports = mongoose.model("StatutColis", statutColisSchema);
