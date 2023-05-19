const mongoose = require("mongoose");
const requestUpgradeRoleSchema = mongoose.Schema(
  {
    idDocuments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Document",
      },
    ],
    idProfil: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Profil",
    },
    status: [
      {
        _status: {
          type: String,
          enum: [
            "Awaiting documentation",
            "Pending",
            "Processing",
            "In progress",
            "Validated",
            "Refused",
            "In process",
          ],
          default: "In progress",
        },
        updatedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);
module.exports = mongoose.model("RequestUpgradeRole", requestUpgradeRoleSchema);
