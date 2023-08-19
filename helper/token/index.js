const jwt = require("jsonwebtoken");
require("dotenv").config();
getToken = async (params) => {
  return jwt.sign(params, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
refreshToken = async (params) => {
  console.log(params);
  return jwt.sign(params, process.env.JWT_REFRECH_SECRET, {
    expiresIn: process.env.JWT_REFRECH_EXPIRE,
  });
};
module.exports = {
  getToken,
  refreshToken,
};
