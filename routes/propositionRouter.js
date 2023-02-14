const express = require("express");
const router = express.Router();
const {
    getAllPropositionbyIdProfil,
    getPropositionById,
    createProposition,
    deletePropositionById
} = require("../controllers/annonce/index");

/* Post method createProposition
* @param  
    idProfil 
    idAnnonce 
    text
    prix
    datePickup 
    PointPickup
* @return {Object}
* @response data proposition
*/
router.post("/createProposition/", createProposition);

/* Get method getAllPropositionbyIdProfil
 * @param ,
 * @return {Object}
 * @response AllProposition
 */
router.get("/getAllPropositionbyIdProfil/", getAllPropositionbyIdProfil);

/* Get method getPropositionById
 * @param idProposition ,
 * @return {Object}
 * @response Proposition
 */
router.get("/getPropositionById/", getPropositionById);

module.exports = router;
