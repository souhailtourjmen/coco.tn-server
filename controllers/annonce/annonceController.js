const Annonce = require("../../models/annonce");
const Objet = require("../../models/objet");
const Profil = require("../../models/profil");
const Proposition = require("../../models/proposition");
const Image = require("../../models/image");
const {
  createAllObject,
  deleteObjetByArray,
} = require("../../utils/objet/objetMethod");

const getAllAnnonces = async (req, res) => {
  try {
    const limit = 10;
    const annonce = await Annonce.find().populate({
      path: "objets",
      populate: {
        path: "images",

      },
    })
    .populate({path:"listPropositions"})
    .limit(Number(limit))
    .sort({createdAt: 'desc'})
    .exec();

    return res.status(200).json(annonce);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
/* cette methode retourne objet par id avec remplissage les champs profil objets pointTrajets et poropositions  */

const getAnnonceById = async (req, res) => {
  try {
    if (!req.body.idAnnonce) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const annonceFound = await Annonce.findById(req.body.idAnnonce)
    populate({
      path: "objets",
      populate: {
        path: "images",

      },

    })
    .limit(Number(limit))
    .sort({createdAt: 'desc'})
    .exec();
    if (!annonceFound) {
      return res
        .status(404)
        .json({ success: false, message: "annonce not found" });
    }
    return res.status(200).json({ successful: true, data: annonceFound });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
/* cette methode cree  un nouveau annonce   */

const createAnnonce = async (req, res) => {
  try {
    const {
      idProfil,
      statut,
      idProfilDist,
      description,
      objets,
      pointExp,
      pointDist,
      prix,
    } = req.body;
    if (
      !idProfil ||
      !statut ||
      !description ||
      !objets ||
      !pointExp ||
      !pointDist ||
      !prix
    ) {
      return res.status(404).json({
        message: `All fields are required ${idProfilDist} \n ${statut} \n ${description} \n ${pointExp} \n ${pointDist}\n ${objets} \n ${prix} `,
      });
    }
    let profilDistFound =null;
    if(idProfilDist){
         profilDistFound = await Profil.findById(idProfilDist).exec() ;
         if (!profilDistFound ) {
          return res
            .status(404)
            .json({ success: false, message: "profils  not found" });
        }
    }
    
    const profilFound = await Profil.findById(idProfil).exec();

    if ( !profilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profils  not found" });
    }

    /*    end block verification  */

    /* cette block pour cree la list des objets qui reçu  */

    const { success, message, dataObjet } = await createAllObject(objets);
    console.log(message, dataObjet, success);
    /* end block cree des objets */

    const annonce = new Annonce({
      statut: statut,
      description: description,
      objets: dataObjet.map((objet) => objet._id) || null,
      objetCount: dataObjet.length || 0,
      pointTrajets: {
        pointExp: pointExp,
        pointDist: pointDist,
      },
      idProfilDist:idProfilDist ||null,
      prix: prix,
    });

    const savedAnnonce = await annonce.save();
    profilFound.insertAnnonce(annonce._id);
    return res.status(201).json({
      success: true,
      data: {
        annonce,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create annonce ",
    });
  }
};
const insertPropositionInAnnonceByID = async (req, res) => {
  const { idAnnonce, idPropsition } = req.body;

  try {
    if (!idAnnonce || !idPropsition) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const annonceFound = await Annonce.findByID(idAnnonce);
    const propositionFound = await Proposition.findByID(idPropsition);

    if (!annonceFound || !propositionFound) {
      return res
        .status(404)
        .json({ success: false, message: "annonce or proposition  not found" });
    }
    const annonce = await Annonce.findByIdAndUpdate(
      annonceFound._id,
      { $set: { listPropositions: propositionFound._id } },
      { $set: { propositionCount: annonceFound.propositionCount + 1 } },
      { new: true }
    );

    const updateProposition = await annonce.save();
    return res.status(200).json({ success: true, data: updateProposition });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error });
  }
};
module.exports = {
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,
  insertPropositionInAnnonceByID,
};
