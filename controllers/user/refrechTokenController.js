const jwt = require("jsonwebtoken");

const refreshTokenController = async (req, res) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers?.authorization?.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token)
      return res.status(403).json({ message: "No token provided Forbidden " });
      const foundProfil = await Profil.findOne({
        'tokens.token': token,
      }).exec();
      console.log(foundProfil);
    // return res
    //   .status(status)
    //   .json({ message: message, refreshToken: refreshToken });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unauthorized" });
    console.error(err);
  }
};
const refresh = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const foundUser = await User.findOne({
        username: decoded.username,
      }).exec();

      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
            roles: foundUser.roles,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      res.json({ accessToken });
    }
  );
};

module.exports = {
  refreshTokenController,
};
