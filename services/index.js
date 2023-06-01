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
  updateIsrequired,
  createGuestService,
} = require("./userService/");
const {
  createRequest,
  getRequestById,
  updateStatusRequest,
  createDocument,
  getDocumentById,
  getStatusRequestById,
} = require("./RequestUpgrade");
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
  getAllAnnonces,
} = require("./annouceService/");

const {
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
  getStatusColisById,
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
  updateIsrequired,
  createGuestService,
  /* end userService */
  /*imageService */
  createImage,
  createAllImage,
  /*end imageService */
  /* annouceService */
  createAddress,
  getAnnouce,
  updateAnnonceById,
  getAllAnnonces,
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
  getStatusColisById,

  /* end Service */
  /*RequestUpgrade Role Service  */
  createRequest,
  getRequestById,
  updateStatusRequest,
  createDocument,
  getDocumentById,
  getStatusRequestById,
  /*end RequestUpgrade */
};
