const mongoose = require("mongoose");
const AddressSchema = mongoose.Schema(
  {
    place_id: {
      type: String,
      // required: true,
      // index: true
    },
    city: {
      type: String,
      required: true,
    },
    country: { type: String, required: true },
    location: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Address", AddressSchema);
