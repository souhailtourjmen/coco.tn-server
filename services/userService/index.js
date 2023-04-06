const { handleRefreshToken } = require("./refrechTokenService");
const {getAllProposal,getAllAnnonce,getAllColis} = require("./profilService")
module.exports = {
  /* RefrechTokenService */
  handleRefreshToken,

  /* end RefrechTokenService */

  /*profilService */
  getAllProposal,getAllAnnonce,getAllColis
  /*end ProfilService */
};
