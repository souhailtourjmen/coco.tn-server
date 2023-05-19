const mongoose = require("mongoose");
const documentSchema = mongoose.Schema(
  {
    path: {
      type: String,
    },
    name: {
        type: String,
    },
    typeDocument: {
      type: String,
      enum: ["Identity card", "Driver's licence", "Student card","All"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
