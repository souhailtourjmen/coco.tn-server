const pushNotification =require('../../helper/firebase')
module.exports = async function (req, res, next) {
    /* 
      Check whether the data is present, 
      if not call next()
      */
    if (!req?.body?.notificationData) next();
    
    let notificationData = req?.body?.notificationData;
    
    pushNotification(notificationData)

    return;
  };