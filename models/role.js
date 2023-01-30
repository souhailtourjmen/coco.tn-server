const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const roleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ['transporteur','annonceur','visteur','admin'],
      default: 'annonceur'
    },
  },
  { timestamps: true }
);
roleSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Role", roleSchema);
