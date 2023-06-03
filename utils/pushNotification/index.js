const messageNotification = (
  to,
  title,
  subtitle,
  body,
  screen,
  data,

) => {
    console.log(data);
  return {
    to: to,
    notification: {
      body: body,
      content_available: true,
      priority: "high",
      subtitle: subtitle,
      title: title,
      screen: screen,
    },
    data: {
      priority: "high",
      sound: "app_sound.wav",
      content_available: true,
      body: data,
    },
  };
};
module.exports = { messageNotification };
