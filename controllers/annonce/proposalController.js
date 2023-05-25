const Annonce = require("../../models/annonce");
const Proposal = require("../../models/proposal");
const Profil = require("../../models/profil");
const {
  createAddress,
  updateAnnonceById,
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
} = require("../../services");
const getAllProposalbyIdProfilController = async (req, res) => {
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
    const proposals = await Proposal.find({ profil: profilFound._id })
    return res.status(200).json(proposals);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const getProposalByIdController = async (req, res) => {
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

const createProposalController = async (req, res) => {
  try {
    const { idAnnonce, text, price,proposalDate  } = req.body;

    const idProfil = req.auth.idProfil;
    if (!idProfil || !idAnnonce || !text || !price) {
      return res.status(404).json({
        message: `All fields are required idProfil: ${idProfil} idAnnonce ${idAnnonce} text ${text}`,
      });
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

    const { success, data, message } = await createProposal(
      profilFound._id,
      annonceFound._id,
      text,
      price,
      proposalDate
    );
    if (success) {
      if (annonceFound.statut === "Annouce") {
        await updateAnnonceById(annonceFound._id, "In progress")
          //check update annonce
          .catch((error) => {
            console.error("Error updating Annonce:", error);
            return res.status(401).json({
              success: false,
              data: null,
              message:
                "something went wrong, fail to updating Annonce in create propoal",
            });
          });
      }
      await annonceFound.insertProposal(data._id);
      // await annonceFound.save()
      console.log(annonceFound) // add proposal in Annonce
      await profilFound.insertProposal(data._id); // add proposal in Propasal
      return res.status(201).json({
        success: success,
        data: null,
        message: message,
      });
    } else {
      return res.status(404).json({
        success: success,
        data: data,
        message: message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create proposal",
    });
  }
};
const deleteProposalByIdController = async (req, res) => {
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
  getAllProposalbyIdProfilController,
  getProposalByIdController,
  createProposalController,
  deleteProposalByIdController,
};
