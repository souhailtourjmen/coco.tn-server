const User = require("../models/user");
const Role = require("../models/role");
const Role = require("../models/image");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("roles");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, { password: 0 }).populate(
      "roles"
    );

    return res.status(200).json({ successful: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { cin, nom, prenom, adresses, tel, gender, email, password, roles } =
      req.body;
    const rolesFound = await Role.find({ role: { $in: roles } });
    const user = new User({
      cin: cin,
      nom: nom,
      prenom: prenom,
      addresses: adresses,
      tel: tel,
      gender: gender,
      email: email,
      password: password,
      roles: rolesFound.map((role) => role._id),
    });

    const savedUser = await user.save();

    return res.status(201).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create user ",
    });
  }
};
module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserRoleById,
    updateUserInfoById,
  };