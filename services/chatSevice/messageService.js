const { Chat } = require("../../models");
const createChat = async (chat) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _profil, _content } = chat;

      if (!_profil || !_content) {
        return reject({
          success: false,
          message: "All fields are required for create Chat",
        });
      }
      const newChat = new Chat({
        profil: _profil,
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
  const chatFound = await Chat.findById(idChat).exec();
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
