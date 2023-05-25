const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  expireAt: {
    type: Date,
    required: true,
  },
});

module.exports = guestSchema;
