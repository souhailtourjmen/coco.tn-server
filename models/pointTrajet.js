const mongoose = require("mongoose");
const pointTrajetSchema = mongoose.Schema(
  {
    code: {
        type:String,
        required: true,
        unique: true,
      },
      libelle: {
        type:String,
        required: true,
      },
  },
  { timestamps: true }
);
module.exports = mongoose.model("PointTrajet", pointTrajetSchema);