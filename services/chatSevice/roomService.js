const { ChatRoom } = require("../../models");
const { createChat, getChatById } = require("./messageService");
const createChatRoom = async (_profiles) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newChatRoom = new ChatRoom({
        profiles: _profiles.map((profil) => profil),
      });

      const savedChatRoom = await newChatRoom.save();

      return resolve({
        success: true,
        data: savedChatRoom,
        message: "create ChatRoom",
      });
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
const updatedChatRoom = async (chatRoomId, _chat) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { success, data } = await createChat(_chat);
      if (success) {
        const chat = await getChatById(data._id);
        const updated_ChatRoom = await ChatRoom.findOneAndUpdate(
          { _id: chatRoomId },
          { $push: { messagesRoom: data._id } },
          { new: true }
        );
        if (updated_ChatRoom) {
          return resolve({
            success: true,
            data: chat,
            message: "updated ChatRoom",
          });
        } else {
          return resolve({
            success: false,
            data: null,
            message: "not update ChatRoom",
          });
        }
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
const getChatRoom = async (_profiles) => {
  const pageSize = 20;
  const ChatRoomFound = await ChatRoom.findOne({
    profiles: { $all: _profiles },
  }).populate({
      path: "profiles",
      select: " user ",
      populate: {
        path: "user",
        select: " -_id name email phone roles image verified note", // select only the lastName firstName email phone and verified fields in profil
        populate: {
          path: "roles image",
          select: "_id role path thumbnail",
        },
      },
    })
    .populate({
      path: "messagesRoom",
      select: "profile content created isRead",

      populate: {
        path: "profile",
        select: "user",
        populate: {
          path: "user",
          select: " -_id name email phone roles image verified note", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "roles image",
            select: "_id role path thumbnail",
          },
        },
      },
      options: {
        sort: { created: -1 }, // sort by createdAt field in descending order
        limit: 1, // retrieve just the last populated document
      },
    })
    .exec();
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
const getChatRoomById = async (idChatRoom) => {
  const pageSize = 20;
  const ChatRoomFound = await ChatRoom.findById(idChatRoom)

    .populate({
      path: "messagesRoom",
      select: "profile content created isRead",
      populate: {
        path: "profile",
        select: "user",
        populate: {
          path: "user",
          select: " -_id name ",
        },
      },
    })
    .select("messagesRoom")
    //   .skip((pageNumber - 1) * pageSize) // calculate the number of documents to skip
    .limit(pageSize) // limit the number of documents returned to the page size
    .sort({ updatedAt: "desc" })
    .exec();
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
const getChatRoomsByProfile = async (idProfil, pageNumber) => {
  const pageSize = 10;
  const ChatRoomFound = await ChatRoom.find({
    profiles: { $in: [idProfil] },
  })
    .populate({
      path: "profiles",
      select: " user ",
      populate: {
        path: "user",
        select: " -_id name email phone roles image verified note", // select only the lastName firstName email phone and verified fields in profil
        populate: {
          path: "roles image",
          select: "_id role path thumbnail",
        },
      },
    })
    .populate({
      path: "messagesRoom",
      select: "profile content created isRead",

      populate: {
        path: "profile",
        select: "user",
        populate: {
          path: "user",
          select: " -_id name email phone roles image verified note", // select only the lastName firstName email phone and verified fields in profil
          populate: {
            path: "roles image",
            select: "_id role path thumbnail",
          },
        },
      },
      options: {
        sort: { created: -1 }, // sort by createdAt field in descending order
        limit: 1, // retrieve just the last populated document
      },
    })
    //   .skip((pageNumber - 1) * pageSize) // calculate the number of documents to skip
    .limit(pageSize) // limit the number of documents returned to the page size
    .sort({ updatedAt: "desc" })
    .exec();
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
  getChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
};
