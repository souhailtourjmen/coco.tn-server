const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const roleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      enum: ['Transporter','announcer','guest','admin'],
      default: 'announcer'
    },
    code: {
      type: String,
      enum: ['63d9','63d8','63d5','63d1'],
      default: '63d8'
    },

  },
  { timestamps: true }
);
roleSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Role", roleSchema);
