const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const TransporterSchema = require("./Transporter");
const guestSchema = require("./guest");
const userSchema = mongoose.Schema(
  {
    cin: {
      type: String,
      required: true,
      maxlength: 8,
    },
    name: {
      type: String,
      required: true,
      maxlength: 54,
    },
    adresses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
      },
    ],
    phone: {
      type: String,
      maxlength: 13,
      required: true,
    },
    gender: {
      type: String, // 0 : female, 1: male
      enum: ["0", "1"],
      default: "1",
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
      unique: true,
      maxlength: 60,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    verified: {
      email: {
        type: Boolean,
        default: false,
      },
      phone: {
        type: Boolean,
        default: false,
      },
      cardGris: {
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
  this.password = await this.encryptPassword(this.password); //🐞 bug  in update role user with this methode
  next();
});

userSchema.methods.encryptPassword = async (password) => {
  // mehode for crypt password
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
//methode compare tow password if exated return true else return false
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

/* cette code pour faire extend model Transporter par model user 
et je utilise cette façon le cas j'ajout un autre acteur
 comme en future ajoute option à l'annonceur   */

const User = mongoose.model("User", userSchema);
const Transporter = User.discriminator("Transporter", TransporterSchema);
const Guest = User.discriminator("Guest", guestSchema);
module.exports = {
  User,
  Transporter,
  Guest,
};
