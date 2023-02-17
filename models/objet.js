const mongoose = require("mongoose");
const objetSchema = mongoose.Schema(
  {
    name: {
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
      images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
    
  },
 
);
module.exports = mongoose.model("Objet", objetSchema);