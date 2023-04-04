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
    console.log(addressSave);
    return addressSave._id;
  } catch (error) {
    console.log("5arya", error);
    return { status: 500, message: "error server", refreshToken: null }; //Forbidden
  }
};

module.exports = { createAddress };
