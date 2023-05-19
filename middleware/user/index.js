const{
    checkDuplicatedEmail, checkroleExisted
} =require("./verifySignUp");
const {checkIsValidRole} = require("./checkRole")
const {checkLogin}=require("./verifySignIn");
const { checkIsValidUser}=require("./userValidator")
module.exports={
    checkDuplicatedEmail,
     checkroleExisted,
     checkLogin,
     checkIsValidUser,
     checkIsValidRole
}