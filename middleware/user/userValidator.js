const checkIsValidUser = (req, res, next) => {
  const {
    cin,
    lastName,
    firstName,
    adresses,
    phone,
    email,
    role,
    cardGris,
    password,
    gender,
  } = req.body;

  if (
    !cin ||
    !lastName ||
    !firstName ||
    !adresses ||
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
    if (role === "Transporter" && !cardGris) {
        return res
          .status(404)
          .json({ success: false, message: "cartegris field are required" });
      }

  let reg =
    /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

  let isValidEmail = reg.test(email);

  if (!isValidEmail)
    return res
      .status(400)
      .json({ successful: false, message: `Email is not valid` });



  if (typeof lastName !== "string" || typeof firstName !== "string")
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
