const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema(
  {

    comment:{
        type: String,
    },
    note:{
        type: Number ,
        required:true
    },
    idColis:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref: "Colis" },
    /* car il y a list des review chez profil Transporter */
    // id_Transporter:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
    idProfil:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Review", reviewSchema);
