const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  getProfilListActivity,
  getProfilListProposal,
  getProfilListColisExp,
  getProfilListColisLiv,
} = require("./profilController");

const {
  getAllUsers,
  getUserById,
  updateUserRoleById,
  updateUserInfoById,
  deleteUserById,
} = require("./usersController");

const { signUp, login } = require("./authController");

const { refreshTokenController } = require("./refrechTokenController");
module.exports = {
  /* controller user */

  getAllUsers,
  getUserById,
  updateUserRoleById,
  updateUserInfoById,
  deleteUserById,

  /*end controller user */

  /* controller profil */

  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  getProfilListActivity,
  getProfilListProposal,
  getProfilListColisExp,
  getProfilListColisLiv,

  /*end controller profil */

  /* controller auth */

  signUp,
  login,

  /*end controller auth */

  /* refreshTokenController */
  refreshTokenController,
  /*end refreshTokenController */
};
