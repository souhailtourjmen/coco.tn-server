const express = require("express");
const { verifyToken } = require("../middleware/auth.Jwt");

const router = express.Router();
const {
  getAllProfils,
  getProfilByID,
  getProfilListReviewByID,
  getProfilListColisByID,
  getProfilListAnnonceByID,
  refreshTokenController
} = require("../controllers/user/index");

/* Get method getProfilByID
 * @param idProfil
 * @return {Object}
 */
router.get("/getProfilByID/", verifyToken, getProfilByID);
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
router.get("/getProfilListAnnonceByID/", verifyToken, getProfilListAnnonceByID);


/* Get method refreshTokenController
 * @param idProfil
 * @return {Object}
 */
router.get("/refreshToken/",  refreshTokenController);

module.exports = router;





/* Get method getProfilListAnnonceByID
 * @param idProfil
 * @return {
 *        successful type boolean
 *        data  Type Objet
 *          ->listAnnonce type Array
 *                |-> [  "pointTrajets":{
 *             "pointExp":"tunis",
 *             "pointDist":"marsa"
 *           },
 *          "_id":,
 *           "profilexp":,
 *           "profilDest":,
 *           "description":,
 *           "contents":[
 *              {
 *                 "_id":,
 *                 "name":,
 *                 "size":,
 *                 "blender":,
 *                 "height":,
 *                 "weight":,
 *                 "images":
 *              },
 *           ],
 *           "dateExp":,
 *           "dateLiv":,
 *           "listProposal":[
 *              {
 *                 "_id":,
 *                 "profil":{
 *                    "_id":",
 *                    "user":{
 *                      "verified":{
 *                          "cardGris":,
 *                          "email":,
 *                          "phone":
 *                       },
 *                       "_id":,
 *                       "lastName":,
 *                       "firstName":,
 *                       "phone":,
 *                       "email":,
 *                    },
 *                    "listReview":[
 *
 *                    ]
 *                 },
 *                 "text":,
 *                 "price":,
 *                 "datePickup":,
 *                 "pointPickup":,
 *                 "status":,
 *                 "created":,
 *              },
 *           ],
 *           "price":,
 *           "expire":,
 *           "createdAt":,
 *           "updatedAt":,
 *        }
 *                  ]
 * }
 */