const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const Profil = require("../../models/profil");
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

    const savedUser = await user.save();
    if (savedUser) {
      const profil = await new Profil({
        user: user._id,
      });

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
    console.log("test", i++, " ", email);
    const userFound = await User.findOne({ email: email });

    if (!userFound) {
      return res
        .status(404)
        .json({ success: false, message: "user not found" });
    }

    const matchPassword = await userFound.comparePassword(password);

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });
    const profil = await Profil.findOne({ user: userFound._id }).select("_id");
    if (!profil) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    profil.refreshToken();
    const profilFound = await getProfilById(profil._id)
    return res.status(200).json({
      data: profilFound,
      success: true,
      message: "profil found",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = {
  signUp,
  login,
};
