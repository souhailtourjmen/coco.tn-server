const { createDocument, getDocumentById } = require("./documentService");
const {
  createRequest,
  getRequestById,
  updateStatusRequest,
  getStatusRequestById
} = require("./upgradeService");
module.exports = {
  createRequest,
  getRequestById,
  updateStatusRequest,
  createDocument,
  getDocumentById,
  getStatusRequestById
};
