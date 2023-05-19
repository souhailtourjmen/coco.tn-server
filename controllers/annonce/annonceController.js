const Annonce = require("../../models/annonce");
const Profil = require("../../models/profil");
const  {actualizationAnnouce } = require("../../config/websocket/index");
const {
  createAllContent,
  deleteContentByArray,
  getAnnouce,
  createAddress,
} = require("../../services/index");

const getAllAnnoncesController = async (req, res) => {
  try {
    const pageSize = 10; // number of documents per page
    const pageNumber = 1; // page number to retrieve
    const annonce = await Annonce.find()
      .populate({
        path: "contents",
        populate: {
          path: "images",
        },
      })
      .populate({
        path: "pointTrajets.pointExp pointTrajets.pointDist",
        select: " -_id place_id  city country location ",
      })
      .populate({
        path: "profilexp profilDest",
        select: " user  ",
        populate: {
          path: "user",
          select: " -_id name  email phone image role verified ",
          populate: {
            path: "role image",
            select: "_id role path thumbnail",
          },
        },
      })
      .populate({
        path: "listProposal",
        populate: {
          path: "profil",
          select: " user ",
          populate: {
            path: "user",
            select: " -_id name email phone role image verified", // select only the lastName firstName email phone and verified fields in profil
            populate: {
              path: "role image",
              select: "_id role path thumbnail",
            },
          },
        },
      })
      .skip((pageNumber - 1) * pageSize) // calculate the number of documents to skip
      .limit(pageSize) // limit the number of documents returned to the page size
      .sort({ createdAt: "desc" })
      .exec();

    return res.status(200).json(annonce);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
/* cette methode retourne content par id avec remplissage les champs profil contents pointTrajets et poropositions  */

const getAnnonceByIdController = async (req, res) => {
  try {
    const idAnnonce = req?.params?.idAnnonce;
    if (!idAnnonce) {
      return res.status(404).json({ message: "All fields are required" });
    }

    const annonceFound = await getAnnouce(idAnnonce);
    if (!annonceFound) {
      return res
        .status(404)
        .json({ success: false, data: null, message: "annonce not found" });
    }
    return res.status(200).json({ success: true, data: annonceFound });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, data: null, message: error.message });
  }
};
/* cette methode cree  un nouveau annonce   */

const createAnnonceController = async (req, res) => {
  try {
    const {
      statutProfile,
      secondidProfil,
      description,
      contents,
      pointExp,
      pointDist,
      price,
      dateExp,
      dateLiv,
    } = req.body;
    const idProfil = req.auth.idProfil;

    if (
      !idProfil ||
      !statutProfile ||
      !description ||
      !contents ||
      !pointExp ||
      !pointDist ||
      !price
    ) {
      return res.status(404).json({
        message: `All fields are required ${idProfil} ${secondidProfil} \n ${statutProfile} \n ${description} \n ${pointExp} \n ${pointDist}\n ${contents} \n ${price} `,
      });
    }
    const profilFound = await Profil.findById(idProfil).exec();

    if (!profilFound) {
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
      profilexp: profilFound._id,
      description: description,
      statutProfile: statutProfile,
      contents: dataContent.map((content) => content._id) || null,
      pointTrajets: {
        pointExp: (await createAddress(pointExp)).data,
        pointDist: (await createAddress(pointDist)).data,
      },
      price: price,
      dateExp: dateExp,
      dateLiv: dateLiv,
    });

    const savedAnnonce = await annonce.save();
    profilFound.insertAnnonce(annonce._id);
    actualizationAnnouce(await getAnnouce(savedAnnonce._id));
    return res.status(201).json({
      success: true,
      message: "create annonce",
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
  getAllAnnoncesController,
  createAnnonceController,
  getAnnonceByIdController,
};
