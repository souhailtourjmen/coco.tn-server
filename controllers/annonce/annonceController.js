const Annonce = require("../../models/annonce");
const Profil = require("../../models/profil");
const { actualizationAnnouce } = require("../../config/websocket/index");
const {
  createAllContent,
  deleteContentByArray,
  getAnnouce,
  createGuestService,
  createAddress,
  getAllAnnonces,
} = require("../../services/index");

const getAllAnnoncesController = async (req, res) => {
  try {
    const { pageSize, pageNumber, origine, destination, radius } = JSON.parse(
      req.params.options
    );
    // const { pageSize, pageNumber, origine, destination } = req.body;

    const annonce = await getAllAnnonces(
      pageSize,
      pageNumber,
      origine,
      destination,
      radius
    );
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
/* cette methode cree  une nouveau annonce   */

const createAnnonceController = async (req, res) => {
  try {
    const {
      statutProfile,
      secondProfil,
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
      !secondProfil ||
      !contents ||
      !pointExp ||
      !pointDist ||
      !price
    ) {
      return res.status(404).json({
        message: `All fields are required ${idProfil} ${secondProfil} \n ${statutProfile} \n ${description} \n ${pointExp} \n ${pointDist}\n ${contents} \n ${price} `,
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
    const createGuestAccount = await createGuestService(
      secondProfil?.name,
      secondProfil?.phone,
      dateLiv
    );
    const profil = await new Profil({
      user: createGuestAccount?._id,
    });
    const annonce = new Annonce({
      profilexp: profilFound._id,
      profilDest: profil?._id,
      description: description,
      statutProfile: statutProfile,
      contents: dataContent.map((content) => content._id) || null,
      locationExp: {
        type: "Point",
        coordinates: [pointExp._location.lng, pointExp._location.lat],
      },
      locationDist: {
        type: "Point",
        coordinates: [pointDist._location.lng, pointDist._location.lat],
      },
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
