const mongoose = require('mongoose');

const propositionSchema = mongoose.Schema({
    profil: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Profil",
        required: true,
      },
      annonce: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Annonce",
        required: true,
      },
      text: {
        type: String,
        required: [true, "Please enter the propostion"],
        trim: true,
      },
      prix: {
        type: double,
        required: [true, "Please enter the price"],
      },
      datePickup: {
        type: Date,
        required: [true, "Please enter the date"]
      },
      pointPickup:{ type:  mongoose.Schema.Types.ObjectId, required: true, ref: "PointTrajet" },
      created: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model('Proposition', propositionSchema);