const { User, Role, Profil,Transporter} = require("../../models");
const { createAddress } = require("../annouceService/addressService");
const { createImage } = require("../imageService/imageService");
require("dotenv").config();
const getUserById = async (id) => {
  const userFound = await User.findById(id);
  if (!userFound) {
    throw new Error("error getting user");
  } else {
    return userFound;
  }
};
const updateUserPassword = async (password, newPassword, userFound) => {
  if (newPassword && password) {
    const matchPassword = await userFound.comparePassword(password);

    if (!matchPassword) {
      return {
        success: false,
        data: null,
        message: `Invalid Password `,
      };
    }

    const encodedPassword = await userFound.encryptPassword(newPassword);
    const updatedUser = await User.findByIdAndUpdate(
      userFound.id,
      {
        password: encodedPassword || userFound.password,
      },
      {
        new: true,
      }
    );
    if (updatedUser) {
      return {
        success: true,
        data: updatedUser,
        message: `User updated successfully`,
      };
    } else {
      return {
        success: false,
        data: updatedUser,
        message: `error updating password`,
      };
    }
  }
  throw new Error("error updating password");
};
const updateUserInfo = async (body, userFound) => {
  try {
    const {
      cin,
      name,
      adresses,
      phone,
      gender,
      email,
      CardGris,
      password,
      newPassword,
      image,
    } = body;
    console.log(body);
    let createdAddress;
    let createdImage;
    if (adresses) {
      createdAddress = await createAddress(adresses);
    }
    if (image) {
      createdImage = await createImage(image[0]);
      console.log(createdImage._id);
    }
    if (newPassword && password) {
      const { success, data, message } = await updateUserPassword(
        password,
        newPassword,
        userFound
      );
      if (!success) {
        throw new Error("error updating password in UserInfo");
      }
      return {
        success: success,
        data: data,
        message: message,
        status: success ? 202 : 500,
      };
    }
    if (
      cin ||
      name ||
      adresses ||
      phone ||
      gender ||
      email ||
      CardGris ||
      image
    ) {
      const updatedUser = await User.findByIdAndUpdate(
        userFound.id,
        {
          cin: cin || userFound.cin,
          name: name || userFound.name,
          adresses: createdAddress?.data || userFound.adresses,
          email: email || userFound.email,
          phone: phone || userFound.phone,
          gender: gender || userFound.gender,
          idCardGris: CardGris || userFound.idCardGris,
          image: createdImage?._id || userFound.image,
        },
        {
          new: true,
        }
      );
      return {
        success: true,
        data: updatedUser,
        message: `User updated successfully`,
        status: 202,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      success: false,
      data: null,
      message: "server side error in  updateUserInfo",
      status: 500,
    };
  }
};
const UpgradeUserRole = async (idUser, idRole, cardGris) => {
  // cette methode qu'il fait le mise a jour le role de module user
  // si le role est Transporter donc on le update et crée new Transporter

  try {
    const user = await User.findById(idUser);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });

    if (idRole === "63d9") {
      // cree new Transporter car on a changer son role pour ça on ajoute cette block
      const transporter = new Transporter(user);
      transporter.idCardGris = cardGris;
      const insertTransporter = await transporter.save();
      await User.findByIdAndUpdate(insertTransporter._id, {
        $set: { password: user.password },
      });
      console.log(
        "New transporter",
        insertTransporter,
        "passowrd",
        user.password,
        "userUpdatePassword",
        userUpdatePassword
      );
      return res.status(200).json({ success: true, data: insertTransporter });
    } //else{                  // ici on peut ajoute d'autre role comme admin mais pour le momment on ai besoin que de role Transporter
    //  updatedUser = await user.save();
    //  return res.status(200).json({ success: true, data: updatedUser });
    // }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
module.exports = {
  getUserById,
  updateUserInfo,
  updateUserPassword,
  UpgradeUserRole
};
