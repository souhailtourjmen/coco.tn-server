const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth.Jwt");
const {
  getAllColisByUser,
  getAllColisById,
  createColis,
  updateStatutColis,
} = require("../controllers/Colis/index");

/* Post method createColis
* @param  
   idAnnonce, idProposition
* @return {Object}
* @response data colis
*/
router.post("/createColis/", verifyToken, createColis);

/* Get method getAllColisByUse
 * @param ,idProfil
 * @return {Object}
 * @response Allcolis
 */
router.get("/getAllColisByUser/", verifyToken, getAllColisByUser);

/* Get method getAllColisById
 * @param idColis,
 * @return {Object}
 * @response colis
 */
router.get("/getAllColisById/", verifyToken, getAllColisById);

/* put method updateStatutColis
 * @param statut, idColis
 * @return {Object}
 * @response colis
 * *** les statut disponibles ***
 * enregistré
 * en transit
 * recupérer
 * non livré
 * livré
 * retour'
 */
router.put("/updateStatutColis/", verifyToken, updateStatutColis);

module.exports = router;
