const { ChatRoom } = require("../../models");
const { createChat } = require("./messageService");
const createChatRoom = async (chatRoom) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { _profiles, _message } = chatRoom;

      const { success, data, message } = await createChat(_message);
      if (success) {
        const newChatRoom = new ChatRoom({
          profiles: _profiles.map((profil) => profil),
          messages: [data._id],
        });

        const savedChatRoom = await newChatRoom.save();

        return resolve({
          success: true,
          data: savedChatRoom,
          message: "create ChatRoom",
        });
      }
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        data: null,
        message: "something went wrong, fail to create ChatRoom",
      });
    }
  });
};
const updatedChatRoom = async (chatRoomId, _message) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { success, data } = await createChat(_message);
      if (success) {
        const updated_ChatRoom = await ChatRoom.findOneAndUpdate(
          { _id: chatRoomId },
          { $push: { messages: data._id } },
          { new: true }
        );

        return resolve({
          success: true,
          data: updated_ChatRoom,
          message: "updated ChatRoom",
        });
      }
    } catch (error) {
      console.log(error);
      return reject({
        success: false,
        data: null,
        message: "something went wrong, fail to updated ChatRoom",
      });
    }
  });
};
const getChatRoomById = async (idChatRoom) => {
  const ChatRoomFound = await ChatRoom.findById(idChatRoom).exec();
  if (!ChatRoomFound) {
    throw new Error("error getting ChatRoom");
  } else {
    return {
      success: true,
      data: ChatRoomFound,
      message: "found ChatRoom",
    };
  }
};
const getChatRoomsByProfile = async (idProfil) => {
    console.log(idProfil);
  const ChatRoomFound = await ChatRoom.find({
    profiles: { $in: [idProfil] },
  }).exec();
  console.log(ChatRoomFound);
  if (!ChatRoomFound) {
    throw new Error("error getting ChatRoom");
  } else {
    return {
      success: true,
      data: ChatRoomFound,
      message: "found ChatRoom",
    };
  }
};
module.exports = {
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
};
