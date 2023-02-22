const jwt = require("jsonwebtoken");
const Profil = require("../models/profil") ;

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

    const decoded = jwt.verify(token, process.env.JWT_SECRET )
     console.log(decoded)
    req.auth = {
        idProfil:decoded.id
    }

    const profilFound = await Profil.findById(req.auth.idProfil , { password: 0 });

    if (!profilFound ) return res.status(404).json({ message: "No user found " });

    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports={verifyToken};
