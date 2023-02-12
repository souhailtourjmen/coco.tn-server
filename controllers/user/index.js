const {
  getAllProfils,
  createProfil,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
} = require("./profilController");

const {
  getAllUsers,
  getUserByEmail,
  createUser,
  updateUserRoleByEmail,
  updateUserInfoByEmail,
  deleteUserByEmail,
} = require("./usersController");

const { signUp, login } = require("./authController");

module.exports = {
    /* controller user */

  getAllUsers,
  getUserByEmail,
  createUser,
  updateUserRoleByEmail,
  updateUserInfoByEmail,
  deleteUserByEmail,

  /*end controller user */

  /* controller profil */

  getAllProfils,
  createProfil,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  insertReviewInProfilByID,
  insertColisInProfilByID,
  insertAnnonceInProfilByID,

  /*end controller profil */

  /* controller auth */

  signUp,
  login,
  
  /*end controller auth */
};
