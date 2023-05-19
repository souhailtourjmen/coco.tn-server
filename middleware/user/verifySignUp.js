const {User,Role,Profil} = require("../../models");
const checkDuplicatedEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(400)
        .json({ success: false, message: "The email already exists" });

    next();
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong , signup fail" });
  }
};

const checkroleExisted = async (req, res, next) => {
  if (req.body.role) {
    const roleFound = await Role.find({ code: { $in: req.body.role } });
    if (!roleFound) {
      return res
        .status(404)
        .json({ success: false, message: "role not found" });
    }
  }
  next();
};

module.exports = { checkDuplicatedEmail, checkroleExisted };
