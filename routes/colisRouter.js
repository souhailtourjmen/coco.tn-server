const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  getAllColisByUserController,
  getColisByIdControllers,
  createColisControllers,
  updateStatutColisController,
  deleteColisByIDController,
  getStatusColisByIdController,
} = require("../controllers/Colis/index");

/* Post method createColis
* @param  
   idAnnonce, idProposition
* @return {Object}
* @response data colis
*/
router.post("/createColis/", verifyToken, createColisControllers);

/* Get method getAllColisByUse
 * @param ,idProfil
 * @return {Object}
 * @response Allcolis
 */
router.get("/getAllColisByUser/", verifyToken, getAllColisByUserController);

/* Get method getAllColisById
 * @param idColis,
 * @return {Object}
 * @response colis
 */
router.get("/getColisById/:idColis", verifyToken, getColisByIdControllers);

/* Get method   getStatusColisById
 * @param idColis,
 * @return {Object}
 * @response colis
 */
router.get(
  "/getStatusColisById/:idColis",
  verifyToken,
  getStatusColisByIdController
);

/* Get method    deleteColisByID,
 * @param idColis,
 * @return {Object}
 * @response colis
 */
router.delete("/deleteColisByID/:idColis", verifyToken, deleteColisByIDController);

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
router.put("/updateStatutColis/", verifyToken, updateStatutColisController);

module.exports = router;
