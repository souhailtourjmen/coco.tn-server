const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const Image = require("../../models/image");
const Profil = require("../../models/profil");
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
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const user = await User.findById(profilFound.user).populate("roles");

    return res.status(200).json({ successful: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const updateUserRoleById = async (req, res) => {
  //cette methode qu'il fait le mise a jour le role de module user si le role est Transporter donc on le update et crée new Transporter

  try {
    const idProfil = req.auth.idProfil;
    const { role, cardGris } = req.body;

    if (!role) {
      if(role ==="63d9" && !cardGris){
        return res.status(404).json({ message: "cardGris  are required" });
      }
      return res.status(404).json({ message: "role are required" });
    }
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const roleFound = await Role.findOne({ code: role });
    if (!roleFound)
      return res
        .status(404)
        .json({ success: false, message: "not role provided" });

    const user = await User.findByIdAndUpdate(
      profilFound.user,
      { $set: { roles: roleFound._id  }},
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });


    if (role === "63d9") {
      // cree new Transporter car on a changer son role pour ça on ajoute cette block
      const transporter = new Transporter(user);
      transporter.idCardGris = cardGris;
      const insertTransporter = await transporter.save();
      await User.findByIdAndUpdate(
        insertTransporter._id,
        { $set: { password:user.password  }},
      );
      console.log("New transporter",insertTransporter ,"passowrd" ,user.password ,"userUpdatePassword" ,userUpdatePassword);
      return res.status(200).json({ success: true, data: insertTransporter });
     }//else{                  // ici on peut ajoute d'autre role comme admin mais pour le momment on ai besoin que de role Transporter 
    //  updatedUser = await user.save();
    //  return res.status(200).json({ success: true, data: updatedUser }); 
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const updateUserInfoById = async (req, res) => {
  try {
    const {
      password,
      newPassword,
      cin,
      lastName,
      firstName,
      adresses,
      phone,
      gender,
      email,
      role,
      CardGris,
    } = req.body;
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    let userFound = await User.findById(profilFound.user);

    if (!userFound)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    let encodedPassword;

    if (newPassword && password) {
      const matchPassword = await userFound.comparePassword(password);

      if (!matchPassword)
        return res.status(401).json({
          token: null,
          message: "Invalid Password",
        });

      encodedPassword = await userFound.encryptPassword(newPassword);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userFound.id,
      {
        cin: cin || userFound.cin,
        lastName: lastName || userFound.lastName ,
        firstName: firstName || userFound.firstName,
        adresses: adresses || userFound.adresses,
        password: encodedPassword || userFound.password,
        email: email || userFound.email,
        roles: role || userFound.roles,
        phone: phone || userFound.phone,
        gender: gender || userFound.gender,
        idCardGris: CardGris || userFound.idCardGris,
      },
      {
        new: true,
      }
    );

    return res.status(200).json({
      success: true,
      user: updatedUser,
      message: `User updated successfully`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};
const deleteUserById = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const user = await User.deleteOne({
      _id: profilFound.user,
    });
    const profil = await Profil.deleteOne({
      _id: profilFound._id,
    });
    return res.status(200).json({
      successful: true,
      data: user,
      message: `User delete successfully`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  updateUserRoleById,
  updateUserInfoById,
  deleteUserById,
};
