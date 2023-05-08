const { User, Transporter } = require("../../models");
require("dotenv").config();
const checkIsValidUser = async (req, res, next) => {
  const {
    cin,
    name,
    phone,
    email,
    role,
    cardGris,
    password,
    gender,
  } = req.body;

  if (
    !cin ||
    !name ||
    !phone ||
    !gender ||
    !email ||
    !password ||
    !role
  )
    res.status(400).json({
      successful: false,
      message: `All fields are required`,
    });
  if (role === process.env.roleTransproter && !cardGris) {
    return res
      .status(404)
      .json({ success: false, message: "cartegris field are required" });
  }

  const reg =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  const isValidEmail = reg.test(email);

  if (!isValidEmail)
    return res
      .status(400)
      .json({ successful: false, message: `Email is not valid` });
  const user = await User.findOne({ email:email});
  if (user)
    return res.status(400).json({ message: "The email already exists" });

  if (typeof name !== "string")
    return res
      .status(400)
      .json({ successful: false, message: ` Name is not valid` });

  if (password.length < 8)
    return res
      .status(400)
      .json({ successful: false, message: `Password min length is 8` });

  next();
};

module.exports = { checkIsValidUser };
