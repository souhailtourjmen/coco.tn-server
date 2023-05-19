const {
  Colis,
  Profil,
  Proposal,
  StatutColis,
  Annonce,
} = require("../../models");
const { path } = require("../../models/Transporter");

const {
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
  updateAnnonceById,
  updateStatutProposal,
  getStatusColisById,
} = require("../../services");
require("dotenv").config();
const getAllColisByUserController = async (req, res) => {
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

    return res
      .status(200)
      .json({ success: true, data: { listColisExp, listColisRec } });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getColisByIdControllers = async (req, res) => {
  try {
    if (!req.params?.idColis) {
      return res.status(404).json({ message: "All fields are required" });
    }
    const colisFound = await getColisById(req.params?.idColis);

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
const createColisControllers = async (req, res) => {
  try {
    const { idAnnonce, idProposal, price } = req.body;

    /* block check id  */
    const idProfil = req.auth.idProfil;

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
    const profilExp = await Profil.findById(idProfil).exec();
    const profilTrans = await Profil.findById(proposalFound.profil).exec();
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

    /* creation nouveau colis  */
    const { success, data, message } = await createColis(
      idAnnonce,
      idProposal,
      price,
      process.env.statutColisDefault
    );
    if (success) {
      await updateAnnonceById(idAnnonce, "Archives")
        //check update annonce
        .catch((error) => {
          console.error("Error updating Annonce:", error);
          return res.status(401).json({
            success: false,
            data: null,
            message:
              "something went wrong, fail to updating Annonce in create colis",
          });
        });
      await updateStatutProposal("Accepted", idProposal)
        //check update proposal
        .catch((error) => {
          console.error("Error updating propoal:", error);
          return res.status(401).json({
            success: false,
            data: null,
            message:
              "something went wrong, fail to updating Proposal in create colis",
          });
        });
      await profilExp.insertColis(data._id, "Exp"); // add colis in ProfileExpiditaire
      await profilTrans.insertColis(data._id, "Liv"); // add colis in ProfileTransporter

      return res.status(201).json({
        success: true,
        data: data,
        message: "create Colis",
      });
    } else {
      return res.status(500).json({
        success: success,
        data: null,
        message: message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "something went wrong, fail to create colis in controller ",
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
const updateStatutColisController = async (req, res) => {
  const { idStatut, idColis } = req.body;

  try {
    /* block check id  */

    if (!idColis || !idStatut) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }
    const newStatuts = await StatutColis.findById(idStatut);
    console.log(newStatuts);
    if (!newStatuts)
      return res
        .status(404)
        .json({ success: false, message: "not statut provided" });
    console.log(newStatuts);
    const colisFound = await Colis.findById(idColis);

    if (!colisFound)
      return res
        .status(404)
        .json({ success: false, message: "colis not found" });
    const statusExists = await colisFound.statut.some(
      (s) => s.statutColis.toString() === newStatuts._id
    );
    if (!statusExists && newStatuts?._id && colisFound?.id) {
      const { success, data, message } = await updateStatutColis(
        newStatuts._id,
        colisFound.id
      );
      if (success) {
        return res
          .status(200)
          .json({ success: success, data: data, message: message });
      } else {
        return res
          .status(400)
          .json({ success: success, data: null, message: message });
      }
    } else {
      return res
        .status(401)
        .json({ success: false, data: null, message: "status exists" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
const deleteColisByIDController = async (req, res) => {
  try {
    const idColis = req.params?.idColis;
    if (!idColis) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }
    const colisFound = await Colis.findById(idColis);

    if (!colisFound)
      return res
        .status(404)
        .json({ success: false, message: "colis not found" });

    const { success, data, message } = await deleteColisByID(colisFound._id);
    if (success) {
      return res.status(200).json({
        success: true,
        data: data,
        message: message,
      });
    } else {
      return res
        .status(500)
        .json({ success: false, data: data, message: "server side error" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};
const getStatusColisByIdController = async (req, res) => {
  try {
    const idColis = req.params?.idColis;
    if (!idColis) {
      //check all fields
      return res.status(404).json({ message: "All fields are required" });
    }

    const { success, data, message } = await getStatusColisById(idColis);
    if (success) {
      return res.status(200).json({
        success: true,
        data: data,
        message: message,
      });
    } else {
      return res
        .status(500)
        .json({
          success: false,
          data: data,
          message: "server side error in service",
        });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "server side error" });
  }
};
module.exports = {
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
  getStatusColisByIdController,
};
