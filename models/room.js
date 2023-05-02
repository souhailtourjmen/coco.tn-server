const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const roomSchema = mongoose.Schema({
    profils:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'profil',
        required: true
    }],
    MessageChannel:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Message',
        required: true
    }],
    created: {
            type: Date,
            default: Date.now,
          }
},
{ timestamps: true }
);
channelSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Room', channelSchema);