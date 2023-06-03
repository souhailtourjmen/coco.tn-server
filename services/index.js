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
  updateTokenFCM,
  getTokenFCM,
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
  getinformationAnnouce
} = require("./annouceService/");

const {
  createColis,
  updateStatutColis,
  deleteColisByID,
  getColisById,
  getStatusColisById,
  getMessageNotificationColis,
} = require("./colisService/colisServicee");
const { createImage, createAllImage } = require("./imageService/imageService");

const { pushNotification } = require("./firebase");
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
  updateTokenFCM,
  getTokenFCM,

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
  getinformationAnnouce,
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
  getMessageNotificationColis,
  /* end Service */
  /*RequestUpgrade Role Service  */
  createRequest,
  getRequestById,
  updateStatusRequest,
  createDocument,
  getDocumentById,
  getStatusRequestById,
  /*end RequestUpgrade */

  /** firebase service */
  pushNotification,
  /* ends firebase */
};
