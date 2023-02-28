const {
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,

} = require("./annonceController");
const {
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
} = require("./imageController");
const {
  getAllProposalbyIdProfil,
  getProposalById,
  createProposal,
  deleteProposalById
} = require("./proposalController");
const {
  getAllContents,
  getContentById,
  deleteContentById,
} = require("./contentController");

module.exports = {
  /* controller annonce  */
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,

  /* end controller annonce */
  /* controller image */
  getAllImages,
  getImageById,
  createImage,
  deleteImageById,
  /* end controller image */
  /* controller proposition */
  getAllProposalbyIdProfil,
    getProposalById,
    createProposal,
    deleteProposalById,
  /**  end controller proposition */
  /* controller Content */
  getAllContents,
  getContentById,
  deleteContentById,
  /* end controller Content */
};
