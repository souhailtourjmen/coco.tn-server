const express = require("express");
const router = express.Router();
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
router.post("/createColis/",  createColis);

/* Get method getAllColisByUse
 * @param ,idProfil
 * @return {Object}
 * @response Allcolis
 */
router.get("/getAllColisByUser/", getAllColisByUser);

/* Get method getAllColisById
 * @param idColis,
 * @return {Object}
 * @response colis
 */
router.get("/getAllColisById/", getAllColisById);

/* put method updateStatutColis
 * @param statut, idColis
 * @return {Object}
 * @response colis
 */
router.put("/updateStatutColis/",updateStatutColis);


module.exports = router;
