const { createAddress } = require("./addressService");
const { updateAnnonceById, getAnnouce ,getAllAnnonces,getinformationAnnouce} = require("./annouceService");
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
  getinformationAnnouce,
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
