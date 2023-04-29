const { handleRefreshToken } = require("./refrechTokenService");
const {
  getProfilById,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
} = require("./profilService");
const {
  getUserById,
  updateUserInfo,
  updateUserPassword,
} = require("./userService");
module.exports = {
  /* RefrechTokenService */
  handleRefreshToken,

  /* end RefrechTokenService */

  /*profilService */
  getProfilById,
  getAllProposal,
  getAllAnnonce,
  getAllColis,
  /*end ProfilService */
  /* UserService */
  getUserById,
  updateUserInfo,
  updateUserPassword,
  /* end UserService */
};
