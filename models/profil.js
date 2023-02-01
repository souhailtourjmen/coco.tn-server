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
annonces: [{ 
  type:  mongoose.Schema.Types.ObjectId, 
  ref: "Annonce" 
}],
  annonceCount: {
    type: Number,
    default: 0,
  },
  
});
profilSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Profil', profilSchema);