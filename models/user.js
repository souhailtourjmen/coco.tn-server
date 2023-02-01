const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
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
        district: {
          type: String,
          maxlength: 255,
        },
        state: {
          type: String,
          maxlength: 255,
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
      required: true,
      unique: true,
      maxlength: 254,
    },
    password: {
      type: String,
      required: true,
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
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    image: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Image",
    },
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
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.tokens = {
    token: await this.getToken(),
    expireAt: Date.now() + 24 * 60 * 60 * 5000,
  };
  this.verified={};
  next();
});

userSchema.methods.getToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

userSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
