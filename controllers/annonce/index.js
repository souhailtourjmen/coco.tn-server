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
  getAllProposition,
  getPropositionById,
  createProposition,
  deletePropositionById,
} = require("./propositionController");
const {
  getAllObjets,
  getObjetById,
  createObjet,
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
  getAllProposition,
  getPropositionById,
  createProposition,
  deletePropositionById,
  /**  end controller proposition */
  /* controller objet */
  getAllObjets,
  getObjetById,
  createObjet,
  deleteObjetById,
  /* end controller objet */
};
