const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,

} = require("./profilController");

const {
  getAllUsers,
  getUserByEmail,
  updateUserRoleByEmail,
  updateUserInfoByEmail,
  deleteUserByEmail,
} = require("./usersController");

const { signUp, login } = require("./authController");

module.exports = {
    /* controller user */

  getAllUsers,
  getUserByEmail,

  updateUserRoleByEmail,
  updateUserInfoByEmail,
  deleteUserByEmail,

  /*end controller user */

  /* controller profil */

  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,



  /*end controller profil */

  /* controller auth */

  signUp,
  login,
  
  /*end controller auth */
};
