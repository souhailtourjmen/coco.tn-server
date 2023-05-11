const { ChatRoom } = require("../../models");

const checkIsValidRoom = async (req, res, next) => {
  const { _profiles } = req.body;
  try {
    const chatRoom = await ChatRoom.findOne({
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
    if (chatRoom) {
      return res
        .status(200)
        .json({ success: true, message: "ChatRoom already exists!",data:chatRoom });
    }
    next();
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { checkIsValidRoom };
