const { ChatRoom } = require("../../models");

const checkIsValidRoom = async (req, res, next) => {
  const { _profiles } = req.body;
  try {
    const chatRoom = await ChatRoom.findOne({
      profiles: { $all: _profiles },
    }).exec();
    if (chatRoom) {
      return res
        .status(302)
        .json({ success: false, message: "ChatRoom already exists!" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { checkIsValidRoom };
