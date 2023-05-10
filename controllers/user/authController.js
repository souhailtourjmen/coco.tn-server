const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const Profil = require("../../models/profil");

const signUp = async (req, res) => {
  try {
    const {
      cin,
      name,
      adresses,
      phone,
      gender,
      email,
      password,
      role,
      cardGris,
    } = req.body;

    const rolesFound = await Role.find({ code: { $in: role } });
    const userFound = await User.findOne({ email: email });
    if (userFound)
      return res.status(400).json({ message: "The email already exists" });

    let usert = {
      cin: cin,
      name: name,
      adresses: adresses || [],
      phone: phone,
      gender: gender,
      email: email,
      password: password,
      roles: rolesFound.map((role) => role._id),
      verified: {
        cardGris: role === "63d9" ? true : false,
      },
      idCardGris: role === "63d9" ? cardGris : null,
    };

    const user =
      role === "63d9" ? new Transporter(usert) : new User(usert);

    
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
    let i=0;
    const { email, password } = req.body;
    console.log("test",i++," ",email)
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

    const profilFound = await Profil.findOne({ user: userFound._id }).populate({
      path:"user",
      select:"-_id cin phone gender email name image verified roles adresses",
      populate: {
        path: "roles adresses image",
        select:"_id role place_id city country location path thumbnail"
      },
    }).select("tokens user")
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    profilFound.refreshToken();

    return res
      .status(200)
      .json({
        profil: profilFound,
        success: true,
        message: "profil found" 
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
