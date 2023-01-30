const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
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
    address: {
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
    mdp: {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          default: "",
        },
        date_expires: {
          type: Date,
        },
      },
    ],
    role: {
      type: Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    image: {
      type: Schema.Types.ObjectId,
      ref: "Image",
    },
    verified: [{
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
        
    }],
    created: {
        type: Date,
        default: Date.now,
      },
  },
  { timestamps: true }
);
userSchema.plugin(uniqueValidator);

UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  UserSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  UserSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

module.exports = mongoose.model("User", userSchema);
