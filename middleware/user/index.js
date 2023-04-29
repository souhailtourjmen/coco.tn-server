const{
    checkDuplicatedEmail, checkRolesExisted
} =require("./verifySignUp");
const {checkIsValidRole} = require("./checkRole")
const {checkLogin}=require("./verifySignIn");
const { checkIsValidUser}=require("./userValidator")
module.exports={
    checkDuplicatedEmail,
     checkRolesExisted,
     checkLogin,
     checkIsValidUser,
     checkIsValidRole
}