const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema(
  {
    title:{
        type: String,
        required:true,
        maxLength:50
    },
    comment:{
        type: String,
    },
    note:{
        type: Number ,
        required:true
    },
    idColis:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref: "Colis" },
    /* car il y a list des review chez profil transporteur */
    // id_Transporteur:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
    idProfil:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
