const mongoose = require('mongoose');

const proposalSchema = mongoose.Schema({
    profil: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Profil",
        required: true,
      },
      text: {
        type: String,
        required: [true, "Please enter the propostion"],
        trim: true,
      },
      price: {
        type: Number,
        required: [true, "Please enter the price"],
      },
      datePickup: {
        type: Date,
        required: [true, "Please enter the date"]
      },
      pointPickup:{
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please enter the Address pointPickup "],
        ref: "Address",
      },

      status:{ 
        type: String,
        enum: ['Accepted','Sending','Archived'],
        default: 'Sending',

      },
      created: {
        type: Date,
        default: Date.now,
      },
});



module.exports = mongoose.model('Proposal', proposalSchema);