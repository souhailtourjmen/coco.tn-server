const { Guest, Profil } = require("../../models");
const { addOneWeekToDate } = require("../../utils/date");
const { getProfilById } = require("./profilService");
const createGuestService = async (name, phone, expire) => {
  try {
    const guest = await new Guest({
      cin: "00000000",
      name: name,
      adresses: [],
      phone: phone,
      email: `${phone}${new Date().getTime()}@gmail.com`,
      role: "646b43435815fe42670afd39",
      password: "sH+12345",
      expireAt: addOneWeekToDate(expire),
    });

    const savedGuest = await guest.save();
    if (savedGuest) {
      const profil = await new Profil({
        user: savedGuest._id,
      });

      const savedProfil = await profil.save();
      return {
        data: savedProfil._id,
        success: true,
        message: "User created successfully",
      };
    } else {
      return {
        data: null,
        success: false,
        message: "bad request",
      };
    }
  } catch (error) {
    console.log(error);

    return {
      success: false,
      message: "something went wrong, fail to create Guest",
    };
  }
};
module.exports = { createGuestService };
