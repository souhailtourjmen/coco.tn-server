const Annonce = require("../../models/annonce");
const Content = require("../../models/content");
const Profil = require("../../models/profil");
const Proposal= require("../../models/proposal");
const Image = require("../../models/image");
const {
  createAllContent,
  deleteContentByArray,
} = require("../../utils/content/contentMethod");

const getAllAnnonces = async (req, res) => {
  try {
    const limit = 10;
    const annonce = await Annonce.find()
      .populate({
        path: "contents",
        populate: {
          path: "images",
        },
      })
      .populate({ path: "listProposal" })
      .limit(Number(limit))
      .sort({ createdAt: "desc" })
      .exec();

    return res.status(200).json(annonce);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
/* cette methode retourne content par id avec remplissage les champs profil contents pointTrajets et poropositions  */

const getAnnonceById = async (req, res) => {
  try {
    if (!req.body.idAnnonce) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const annonceFound = await Annonce.findById(req.body.idAnnonce);
    populate({
      path: "contents",
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
      contents,
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
      !contents ||
      !pointExp ||
      !pointDist ||
      !prix
    ) {
      return res.status(404).json({
        message: `All fields are required ${idProfil} ${secondidProfil} \n ${statut} \n ${description} \n ${pointExp} \n ${pointDist}\n ${contents} \n ${prix} `,
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

    /* cette block pour cree la list des contents qui reçu  */
    const { success, message, dataContent } = await createAllContent(contents);
    console.log(message, dataContent, success);
    /* end block cree des contents */

    /* l'annonceur  peut ecrire annonce mais c'est ne pas le personne qu'il va envoie le colis  donc lui c'est qu'il va recuptione colis  */

    const annonce = new Annonce({
      profilexp: statut === "exp" ? profilFound._id : secondProfilFound.id, // si le statut equals "exp" donc qu'il ecrire l'annonce c'est l'expediteur si non destinataire
      profilDest: statut === "exp" ? secondProfilFound.id : profilFound._id, // si le statut different a mot "exp" donc qu'il ecrire l'annonce c'est l'destinataire
      description: description,
      contents: dataContent.map((content) => content._id) || null,
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
