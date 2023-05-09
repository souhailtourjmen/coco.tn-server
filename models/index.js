const { User, Transporter } = require("./user");
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
module.exports = {
  User,
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
};
