const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  getAllAnnoncesController,
  createAnnonceController,
  getAnnonceByIdController,
} = require("../controllers/annonce/index");

/* Post method createAnnonce
* @param  
    idProfil,
    statut,
    idProfilDist,
    description,
    objets,
    dateExp,
    dateLiv,
    pointExp,
    pointDist,
    prix,
* @return {Object}
* @response data annonce
*/
router.post("/createAnnonce/", verifyToken, createAnnonceController);

/* Get method getAllAnnonces
 * @param ,
 * @return {Object}
 * @response AllAnnonces
 */
router.get("/fetchAllAnnonces/", verifyToken, getAllAnnoncesController);

/* Get method getAllAnnonces
 * @param idAnnonce ,
 * @return {Object}
 * @response Annonces
 */
router.get("/fetchAnnonceById/:idAnnonce", verifyToken, getAnnonceByIdController);

module.exports = router;
