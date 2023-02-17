const express = require('express');
const router =express.Router();
const {getAllUsers ,getUserById,updateUserRoleById,updateUserInfoById,deleteUserById}= require('../controllers/user/index');


router.get("/getUserByEmail/", getUserById);
router.get("/getAllUsers/", getAllUsers);
router.put("/updateUserInfoByEmail/", updateUserInfoById);
router.put("/updateUserRoleByEmail/", updateUserRoleById);
router.delete("/deleteUserByEmail/", deleteUserById);

module.exports =router;