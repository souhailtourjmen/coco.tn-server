const { Profil } = require("../../models");
const {
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
  getProfilById,
} = require("../../services");

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

    const profilFound = await getProfilById(idProfil);
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
    const idProfil = req.auth.idProfil;
    const filter =req.params.filter
    console.log(idProfil,filter);
    if (!filter ) {
      return res.status(404).json({ message: "All fields are required" });
    }
   
    const listAnnonceFound = await getAllAnnonce(idProfil,filter);
    if (!listAnnonceFound) {
      return res
        .status(404)
        .json({ success: false, message: "listAnnonce not found" });
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
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const allProposals = await getAllProposal(profilFound._id);
    const AllColis = await getAllColis(profilFound._id);
    const listAnnonceFound = await getAllAnnonce(profilFound._id);

    return res.status(200).json({
      successful: true,
      allProposals,
      AllColis,
      listAnnonceFound,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProfilListColisLiv = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const AllColis = await getlistColisLiv(idProfil);

    return res.status(200).json({
      successful: true,
      AllColis,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProfilListColisExp = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const AllColis = await getlistColisExp(idProfil);

    return res.status(200).json({
      successful: true,
      AllColis,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getProfilListProposal = async (req, res) => {
  try {
    const idProfil = req.auth.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const allProposals = await getAllProposal(idProfil);

    return res.status(200).json({
      successful: true,
      allProposals,
    });
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
  getProfilListColisExp,
  getProfilListColisLiv,
  getProfilListProposal,
};
