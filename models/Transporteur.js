const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const extendSchema = require('mongoose-extend-schema');
const userSchema =require("./user");
const transporteurSchema = extendSchema (userSchema,{
  idcartegris: { type: String, required: true ,unique: true, },
});
// transporteurSchema.plugin(uniqueValidator);
module.exports =  transporteurSchema;