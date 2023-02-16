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
    objets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter the Objet "],
        ref: "Objet",
      },
    ],
    objetCount: {
      type: Number,
      default: 1,
    },
    dateExp: {
      type: Date,
    },
    dateLiv: {
      type: Date,
    },
    pointTrajets: {
      pointExp: {
        type: String,
        required: [true, "Please enter the caption"],
        trim: true,
      },
      pointDist: {
        type: String,
        required: [true, "Please enter the caption"],
        trim: true,
      },
    },

   
    
    listPropositions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Proposition" },
    ],
    propositionCount: {
      type: Number,
      default: 0,
    },
    prix: {
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
annonceSchema.methods.insertPropositions = async function (idProposition) {
  // methode ajoute nouveau proposition
  try {
    if (this.listPropositions.indexOf(idProposition) === -1) {
      this.listPropositions.push(idProposition);
      this.propositionCount = this.listPropositions.length;
    }

    return await this.save();
  } catch (error) {
    return error;
  }
};

module.exports = mongoose.model("Annonce", annonceSchema);
