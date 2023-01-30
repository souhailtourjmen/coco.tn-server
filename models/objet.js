const mongoose = require("mongoose");
const objetSchema = mongoose.Schema(
  {
    nom: {
        type: String,
        maxlength: 54,
      },
      taile: {
        type: String,
        maxlength: 16,
      },
      langeur: {
        type: String,
        maxlength: 16,
      },
      hauteur: {
        type: String,
        maxlength: 16,
      },
      poids: {
        type: String,
        maxlength: 16,
      },
    
  },
 
);
module.exports = mongoose.model("Objet", objetSchema);