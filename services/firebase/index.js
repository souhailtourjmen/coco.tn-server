const FCM = require("fcm-node");
require("dotenv").config();
const getBodyNotifications = require("../../helper/firebase");
const fcm = new FCM(process.env.serverKeyFirebase);
const pushNotification = async (message) => {
  const notification = await getBodyNotifications(message);
  fcm.send(notification, function (err, response) {
    if (err) {
      console.log("Something has gone wrong!");
    } else {
      console.log("Successfully sent with response: ", response);
    }
  });
};

module.exports = pushNotification;
