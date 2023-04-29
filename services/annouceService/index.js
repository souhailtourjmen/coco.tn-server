const { createAddress } = require("./addressService");
const { updateAnnonceById, getAnnouce } = require("./annouceService");
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
  /* end annonceService */
  /*contentService */
  createContent,
  createAllContent,
  deleteContentByArray,
  /*end contentService */
};
