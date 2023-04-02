const Profil = require("../../models/profil");
const jwt = require("jsonwebtoken");
const handleRefreshToken = async (token) => {
  // Detected refresh token reuse!
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return { status: 403, message: "hacked user", refreshToken: null }; //Forbidden     hacked user
    const foundprofil = await Profil.findById(decoded.id).exec();
    if (!foundprofil)
      return { status: 405, message: "not found user", refreshToken: null }; //Forbidden
    foundprofil.refreshToken();
    const refreshToken = await Profil.findById(foundprofil._id)
      .select("-_id tokens.token")
      .exec();
    return {
      status: 200,
      message: "success refreshToken ",
      refreshToken: refreshToken,
    };
  } catch (error) {
    console.log("5arya", error);
    return { status: 500, message: "error server", refreshToken: null }; //Forbidden
  }
};

module.exports = { handleRefreshToken };
