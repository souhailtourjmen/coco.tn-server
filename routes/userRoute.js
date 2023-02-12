const express = require('express');
const router =express.Router();
const {getAllUsers ,getUserByEmail,updateUserRoleByEmail,updateUserInfoByEmail,deleteUserByEmail}= require('../controllers/user/index');


router.get("/api/getUserByEmail/", getUserByEmail);
router.get("/api/getAllUsers/", getAllUsers);
router.put("/api/updateUserInfoByEmail/", updateUserInfoByEmail);
router.put("/api/updateUserRoleByEmail/", updateUserRoleByEmail);
router.delete("/api/deleteUserByEmail/", deleteUserByEmail);

module.exports =router;