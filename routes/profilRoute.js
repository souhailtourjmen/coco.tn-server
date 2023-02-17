const express = require("express");
const { verifyToken } = require('../middleware/auth.Jwt');

const router = express.Router();
const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
} = require("../controllers/user/index");

/* Get method getProfilByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilByID/",verifyToken, getProfilByID);
/* Get method getAllProfil
 * @param null
 * @return Array[{Objet}]
 */
router.get("/getAllProfils/", getAllProfils);

/* Get method getProfilListReviewByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListReviewByID/", getProfilListReviewByID);

/* Get method getProfilListColisByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListColisByID/", getProfilListColisByID);

/* Get method getProfilListAnnonceByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListAnnonceByID/", getProfilListAnnonceByID);

module.exports = router;
