const { ChatRoom } = require("../../models");
const {
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
  getChatRoom,
} = require("../../services");

const createChatRoomController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  const { _profiles } = req.body;
  try {
    if (!_profiles) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for create ChatRoom",
      });
    }
    const { success, data, message } = await createChatRoom(_profiles);
    if (success) {
      const { success, data, message } = await getChatRoom(_profiles);
      return res
        .status(201)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updatedChatRoomController = async (req, res) => {
  const { _chat, chatRoomId } = req.body;
  try {
    if (!_chat?._profile || !_chat?._content || !chatRoomId) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for update ChatRoom",
      });
    }
    const { success, data, message } = await updatedChatRoom(chatRoomId, _chat);

    if (success) {
      return res
        .status(202)
        .json({ success: success, data: data, message: message });
    } else {
      return res
        .status(304)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getChatRoomsByProfileController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  try {
    const { success, data, message } = await getChatRoomsByProfile(idProfil);
    if (success) {
      return res
        .status(200)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getChatRoomController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  const secondidProfil = req?.params.secondidProfil;
  try {
    const { success, data, message } = await getChatRoom([
      idProfil,
      secondidProfil,
    ]);
    if (success) {
      return res
        .status(200)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const getChatRoomByIdController = async (req, res) => {
  const chatRoomId = req.params.chatRoomId;

  try {
    if (!chatRoomId) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for update ChatRoom",
      });
    }
    const { success, data, message } = await getChatRoomById(chatRoomId);
    if (success) {
      return res
        .status(200)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = {
  createChatRoomController,
  updatedChatRoomController,
  getChatRoomsByProfileController,
  getChatRoomByIdController,
  getChatRoomController,
};
