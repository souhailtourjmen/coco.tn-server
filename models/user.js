const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const transporteurSchema = require("./transporteur");
const userSchema = mongoose.Schema(
  {
    cin: {
      type: String,
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    addresses: [
        {
        address: {
          type: String,
          maxlength: 255,
        },
        city: {
          type: String,
          maxlength: 255,
        },
        code_postal: {
          type: String,
          maxlength: 4,
        },
      },
    ],
    tel: {
      type: String,
      maxlength: 13,
      required: true,
    },
    gender: {
      type: String, // 0 : female, 1: male
      required: true,
    },
    email: {
      type: String,
      required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true,
      unique: true,
      maxlength: 254,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    verified: {
      email: {
        type: Boolean,
        default: false,
      },
      tel: {
        type: Boolean,
        default: false,
      },
      cartegris: {
        type: Boolean,
        default: false,
      },
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);

userSchema.pre("save", async function (next) {
  this.password = await this.encryptPassword (this.password);
  next();
});

userSchema.methods.encryptPassword = async (password) => { // mehode for crypt password
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
 //methode compare tow password if exated return true else return false
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/* cette code pour faire extend model transporteur par model user 
et je utilise cette façon le cas j'ajout un autre acteur
 comme en future ajoute option à l'annonceur   */

const User = mongoose.model("User", userSchema); 
const Transporteur = User.discriminator("Transporteur",transporteurSchema);
module.exports = {
  User,
  Transporteur,
};
