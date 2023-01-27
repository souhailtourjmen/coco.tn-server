const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const transporteurSchema = mongoose.Schema({
  transporteur: { type: String, required: true },
});
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Transporteur', userSchema);