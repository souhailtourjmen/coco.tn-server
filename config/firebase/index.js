const FCM = require("fcm-node");
require("dotenv").config();
const fcm = new FCM(process.env.serverKeyFirebase);
module.exports = fcm;
