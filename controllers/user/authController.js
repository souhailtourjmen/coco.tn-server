const { User, Transporteur } = require("../../models/user");
const Role = require("../../models/role");
const Profil = require("../../models/profil");

const signUp = async (req, res) => {
  try {
    const {
      cin,
      nom,
      prenom,
      addresses,
      tel,
      gender,
      email,
      password,
      role,
      cartegris,
    } = req.body;
    if (
      !cin ||
      !nom ||
      !prenom ||
      !addresses ||
      !tel ||
      !gender ||
      !email ||
      !password ||
      !role
    ) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const rolesFound = await Role.find({ role: { $in: role } });

    if (!rolesFound) {
      return res
        .status(404)
        .json({ success: false, message: "role not found" });
    }

    if (role === "transporteur" && !cartegris) {
      return res
        .status(404)
        .json({ success: false, message: "cartegris field are required" });
    }

    const userFound = await User.findOne({ email: email }).populate("roles");

    if (userFound) {
      return res.status(404).json({ success: false, message: "user  exist" });
    }

    let usert = {
      cin: cin,
      nom: nom,
      prenom: prenom,
      addresses: addresses,
      tel: tel,
      gender: gender,
      email: email,
      password: password,
      roles: rolesFound.map((role) => role._id),
      verified: {
        cartegris: role === "transporteur" ? true : false,
      },
      idcartegris: role === "transporteur" ? cartegris : null,
    };

    const user =
      role === "transporteur" ? new Transporteur(usert) : new User(usert);

    const savedUser = await user.save();

   
    const profil =new Profil({
      user:user._id,
      statut:user.roles.map((role) => role.role),
      
    }); 

  const savedProfil = await profil.save();
   
    return res.status(201).json({
      successful: true,
      token:profil.tokens,
      message: "User created successfully",

    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ successful: false, message: "something went wrong, fail to create user" });
  }
};
const login = async (req, res) => {
  try {
    const { email , password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: 'All fields are required' })
  }
    const userFound =  await User.findOne({email: email}).populate(
      "roles"
    );
    if (!userFound) {
      return res.status(404).json({ success: false, message: "user not found" })
  }
 
  const matchPassword = await userFound.comparePassword( password );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const profilFound = await Profil.findOne({user: userFound.id_user})
      .populate("user");
      if (!profilFound) {
          return res.status(404).json({ success: false, message: "profil not found" })
      }
    return res
      .status(200)
      .json({ token: token, roles: userFound.roles, profil: profilFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
module.exports = {
  signUp,
  login 
};