const express = require("express");
const router = express.Router();
const {
    getAllProposalbyIdProfilController,
  getProposalByIdController,
  createProposalController,
  deleteProposalByIdController,
} = require("../controllers/annonce/index");
const { verifyToken } = require("../middleware/auth");
/* Post method createProposal
* @param  
    idProfil 
    idAnnonce 
    text
    price
    datePickup 
    PointPickup
* @return {Object}
* @response data proposition
*/
router.post("/createProposal/",verifyToken, createProposalController);

/* Get method getAllProposalbyIdProfil
 * @param ,
 * @return {Object}
 * @response AllProposition
 */
router.get("/getAllProposalbyIdProfil/", getAllProposalbyIdProfilController);

/* Get method getPropositionById
 * @param idProposition ,
 * @return {Object}
 * @response Proposition
 */
router.get("/getProposalById/", getProposalByIdController);

module.exports = router;
