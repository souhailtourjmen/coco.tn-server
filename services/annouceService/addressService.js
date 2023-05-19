const Address = require("../../models/address");
const createAddress = async (address) => {
  const { _place_id, _city, _country, _location } = address;
  try {
    const address = new Address({
      place_id: _place_id,
      city: _city,
      country: _country,
      location: {
        lat: _location.lat,
        lng: _location.lng,
      },
    });
    const addressSave = await address.save();
    return { success: true, data: addressSave._id, message: "server side error" };
  } catch (error) {
    console.log(error)
    return  { success: false, data: null, message: "server side error" };
  }
};

module.exports = { createAddress };
