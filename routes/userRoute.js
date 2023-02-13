const express = require('express');
const router =express.Router();
const {getAllUsers ,getUserByEmail,updateUserRoleByEmail,updateUserInfoByEmail,deleteUserByEmail}= require('../controllers/user/index');


router.get("/getUserByEmail/", getUserByEmail);
router.get("/getAllUsers/", getAllUsers);
router.put("/updateUserInfoByEmail/", updateUserInfoByEmail);
router.put("/updateUserRoleByEmail/", updateUserRoleByEmail);
router.delete("/deleteUserByEmail/", deleteUserByEmail);

module.exports =router;