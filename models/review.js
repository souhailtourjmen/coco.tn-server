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
    id_colis:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref: "Colis" },
    id_Transporteur:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
    id_profil:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref:"Profil" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
