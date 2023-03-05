const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const profilSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: "User",
    unique: true,
  },

  tokens: {
    token: {
      type: String,
      default: "",
    },
    expireAt: {
      type: Date,
      default: Date.now() + 24 * 60 * 60 * 5000,
    },
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
  },
  listAnnonce: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  listProposal: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],
  listColisLiv: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colis",
    },
  ],
  listColisDest: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colis",
    },
  ],
  listColisExp: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colis",
    },
  ],
  listReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  listChanel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  createdAt: { type: Date, default: Date.now },
 
  friendship: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profil",
    },
  ],
  friendshipCount: { type: Number, default: 0 },
});
profilSchema.plugin(uniqueValidator);

profilSchema.pre("save", async function (next) {
  this.tokens = {
    token: await this.getToken(),
    expireAt: Date.now() + 24 * 60 * 60 * 5000,
  };
  next();
});

profilSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
profilSchema.methods.refreshToken =async function () {
  this.tokens = {
    token: await this.getToken(),
    expireAt: Date.now() + 24 * 60 * 60 * 5000,
  };
  return await this.save();
};

profilSchema.methods.insertReview = async function (idReview) {
  // methode ajoute nouveau review
  try {
    if (this.listReview.indexOf(idReview) === -1) {
      this.listReview.push(idReview);
    
    }

    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.insertProposal = async function (idProposal) {
  // methode ajoute nouveau Proposal
  try {
    if (this.listProposal.indexOf(idProposal) === -1) {
      this.listProposal.push(idProposal);
     
    }

    return await this.save();
  } catch (error) {
    return error;
  }
};

profilSchema.methods.insertFreind = async function (idFriend) {
  // methode ajoute nouveau amis
  try {
    if (this.friendship.indexOf(idFriend) === -1) {
      this.friendship.push(idFriend);
    }
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeFreind = async function (idFriend) {
  // methode supprimer un amis
  try {
    this.friendship.remove(idFriend);
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.insertColis = async function (idColis, statut) {
  // methode ajoute nouveau colis pour Transporter
  try {
    switch (statut) {
      case "Liv":
        if (this.listColisLiv.indexOf(idColis) === -1) {
          this.listColisLiv.push(idColis);
        }
        return await this.save();
      case "Exp":
        if (this.listColisExp.indexOf(idColis) === -1) {
          this.listColisExp.push(idColis);
        }
        return await this.save();
      default:
        if (this.listColisDest.indexOf(idColis) === -1) {
          this.listColisDest.push(idColis);
        }
        return await this.save();
    }
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeColis = async function (idColis, statut) {
  // methode supprimer un colis
  try {
    switch (statut) {
      case "Liv":
        this.listColisLiv.remove(idColis);
        return await this.save();
      case "Exp":
        this.listColisExp.remove(idColis);
        return await this.save();
      default:
        this.listColisDest.remove(idColis);
        return await this.save();
    }
  } catch (error) {
    return error;
  }
};
profilSchema.methods.insertAnnonce = async function (idAnnonce) {
  // methode ajoute nouveau annonce pour permettre le user sauvgarder un annonce pour retulise comme template
  try {
    if (this.listAnnonce.indexOf(idAnnonce) === -1) {
      this.listAnnonce.push(idAnnonce);
    }
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeAnnonce = async function (idAnnonce) {
  // methode supprimer un annonce
  try {
    this.listAnnonce.remove(idAnnonce);
    return await this.save();
  } catch (error) {
    return error;
  }
};
module.exports = mongoose.model("Profil", profilSchema);
