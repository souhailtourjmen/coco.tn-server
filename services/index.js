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
  getChatRoom,
} = require("./chatSevice");
const {
  createAddress,
  updateAnnonceById,
  getAnnouce,
  createContent,
  createAllContent,
  deleteContentByArray,
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
} = require("./annouceService/");

const {
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
} = require("./colisService/colisServicee");
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
  createProposal,
  updateStatutProposal,
  deleteProposalByID,
  getProposalById,
  /* end annouceService */
  /*Chat Service */
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
  createChat,
  getChatById,
  getChatRoom,
  /* end Service  */
  /* Colis Service */
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
  /* end Service */
};
