const express = require("express");
const { verifyToken } = require("../middleware/auth");
const { checkIsValidFilter } = require("../middleware/annonce");

const router = express.Router();
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
  updateTokenFCMController
} = require("../controllers/user/index");

/* Get method getProfilByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilByID/:idProfil?", verifyToken, getProfilByID);
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
  "/getProfilListAnnonce/:filter?",
  checkIsValidFilter,
  verifyToken,
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
router.put("/updateTokenFCM/", verifyToken, updateTokenFCMController);



module.exports = router;
