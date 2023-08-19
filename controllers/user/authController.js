const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const { Profil } = require("../../models");
const { createAddress, getProfilById } = require("../../services/");

require("dotenv").config();
const signUp = async (req, res) => {
  try {
    const { cin, name, adresses, phone, email, password } = req.body;
    const _createAdresses = adresses
      ? (await createAddress(adresses)).data
      : null;
    const user = await new User({
      cin: cin,
      name: name,
      adresses: _createAdresses ? [_createAdresses] : [],
      phone: phone,
      email: email,
      role: process.env.idRoleAnnoncer,
      password: password,
    });
    user._isNewUser = true;
    const savedUser = await user.save();
    if (savedUser) {
      const profil = await new Profil({
        user: user._id,
      });
      profil._isNewUser = true;
      const savedProfil = await profil.save();
      const profilFound = await getProfilById(savedProfil._id);
      return res.status(201).json({
        data: profilFound,
        success: true,
        message: "User created successfully",
      });
    } else {
      return res.status(400).json({
        data: null,
        success: false,
        message: "bad request",
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      successful: false,
      message: "something went wrong, fail to create user",
    });
  }
};
const login = async (req, res) => {
  try {
    let i = 0;
    const { email, password } = req.body;
    const userFound = await User.findOne({ email: email });
    console.log(email);
    if (!userFound) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const matchPassword = await userFound.comparePassword(password);

    if (!matchPassword)
      return res.status(402).json({
        token: null,
        message: "Invalid Password",
      });
    const profil = await Profil.findOne({ user: userFound._id }).select("_id");
    if (!profil) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const tokenCurreent = await profil.refreshToken();
    const profilFound = await getProfilById(profil._id);
    if (tokenCurreent) {
      profilFound.tokens.token = tokenCurreent?.tokens?.token;
      return res.status(200).json({
        data: profilFound,
        success: true,
        message: "profil found",
      });
    } else {
      return res.status(500);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
const refreshToken = async (req, res) => {
  try {
    if (
      req.headers.authorization &&
      req.headers?.authorization?.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);
      if (!token) {
        return res
          .status(403)
          .json({ message: "No token provided Forbidden " });
      } else {
        const foundProfil = await Profil.findOne({
          "tokens.token": token,
        }).exec();
        if (foundProfil) {
          const tokenCurreent = await foundProfil.refreshToken();
          if (tokenCurreent) {
            return res.status(200).json({
              message: "success refreshToken",
              refreshToken: tokenCurreent?.tokens?.token,
            });
          } else {
            res.status(500).json({ message: "problem with refresh" });
          }
        } else {
          return res
            .status(403)
            .json({ message: "hacked user", refreshToken: null }); //Forbidden     hacked user
        }
      }
    } else {
      return res
        .status(403)
        .json({ status: 403, message: "hacked user", refreshToken: null }); //Forbidden     hacked user
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unauthorized" });
    console.error(err);
  }
};
module.exports = {
  signUp,
  login,
  refreshToken,
};
