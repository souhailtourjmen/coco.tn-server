const express = require("express");
const router = express.Router();
const {
  getAllAnnonces,
  createAnnonce,
  getAnnonceById,
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
router.post("/createAnnonce/", createAnnonce);

/* Get method getAllAnnonces
 * @param ,
 * @return {Object}
 * @response AllAnnonces
 */
router.get("/getAllAnnonces/", getAllAnnonces);

/* Get method getAllAnnonces
 * @param idAnnonce ,
 * @return {Object}
 * @response Annonces
 */
router.get("/getAnnonceById/", getAnnonceById);

module.exports = router;
