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
  updateTokenFCMController,
} = require("./profilController");

const {
  getAllUsers,
  getUserById,
  updateUserRoleById,
  updateUserInfoById,
  deleteUserById,
} = require("./usersController");

const { signUp, login,refreshToken } = require("./authController");

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
  updateTokenFCMController,
  /*end controller profil */

  /* controller auth */

  signUp,
  login,
  refreshToken,
  /*end controller auth */

};
