const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { checkIsValidRoom } = require("../middleware/chat");
const {
  createChatRoomController,
  updatedChatRoomController,
  getChatRoomsByProfileController,
  getChatRoomByIdController,
} = require("../controllers/chat");

/* Get method getChatRoomByProfile
 * @param ,
 * @return {Object}
 * @response AllChatRoomByProfile
 */
router.get(
  "/getChatRoomsByProfile/",
  verifyToken,
  getChatRoomsByProfileController
);
/* Get method getChatRoomById
 * @param chatRoomId ,
 * @return {Object}
 * @response getChatRoom
 */
router.get("/getChatRoomById/:chatRoomId", verifyToken, getChatRoomByIdController);

/* Post method createChatRoom
* @param  
   _profiles, _message
* @return {Object}
* @response data chat
*/
router.post(
  "/createChatRoom/",
  checkIsValidRoom,
  verifyToken,
  createChatRoomController
);
/* Post method createChatRoom
* @param  
   chatRoomId, _message
* @return {Object}
* @response data chat
*/
router.put("/updatedChatRoom/", verifyToken, updatedChatRoomController);
module.exports = router;
