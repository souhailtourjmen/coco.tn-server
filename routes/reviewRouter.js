const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  getAllReviewController,
  getReviewByIdController,
  createReviewController,
  deleteReviewByIdController,
} = require("../controllers/Colis");

/* Post method createReview
* @param  
   idColis, idTransporter , idProfil ,note,comment
* @return {Object}
* @response data review
*/
router.post("/createReview/", verifyToken, createReviewController);

/* Get method getAllReviewByUse
 * @param ,idProfil
 * @return {Object}
 * @response AllReview
 */
router.get("/getAllReview/", verifyToken, getAllReviewController);

/* Get method getAllReviewById
 * @param idReview,
 * @return {Object}
 * @response review
 */
router.get("/getReviewById/:idReview", verifyToken, getReviewByIdController);

/* Get method    deleteReviewByID,
 * @param idReview,
 * @return {Object}
 * @response review
 */
router.delete(
  "/deleteReviewById/:idReview",
  verifyToken,
  deleteReviewByIdController
);

module.exports = router;
