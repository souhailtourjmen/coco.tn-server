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
      pointPickup:{ type: String, required: true },
      status:{ 
        type: String,
        enum: ['Accepted','Referrals','Archived'],
        default: 'Referrals',

      },
      created: {
        type: Date,
        default: Date.now,
      },
});



module.exports = mongoose.model('Proposal', proposalSchema);