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
      required: [true, "Please enter the caption"],
      trim: true,
    },
    statutProfile: {
      type: String,
      required: [true, "Please enter the statut"],
      trim: true,
      maxLength: 16,
      enum: ["sender", "recipient"],
      default: "sender",
    },
    statut: {
      type: String,
      maxLength: 16,
      enum: ["in progress", "Colis", "archives"],
      default: "in progress",
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

module.exports = mongoose.model("Annonce", annonceSchema);
