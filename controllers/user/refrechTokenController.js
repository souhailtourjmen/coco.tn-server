const { handleRefreshToken } = require("../../services/index");
const refreshTokenController = async (req, res) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers?.authorization?.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }


    if (!token) return res.status(401).json({ message: "No token provided" });

    const { status, message, refreshToken } = await handleRefreshToken(token);
    console.log(status, message, refreshToken);
    return res
      .status(status)
      .json({ message: message, refreshToken: refreshToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unauthorized" });
    console.error(err);
  }
};
module.exports = {
  refreshTokenController,
};
