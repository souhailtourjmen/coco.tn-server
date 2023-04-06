const {
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
} = require("./userService/");
const { createAddress, updateAnnonceById } = require("./annouceService/");
module.exports = {
  /* userService */
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
  /* end userService */
  /* annouceService */
  createAddress,
  updateAnnonceById,
  /* end annouceService */
};
