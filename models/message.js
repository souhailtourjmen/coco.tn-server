const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
 message:{
    type: String,
    maxLength: 255,
    required: true,
 },
 isRead:{
    type: Boolean,
    default: false,
 },
 created: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model('Message',messageSchema);