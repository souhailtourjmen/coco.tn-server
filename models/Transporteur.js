const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const transporteurSchema = userSchema.extend({
  idcartegris: { type: String, required: true ,unique: true, },
});
transporteurSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Transporteur', transporteurSchema);