const {
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
  getProfilById,
  getUserById,
  updateUserInfo,
  updateUserPassword,
} = require("./userService/");
const {
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
  createChat,
  getChatById,
} = require("./chatSevice");
const {
  createAddress,
  updateAnnonceById,
  getAnnouce,
  createContent,
  createAllContent,
  deleteContentByArray,
} = require("./annouceService/");
const { createImage, createAllImage } = require("./imageService/imageService");
module.exports = {
  /* userService */
  handleRefreshToken,
  getAllProposal,
  getAllAnnonce,
  getlistColisExp,
  getlistColisLiv,
  getProfilById,
  getUserById,
  updateUserInfo,
  updateUserPassword,
  /* end userService */
  /*imageService */
  createImage,
  createAllImage,
  /*end imageService */
  /* annouceService */
  createAddress,
  getAnnouce,
  updateAnnonceById,
  createContent,
  createAllContent,
  deleteContentByArray,
  /* end annouceService */
  /*Chat Service */
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
  createChat,
  getChatById,
  /* end Service  */
};
