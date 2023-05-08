const express = require("express");
const { verifyToken } = require("../middleware/auth.Jwt");
const { checkIsValidFilter } = require("../middleware/annonce/index");

const router = express.Router();
const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  refreshTokenController,
  getProfilListActivity,
  getProfilListProposal,
  getProfilListColisExp,
  getProfilListColisLiv,
} = require("../controllers/user/index");

/* Get method getProfilByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilByID/", verifyToken, getProfilByID);
/* Get method getAllProfil
 * @param null
 * @return Array[{Objet}]
 */
router.get("/getAllProfils/", verifyToken, getAllProfils);

/* Get method getProfilListReviewByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListReviewByID/", verifyToken, getProfilListReviewByID);

/* Get method getProfilListColisByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListColisByID/", verifyToken, getProfilListColisByID);

/* Get method getProfilListAnnonceByID
 * @param idProfil
 * @return {Object}
 */
router.get(
  "/getProfilListAnnonce/:filter",
  verifyToken,
  // checkIsValidFilter,
  getProfilListAnnonceByID
);

/* Get method getProfilListProposal
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListProposal/", verifyToken, getProfilListProposal);

/* Get method getProfilListColisExp
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListColisExp/", verifyToken, getProfilListColisExp);

/* Get method getProfilListColisLiv
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListColisLiv/", verifyToken, getProfilListColisLiv);

/* Get method getProfilListActivity
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilListActivity/", verifyToken, getProfilListActivity);

/* Get method refreshTokenController
 * @param idProfil
 * @return {Object}
 */
router.get("/refreshToken/", refreshTokenController);

module.exports = router;
