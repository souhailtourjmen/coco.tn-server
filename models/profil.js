const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const profilSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectID,
    required: true,
    ref: "User",
    unique: true,
  },
  statut: [
    {
      type: String,
      default: "annonceur",
    },
  ],
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
  listAnnonce_save: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  annonceCount: {
    type: Number,
    default: 0,
  },
  listColis: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Colis",
    },
  ],
  colisCount: {
    type: Number,
    default: 0,
  },
  listReview: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Annonce",
    },
  ],
  reviewCount: {
    type: Number,
    default: 0,
  },
  listChanel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
    },
  ],
  channelCount: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: Date.now },
  expireAt: {
    type: Date,
    default: Date.now() + 24 * 60 * 60 * 1000,
  },
  friendship: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profil",
  },
  friendshipCount: { type: Number, default: 0 },
});
profilSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Profil", profilSchema);
profilSchema.pre("save", async function (next) {
  this.tokens = await this.getToken();
  next();
});

profilSchema.methods.getToken = function () {
  // returns the token for the authenticated
  return {
    token: jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: Date.now() + 24 * 60 * 60 * 5000,
    }),
    expireAt: Date.now() + 24 * 60 * 60 * 5000,
  };
};

profilSchema.methods.insertReview = async function (idReview) {
  // methode ajoute nouveau review
  try {
    if (this.listReview.indexOf(idReview) === -1) {
      this.listReview.push(idReview);
      this.reviewCount=listColis.length;
    }
    
    return await this.save();
  } catch (error) {
    return error 
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
    return error 
  }
};
profilSchema.methods.removeFreind = async function (idFriend) {
  // methode supprimer un amis 
  try {
    this.friendship.remove(idFriend);
    return await this.save();
  } catch (error) {
    return error 
  }
};
profilSchema.methods.insertColis = async function (idColis) {
  // methode ajoute nouveau colis pour transporteur
  try {
    if (this.listColis.indexOf(idColis) === -1) {
      this.listColis.push(idColis);
    }
    return await this.save();
  } catch (error) {
    return error 
  }
};
profilSchema.methods.insertAnnonce = async function (idAnnonce) {
  // methode ajoute nouveau annonce pour permettre le user sauvgarder un annonce pour retulise comme template
  try {
    if (this.listAnnonce_save.indexOf(idAnnonce) === -1) {
      this.listAnnonce_save.push(idAnnonce);
    }
    return await this.save();
  } catch (error) {
    return error 
  }
};
profilSchema.methods.removeAnnonce = async function (idAnnonce) {
  // methode supprimer un annonce
  try {
    this.listAnnonce_save.remove(idAnnonce);
    return await this.save();
  } catch (error) {
    return error 
  }
};