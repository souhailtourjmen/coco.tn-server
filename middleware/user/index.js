const{
    checkDuplicatedEmail, checkRolesExisted
} =require("./verifySignUp");
const {checkLogin}=require("./verifySignIn");
const { checkIsValidUser}=require("./userValidator")
module.exports={
    checkDuplicatedEmail,
     checkRolesExisted,
     checkLogin,
     checkIsValidUser
}