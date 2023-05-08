require("dotenv").config();

const checkIsValidRole = (req, res, next, id) => {
  const isValid = [
    process.env.roleAdmin,
    process.env.roleAnnoncer,
    process.env.roleTransproter,
  ];
  if (!req.body.role) {
    res
      .status(404)
      .json({ successful: false, message: "role is required" });
  }
  if (!isValid.includes(req.body.role)) {
    res
      .status(404)
      .json({ successful: false, message: "Not found, invalid role" });
  }

  next();
};
module.exports = {checkIsValidRole};
