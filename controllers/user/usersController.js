const {User,Transporteur} = require("../../models/user");
const Role = require("../../models/role");
const Image = require("../../models/image");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("roles");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email}).populate(
      "roles"
    );
        
    return res.status(200).json({ successful: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};



const updateUserRoleByEmail = async (req, res) => {  //cette methode qu'il fait le mise a jour le role de module user si le role est transporteur donc on le update et crée new transporteur 
  const { role ,email,cartegris} = req.body;

  try {
    let roleFound = await Role.findOne({ role: role });
    if (!roleFound)
      return res
        .status(404)
        .json({ success: false, message: "not role provided" });

    let userFound = await User.findOne({"email": email});

    if (!userFound)
      return res
        .status(404)
        .json({ success: false, message: "user not found" });

    const user = await User.findByIdAndUpdate(
      userFound._id,
      { $set: { roles: roleFound._id } },
      { new: true }
    );
   
    if(role==="transporteur"){   // cree new transporteur car on a changer son role pour ça on ajoute cette block
      const transporteur = new Transporteur(user);   
      transporteur.idcartegris=cartegris;
      const insertTransporteur = await transporteur.save();
      return res.status(200).json({ success: true, data: insertTransporteur });
    }/*else{                  // ici on peut ajoute d'autre role comme admin mais pour le momment on ai besoin que de role transporteur 
      const updatedUser = await user.save();
      return res.status(200).json({ success: true, data: updatedUser }); 
    }*/ 
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const updateUserInfoByEmail = async (req, res) => {
  const { password, newPassword,  cin, nom, prenom, addresses, tel, gender, email,role,cartegris } = req.body;
  console.log(req.body);

  try {
    let userFound = await User.findOne({"email":email});

    if (!userFound)
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });

    let encodedPassword;

    if (newPassword && password) {
      const matchPassword = await userFound.comparePassword( password );

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
        nom: nom || userFound.nom,
        prenom: prenom || userFound.prenom,
        addresses: addresses || userFound.addresses,
        password: encodedPassword || userFound.password,
        email: email || userFound.email,
        roles: role || userFound.roles,
        tel: tel || userFound.tel,
        gender: gender || userFound.gender,
        cartegris:cartegris || userFound.cartegris,
        tokens:await userFound.getToken()
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
const deleteUserByEmail = async (req, res) => {
  try {
    
    const user = await User.deleteOne({
      _id: req.body.idUser
    });

    return res.status(200).json({ successful: true, data: user , message: `User delete successfully`, });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false,message: "server side error" });
  }
};
module.exports = {
  getAllUsers,
  getUserByEmail,

  updateUserRoleByEmail,
  updateUserInfoByEmail,
  deleteUserByEmail,
};
