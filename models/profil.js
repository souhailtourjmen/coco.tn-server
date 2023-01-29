const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const profilSchema = mongoose.Schema({
  user:{
    type:mongoose.Schema.Types.ObjectID,
    required:true,
    ref:'User'
  },
  status: [{
    type: String,
    default: "Annonceur"
}],
  
});
profilSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Profil', profilSchema);