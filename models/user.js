const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  cin: {
     type: String, 
     required: true 
    },
    nom: {
        type: String, 
        required: true 
       },
    prenom: {
        type: String, 
        required: true 
       },
    adresse: {
        type: String, 
        required: true 
       },
    tel: {
        type: String, 
        maxlength: 13,
        required: true 
       },
    email: {
        type: String, 
        required: true ,
        unique: true,
        maxlength: 254,
       },
    mdp:{
        type: String, 
        required: true
    },
    tokens :[{
        token:{
             type: String,
            default: ''
        },
        date_expires:{
            type: Date,
        }
    }]
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);