const getBodyNotifications = (message) => {
  console.log(message?.notification);
  try {
    let templateNotifications = {
      to: message?.to,
    };
    if (message?.notification) {
      templateNotifications.notification = {
        body: message?.notification?.body,
        screen: message?.notification?.screen,
        show_in_foreground: message?.notification?.foreground
          ? message?.notification?.foreground
          : true,
        content_available: true,
        priority: message?.notification?.priority
          ? message?.notification?.priority
          : "high",
        subtitle: message?.notification?.subtitle,
        title: message?.notification?.title,
        icon: message?.notification?.icon,
        click_action: message?.notification?.click_action,
      };
      console.log("notification 5arya", templateNotifications);
    }
    if (message?.data) {
      templateNotifications.data = {
        priority: message?.data?.priority ? message?.data.priority : "high",
        sound: message?.data?.sound ? message?.data?.sound : "app_sound.wav",
        content_available: message?.data?.content_available
          ? message?.data?.content_available
          : true,
        backgroundState: true,
        body: message?.data?.body ? message?.data?.body : null,
      };
      console.log("data 5arya", templateNotifications);
    }
    console.log("data elkbira", templateNotifications);
    return templateNotifications;
  } catch (err) {
    console.error(err);
  }
};
module.exports = getBodyNotifications;
