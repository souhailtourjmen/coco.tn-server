const {
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
  getProfilById,
  getUserById,
  updateUserInfo,
  updateUserPassword
} = require("./userService/");
const {
  createAddress,
  updateAnnonceById,
  getAnnouce,
  createContent,
  createAllContent,
  deleteContentByArray,
} = require("./annouceService/");
const { createImage, createAllImage } = require("./imageService/imageService");
module.exports = {
  /* userService */
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
  getProfilById,
  getUserById,
  updateUserInfo,
  updateUserPassword,
  /* end userService */
  /*imageService */
  createImage,
  createAllImage,
  /*end imageService */
  /* annouceService */
  createAddress,
  getAnnouce,
  updateAnnonceById,
  createContent,
  createAllContent,
  deleteContentByArray,
  /* end annouceService */
};
