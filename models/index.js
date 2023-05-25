const { User, Transporter,Guest } = require("./user");
const Annonce = require("./annonce");
const Profil = require("./profil");
const Notification = require("./notification");
const Address = require("./address");
const Colis = require("./colis");
const Content = require("./content");
const Role = require("./role");
const Review = require("./review");
const StatutColis = require("./statutColis");
const Chat = require("./message");
const ChatRoom = require("./room");
const Proposal =require("./proposal")
const Document = require("./Document");
const RequestUpgradeRole = require("./RequestUpgradeRole")
module.exports = {
  User,
  Guest,
  Transporter,
  Annonce,
  Profil,
  Notification,
  Address,
  Colis,
  Content,
  Role,
  Review,
  StatutColis,
  ChatRoom,
  Chat,
  Proposal,
  RequestUpgradeRole,
  Document
};
