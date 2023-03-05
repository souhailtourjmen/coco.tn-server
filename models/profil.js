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
    this.listReview=insertItemInList(this.listReview, idReview);
    return await this.save();
  } catch (error) {
    return error;
  }
};

profilSchema.methods.insertFreind = async function (idFriend) {
  // methode ajoute nouveau amis
  try {
    this.friendship=insertItemInList(this.friendship, idFriend);
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeFreind = async function (idFriend) {
  // methode supprimer un amis
  try {
    this.friendship= removeItemInList(this.friendship, idFriend);
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
          this.listColisLiv=insertItemInList(this.listColisLiv, idColis);
      case "Exp":
        this.listColisExp=insertItemInList(this.listColisExp, idColis);
      default:
        this.listColisDest=insertItemInList(this.listColisDest, idColis);
      }
      return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeColis = async function (idColis, statut) {
  // methode supprimer un colis
  try {
    switch (statut) {
      case "Liv":
        this.listColisLiv=removeItemInList(this.listColisLiv, idColis);
      case "Exp":
        this.listColisExp=removeItemInList(this.listColisExp, idColis);
      default:
        this.listColisDest=removeItemInList(this.listColisDest, idColis);
      }
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.insertAnnonce = async function (idAnnonce) {
  // methode ajoute nouveau annonce pour permettre le user sauvgarder un annonce pour retulise comme template
  try {
    this.listAnnonce=insertItemInList(this.listAnnonce, idAnnonce);
    return await this.save();
  } catch (error) {
    return error;
  }
};
profilSchema.methods.removeAnnonce = async function (idAnnonce) {
  // methode supprimer un annonce
  try {
    this.listAnnonce=removeItemInList(this.listAnnonce, idAnnonce);
    return await this.save();
  } catch (error) {
    return error;
  }
};
module.exports = mongoose.model("Profil", profilSchema);
