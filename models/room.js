const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const chatRoomSchema = mongoose.Schema({
    profiles:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Profil',
        required: true
    }],
    messagesRoom:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        required: true
    }],
    created: {
            type: Date,
            default: Date.now,
          }
},
{ timestamps: true }
);
chatRoomSchema.plugin(uniqueValidator);
module.exports = mongoose.model('ChatRoom', chatRoomSchema);