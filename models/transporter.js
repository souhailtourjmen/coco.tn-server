const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const extendSchema = require('mongoose-extend-schema');
const userSchema =require("./user");
const transporterSchema = extendSchema (userSchema,{
  idCardGris: { type: String, required: true ,unique: true, },
});
// TransporterSchema.plugin(uniqueValidator);
module.exports =  transporterSchema;