const Annonce = require("../../models/annonce");
const Proposal = require("../../models/proposal");
const Profil = require("../../models/profil");
const { createAddress } = require("../../services/index");
const getAllProposalbyIdProfil = async (req, res) => {
  try {
    const idProfil = req.body.idProfil;
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil).exec();
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const proposals = await Proposal.find({ profil: profilFound._id }).populate({
      path: "pointPickup",
      
    })
    return res.status(200).json(proposals);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const getProposalById = async (req, res) => {
  try {
    if (!req.body.idProposal) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const proposalFound = await Proposal.findById(req.body.idProposal);

    if (!proposalFound) {
      return res
        .status(404)
        .json({ success: false, message: "proposal not found" });
    }
    return res.status(200).json({ successful: true, data: proposalFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const createProposal = async (req, res) => {
  try {
    const { idAnnonce, text, price, } = req.body;

    const idProfil = req.auth.idProfil;
    if (
      !idProfil ||
      !idAnnonce ||
      !text ||
      !price
     
    ) {
      return res.status(404).json({ message: `All fields are required idProfil: ${idProfil} idAnnonce ${idAnnonce} text ${text}` });
    }
    const profilFound = await Profil.findById(idProfil).exec();

    const annonceFound = await Annonce.findById(idAnnonce).exec();

    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profils  not found" });
    }
    if (!annonceFound) {
      return res
        .status(404)
        .json({ success: false, message: " annonce   not found" });
    }

    const proposal = new Proposal({
      profil: profilFound._id,
      Annonce: annonceFound._id,
      text: text,
      price: price,
    });

    const savedProposal = await proposal.save(annonceFound._id);
    if (savedProposal) {
      if (annonceFound.statut === "in progress") {
        annonceFound.statut = "Colis"; // update statut annouce
        await annonceFound.save();
      }
      await annonceFound.insertProposal(proposal._id); // add proposal in Annonce
      await profilFound.insertProposal(proposal._id); // add proposal in Propasal
    }
    return res.status(201).json({
      success: true,
      data: {
        proposal,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create proposal",
    });
  }
};
const deleteProposalById = async (req, res) => {
  try {
    if (!req.body.idProposal) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const proposalFound = await Proposal.findByID(req.body.idProposal);
    if (!proposalFound) {
      return res
        .status(404)
        .json({ success: false, message: "proposal  not found" });
    }
    const proposal = await Proposal.deleteOne({
      _id: req.body.idProposal,
    });

    return res.status(200).json({
      successful: true,
      data: proposal,
      message: `proposal delete successfully`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};

module.exports = {
  getAllProposalbyIdProfil,
  getProposalById,
  createProposal,
  deleteProposalById,
};
