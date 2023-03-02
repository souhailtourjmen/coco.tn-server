const express = require("express");
const router = express.Router();
const {
    getAllProposalbyIdProfil,
    getProposalById,
    createProposal,
    deleteProposalById
} = require("../controllers/annonce/index");
const {verifyToken} =require('../middleware/auth.Jwt')
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
router.post("/createProposal/",verifyToken, createProposal);

/* Get method getAllProposalbyIdProfil
 * @param ,
 * @return {Object}
 * @response AllProposition
 */
router.get("/getAllProposalbyIdProfil/", getAllProposalbyIdProfil);

/* Get method getPropositionById
 * @param idProposition ,
 * @return {Object}
 * @response Proposition
 */
router.get("/getProposalById/", getProposalById);

module.exports = router;
