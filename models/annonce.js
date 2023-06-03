const mongoose = require("mongoose");
const annonceSchema = mongoose.Schema(
  {
    profilexp: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profil",
    },
    profilDest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profil",
    },
    description: {
      type: String,
      trim: true,
    },
    statutProfile: {
      type: String,
      enum: ["Sender", "Receiver"],
      default: "Sender",
    },
    statut: {
      type: String,
      enum: ["In progress", "Annouce", "Archives"],
      default: "Annouce",
    },
    contents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter the Objet "],
        ref: "Content",
      },
    ],
    dateExp: {
      type: Date,
    },
    dateLiv: {
      type: Date,
    },
    locationExp: {
      type: { type: String },
      coordinates: [],
    },
    locationDist: {
      type: { type: String },
      coordinates: [],
    },

    pointTrajets: {
      pointExp: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter the Address pointExp "],
        ref: "Address",
      },
      pointDist: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter the Address pointDist"],
        ref: "Address",
      },
    },

    listProposal: [{ type: mongoose.Schema.Types.ObjectId, ref: "Proposal" }],
    price: {
      type: Number,
      default: 0,
    },
    expire: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
annonceSchema.methods.insertProposal = async function (idProposal) {
  // methode ajoute nouveau proposal
  try {
    if (this.listProposal.indexOf(idProposal) === -1) {
      this.listProposal.push(idProposal);
    }

    return await this.save();
  } catch (error) {
    return error;
  }
};
annonceSchema.index({ "pointTrajets.pointExp.location": "2dsphere" });
annonceSchema.index({ "pointTrajets.pointDist.location": "2dsphere" });
annonceSchema.index({ "pointTrajets.pointExp.city": 1 });
annonceSchema.index({ "pointTrajets.pointDist.city": 1 });
annonceSchema.index({ locationExp: "2dsphere" });
annonceSchema.index({ locationDist: "2dsphere" });
module.exports = mongoose.model("Annonce", annonceSchema);
