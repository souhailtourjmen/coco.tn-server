const jwt = require("jsonwebtoken");
const rateLimiter = require("express-rate-limit");
const { Profil } = require("../../models");

const verifyToken = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers?.authorization?.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.auth = {
      idProfil: decoded.id,
    };

    const profilFound = await Profil.findById(req.auth.idProfil, {
      password: 0,
    });

    if (!profilFound)
      return res.status(404).json({ message: "No user found " });

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};

const limiter = rateLimiter({
  max: 5,
  windowMS: 10000, // 10 seconds
  message: "You can't make any more requests at the moment. Try again later",
});
const signInLimiter = rateLimiter({
    max: 3,
    windowMS: 10000, //10 seconds
    message: "Too many sign-in attempts. Try again later."
})
module.exports = { verifyToken, limiter, signInLimiter };
