const {
  getAllAnnoncesController,
  createAnnonceController,
  getAnnonceByIdController,

} = require("./annonceController");
const {
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
} = require("./imageController");
const {
  getAllProposalbyIdProfilController,
  getProposalByIdController,
  createProposalController,
  deleteProposalByIdController,
} = require("./proposalController");
const {
  getAllContents,
  getContentById,
  deleteContentById,
} = require("./contentController");

module.exports = {
  /* controller annonce  */
  getAllAnnoncesController,
  createAnnonceController,
  getAnnonceByIdController,

  /* end controller annonce */
  /* controller image */
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
  /* end controller image */
  /* controller proposition */
  getAllProposalbyIdProfilController,
  getProposalByIdController,
  createProposalController,
  deleteProposalByIdController,
  /**  end controller proposition */
  /* controller Content */
  getAllContents,
  getContentById,
  deleteContentById,
  /* end controller Content */
};
