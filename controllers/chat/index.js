const { ChatRoom } = require("../../models");
const {
  createChatRoom,
  getChatRoomById,
  getChatRoomsByProfile,
  updatedChatRoom,
} = require("../../services");
const createChatRoomController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  const { _profiles, _message } = req.body;
  try {
    if (!_profiles || !_message) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for create ChatRoom",
      });
    }
    const { success, data, message } = await createChatRoom({
      _profiles,
      _message,
    });
    if (success) {
      return res
        .status(201)
        .json({ success: success, data: data, message: message });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
const updatedChatRoomController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  const { _message, chatRoomId } = req.body;
  try {
    if (!_message?._profil || !_message?._content || !chatRoomId) {
      return res.status(404).json({
        success: false,
        message: "All fields are required for update ChatRoom",
      });
    }
    const { success, data, message } = await updatedChatRoom(
      chatRoomId,
      _message
    );
    if (success) {
      return res
        .status(202)
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
const getChatRoomByIdController = async (req, res) => {
  const idProfil = req.auth.idProfil;
  const { chatRoomId } = req.body;
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
};
