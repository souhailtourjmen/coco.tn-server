const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const Profil = require("../../models/profil");

const signUp = async (req, res) => {
  try {
    const {
      cin,
      lastName,
      firstName,
      adresses,
      phone,
      gender,
      email,
      password,
      role,
      cardGris,
    } = req.body;

    const rolesFound = await Role.find({ role: { $in: role } });
    const userFound = await User.findOne({ email: email });
    if (userFound)
      return res.status(400).json({ message: "The email already exists" });

    let usert = {
      cin: cin,
      lastName: lastName,
      firstName: firstName,
      adresses: adresses || [],
      phone: phone,
      gender: gender,
      email: email,
      password: password,
      roles: rolesFound.map((role) => role._id),
      verified: {
        cardGris: role === "Transporter" ? true : false,
      },
      idCardGris: role === "Transporter" ? cardGris : null,
    };

    const user =
      role === "Transporter" ? new Transporter(usert) : new User(usert);

    const savedUser = await user.save();

    const profil = new Profil({
      user: user._id,
    });

    const savedProfil = await profil.save();

    return res.status(201).json({
      successful: true,
      token: profil.tokens,
      message: "User created successfully",
    });
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({
        successful: false,
        message: "something went wrong, fail to create user",
      });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
  
    const userFound = await User.findOne({ email: email }).populate("roles");

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

    const profilFound = await Profil.findOne({ user: userFound._id }).populate(
      "user"
    );
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    profilFound.refreshToken();

    return res
      .status(200)
      .json({
        token: profilFound.tokens,
        roles: userFound.roles,
        profil: profilFound,
        successful: true,
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
