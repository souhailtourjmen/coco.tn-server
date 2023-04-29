const express = require('express');
const router =express.Router();
const {getAllUsers ,getUserById,updateUserRoleById,updateUserInfoById,deleteUserById}= require('../controllers/user/index');
const {verifyToken} =require('../middleware/auth.Jwt')

router.get("/getUser/",verifyToken, getUserById);
router.get("/getAllUsers/", getAllUsers);
router.put("/updateUserInfo/",verifyToken, updateUserInfoById);
router.put("/updateUserRole/",verifyToken, updateUserRoleById);
router.delete("/deleteUser/",verifyToken, deleteUserById);

module.exports =router;