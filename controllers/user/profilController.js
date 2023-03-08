const Profil = require("../../models/profil");
const { User, Transporter } = require("../../models/user");
const Role = require("../../models/role");
const Review = require("../../models/review");
const Colis = require("../../models/colis");
const Channel = require("../../models/channel");
const Image = require("../../models/image");

const getAllProfils = async (req, res) => {
  try {
    const users = await Profil.find().populate("user");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProfilByID = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const profilFound = await Profil.findById(idProfil).populate("user");
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    return res.status(200).json({ successful: true, data: profilFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
// return list review  search by id profl
const getProfilListReviewByID = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const profilFound = await Profil.findById(idProfil).populate("listReview");
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    return res.status(200).json({ successful: true, data: profilFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
//return list colis  search by id profl
const getProfilListColisByID = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil).populate("listColis");
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    return res.status(200).json({ successful: true, data: profilFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
//return list annonce  search by id profl
const getProfilListAnnonceByID = async (req, res) => {
  try {
    const limit = 10; // limit the number of documents to 10
    const fields =
      "-_id listAnnonce "; // select only the listAnnonce fields

    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const listAnnonceFound = await Profil.findById(idProfil)
      .populate({
        path: "listAnnonce",
        populate: {
          path: "listProposal",
          populate: {
            path: "profil",
            select:" user listReview ", // select only the user and listReview fields in profil
            populate: {
              path: "user listReview",
              select:"-_id lastName firstName email phone verified note",   // select only the lastName firstName email phone and verified fields in profil
            },
          },
        },
      })
      .populate({
        path: "listAnnonce",
        populate: {
          path: "contents",
            populate: {
              path: "images",
            },
        },
      })
      .populate({
        path: "listAnnonce",
        populate: {
          path: "profilexp profilDest",
          select:" user  ",
          populate: {
            path: "user",
            select:" -_id lastName firstName email phone verified ", 
          }, 
        },
      })
      .limit(limit)
      .select(fields)
      .sort({ createdAt: "desc" })
      .exec();
    if (!listAnnonceFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    return res.status(200).json({ successful: true, data: listAnnonceFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProfilListActivity = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil)
      .populate({
        path: "listAnnonce",
        populate: {
          path: "listProposal",
          populate: {
            path: "profil",
          },
        },
      })
      .populate("listProposal")
      .populate("listColisLiv")
      .populate("listColisDest")
      .populate("listColisExp");
    populate({
      path: "contents",
      populate: {
        path: "images",
      },
    })
      .limit(Number(limit))
      .sort({ createdAt: "desc" })
      .exec();
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    return res.status(200).json({ successful: true, data: profilFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  getProfilListActivity,
};
