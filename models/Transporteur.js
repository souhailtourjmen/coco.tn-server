const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const transporteurSchema = mongoose.Schema({
  idcartegris: { type: String, required: true ,unique: true, },
});
transporteurSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Transporteur', userSchema);