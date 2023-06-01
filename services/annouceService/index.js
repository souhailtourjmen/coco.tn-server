const { createAddress } = require("./addressService");
const { updateAnnonceById, getAnnouce ,getAllAnnonces} = require("./annouceService");
const {
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
} = require("./proposalService");
const {
  createContent,
  createAllContent,
  deleteContentByArray,
} = require("./contentService");
module.exports = {
  /* annonceService */
  createAddress,
  getAnnouce,
  updateAnnonceById,
  getAllAnnonces,
  /* end annonceService */
  /*contentService */
  createContent,
  createAllContent,
  deleteContentByArray,
  /*end contentService */
  /* proposal Service  */
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
  /* end proposalService */
};
