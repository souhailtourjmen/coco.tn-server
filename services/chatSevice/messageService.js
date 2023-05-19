const { Chat } = require("../../models");
const createChat = async (chat) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _profile, _content } = chat;

      if (!_profile || !_content) {
        return reject({
          success: false,
          message: "All fields are required for create Chat",
        });
      }
      const newChat = new Chat({
        profile: _profile,
        content: _content,
      });

      const savedChat = await newChat.save();

      return resolve({
        success: true,
        data: savedChat,
        message: "create ChatRoom",
      });
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        data: null,
        message: "something went wrong, fail to create chat",
      });
    }
  });
};
const getChatById = async (idChat) => {
  const chatFound = await Chat.findById(idChat)
    .populate({
        path: "profile",
        select: "user",
        populate: {
          path: "user",
          select: " -_id name email phone role image verified note", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "role image",
            select: "_id role path thumbnail",
          },
        },
    })
    .select("profile content created isRead")
    .exec();
  if (!chatFound) {
    throw new Error("error getting chat");
  } else {
    return chatFound;
  }
};
module.exports = {
  createChat,
  getChatById,
};
