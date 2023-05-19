const { handleRefreshToken } = require("./refrechTokenService");
const {
  getProfilById,
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
  updateIsrequired
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
  getlistColisExp,
  getlistColisLiv,
  updateIsrequired,
  /*end ProfilService */
  /* UserService */
  getUserById,
  updateUserInfo,
  updateUserPassword,
  /* end UserService */
};
