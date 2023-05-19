const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const {
  createRequestController,
  updateStatusRequestController,
  getRequestByIdController,
  getStatusRequestByIdController,
} = require("../controllers/RequestUpgradeRole");

/* Get method getStatusRequestById
 * @param getStatusRequest ,
 * @return {Object}
 * @response getStatusRequest
 */
router.get(
  "/getStatusRequestById/:idRequest",
  verifyToken,
  getStatusRequestByIdController
);

/* Get method getRequestById
 * @param idRequest ,
 * @return {Object}
 * @response getRequestById
 */
router.get("/getRequestById/:idRequest", verifyToken, getRequestByIdController);

/* Post method createRequest
* @param  
   idProfil, _Documents
* @return {Object}
* @response data 
*/
router.post("/createRequest/", verifyToken, createRequestController);
/* Post method createChatRoom
* @param  
   chatRoomId, _message
* @return {Object}
* @response data chat
*/
router.put("/updateStatusRequest/", verifyToken, updateStatusRequestController);
module.exports = router;
