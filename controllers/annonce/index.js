const {
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,
  insertPropositionInAnnonceByID,
} = require("./annonceController");
const {
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
} = require("./imageController");
const {
  getAllPropositionbyIdProfil,
  getPropositionById,
  createProposition,
  deletePropositionById,
} = require("./propositionController");
const {
  getAllObjets,
  getObjetById,
  deleteObjetById,
} = require("./objetController");

module.exports = {
  /* controller annonce  */
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,
  insertPropositionInAnnonceByID,
  /* end controller annonce */
  /* controller image */
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
  /* end controller image */
  /* controller proposition */
  getAllPropositionbyIdProfil,
  getPropositionById,
  createProposition,
  deletePropositionById,
  /**  end controller proposition */
  /* controller objet */
  getAllObjets,
  getObjetById,
  deleteObjetById,
  /* end controller objet */
};
