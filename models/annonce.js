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

   
    
    listProposal: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Proposition" },
    ],
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
