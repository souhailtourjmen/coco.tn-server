const Colis = require("../../models/colis");
const Profil = require("../../models/profil");
const Proposal = require("../../models/proposal");
const StatutColis = require("../../models/statutColis");
const Annonce = require("../../models/annonce");

const getAllColisByUser = async (req, res) => {
  const { idProfil } = req.body.idProfil;

  try {
    if (!idProfil) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const profilFound = await Profil.findById(idProfil);
    if (!profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profil not found" });
    }
    const listColisExp = await Colis.find({ idExpediteur: profilFound._id });
    const listColisRec = await Colis.find({ idDistinataire: profilFound._id });

    return res
      .status(200)
      .json({ success: true, data: { listColisExp, listColisRec } });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getAllColisById = async (req, res) => {
  const { idColis } = req.body.idColis;

  try {
    if (!idColis) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const colisFound = await Colis.findById(idColis);
    if (!colisFound) {
      return res
        .status(404)
        .json({ success: false, message: "colis not found" });
    }

    return res.status(200).json({ success: true, data: colisFound });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const createColis = async (req, res) => {
  try {
    const { idAnnonce, idProposal } = req.body;
    /* block check id  */

    if (!idAnnonce || !idProposal) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }
    const annonceFound = await Annonce.findById(idAnnonce);
    if (!annonceFound) {
      // check id annonce
      return res
        .status(404)
        .json({ success: false, message: "annonce not found" });
    }

    const proposalFound = await Proposal.findById(idProposal);
    if (!proposalFound) {
      //  check id proposals
      return res
        .status(404)
        .json({ success: false, message: "proposal not found" });
    }

    /* end check id */

    /* chaque colis est son statut donc on ajoute statut pardefaut enregistré
  ***les statut disponibles *** 
  * enregistré 
  * en transit
  * recupérer
  * non livré
  * livré
  * retour'
  
  */
    const statutColisDefault = await StatutColis.find({
      statut: { $in: "enregistré" },
    });
    /* creation nouveau colis  */
    const colis = new Colis({
      idAnnonce: annonceFound._id,
      proposal_Accept: idProposal,
      statut: statutColisDefault.map((item) => item._id),
    });
    const savedColis = await colis.save();

    return res.status(201).json({
      success: true,
      data: {
        colis,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create profil ",
    });
  }
};
/*
 ***les statut disponibles ***
 * enregistré
 * en transit
 * recupérer
 * non livré
 * livré
 * retour'
 */
const updateStatutColis = async (req, res) => {
  const { statut, idColis } = req.body;

  try {
    /* block check id  */

    if (!idColis || !statut) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }
    const newStatuts = await StatutColis.find({
      statut: { $in: statut },
    });
    if (!newStatuts)
      return res
        .status(404)
        .json({ success: false, message: "not statut provided" });

    const colisFound = await Colis.findById(idColis);

    if (!colisFound)
      return res
        .status(404)
        .json({ success: false, message: "colis not found" });

  /* check duplcate colis */
  let x;
  newStatuts.map((item)=>x=item._id );
  let check ;
  colisFound.statut.map((item)=>{check=item._id.equals(x)})
    if(check)
       return res
        .status(404)
        .json({
          success: false,
          message: "statut exist", 

        });
    /* end dplicate  */
    const colis = await Colis.findByIdAndUpdate(
      colisFound._id,
      { $push: { statut: { $each: newStatuts } } },
      { new: true }
    );
    return res
      .status(200)
      .json({ success: true, data: colis, statut: newStatuts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const deleteColisByID = async (req, res) => {
  try {
    const idColis = req.body.idColis;
    if (!idColis) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }
    const colisFound = await Colis.findById(idColis).populate({
      path: "proposal_Accept",
    });

    if (!colisFound)
      return res
        .status(404)
        .json({ success: false, message: "colis not found" });

    const colisdeleted = await Colis.deleteOne({
      _id: colisFound._id,
    });

    return res.status(200).json({
      successful: true,
      data: colisdeleted,
      message: `colis delete successfully`,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};

module.exports = {
  getAllColisByUser,
  getAllColisById,
  createColis,
  updateStatutColis,
};
