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
    const annonce = await Annonce.find()
      .populate({
        path: "objets",
        populate: {
          path: "images",
        },
      })
      .populate({ path: "listPropositions" })
      .limit(Number(limit))
      .sort({ createdAt: "desc" })
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

    const annonceFound = await Annonce.findById(req.body.idAnnonce);
    populate({
      path: "objets",
      populate: {
        path: "images",
      },
    })
      .limit(Number(limit))
      .sort({ createdAt: "desc" })
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
      secondidProfil,
      description,
      objets,
      pointExp,
      pointDist,
      prix,
      dateExp,
      dateLiv,
    } = req.body;
    if (
      !idProfil ||
      !statut ||
      !secondidProfil ||
      !description ||
      !objets ||
      !pointExp ||
      !pointDist ||
      !prix
    ) {
      return res.status(404).json({
        message: `All fields are required ${idProfil} ${secondidProfil} \n ${statut} \n ${description} \n ${pointExp} \n ${pointDist}\n ${objets} \n ${prix} `,
      });
    }
    const secondProfilFound = await Profil.findById(secondidProfil).exec();
    const profilFound = await Profil.findById(idProfil).exec();

    if (!profilFound || !secondProfilFound) {
      return res
        .status(404)
        .json({ success: false, message: "profils  not found" });
    }

    /*    end block verification  */

    /* cette block pour cree la list des objets qui reçu  */

    const { success, message, dataObjet } = await createAllObject(objets);
    console.log(message, dataObjet, success);
    /* end block cree des objets */

    /* l'annonceur  peut ecrire annonce mais c'est ne pas le personne qu'il va envoie le colis  donc lui c'est qu'il va recuptione colis  */

    const annonce = new Annonce({
      profilexp: statut === "exp" ? profilFound._id : secondProfilFound.id, // si le statut equals "exp" donc qu'il ecrire l'annonce c'est l'expediteur si non destinataire
      profilDest: statut === "exp" ? secondProfilFound.id : profilFound._id, // si le statut different a mot "exp" donc qu'il ecrire l'annonce c'est l'destinataire
      description: description,
      objets: dataObjet.map((objet) => objet._id) || null,
      objetCount: dataObjet.length || 0,
      pointTrajets: {
        pointExp: pointExp,
        pointDist: pointDist,
      },
      prix: prix,
      dateExp: dateExp,
      dateLiv: dateLiv,
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

module.exports = {
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,
};
