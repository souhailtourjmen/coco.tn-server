const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const channelSchema = mongoose.Schema({
    profils:[{
        type: Schema.Types.ObjectId,
        ref: 'profil',
        required: true
    }],
    MessageChannel:[{
        type: Schema.Types.ObjectId,
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
channelSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Channel', channelSchema);