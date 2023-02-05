const express = require('express');
const router =express.Router();
const {getAllUsers ,createUser,getUserByEmail,updateUserRoleByEmail,updateUserInfoByEmail,deleteUserByEmail}= require('../controllers/usersControllers');

router.post("/api/createUser/", createUser);
router.get("/api/getUserByEmail/", getUserByEmail);
router.get("/api/getAllUsers/", getAllUsers);
router.put("/api/updateUserInfoByEmail/", updateUserInfoByEmail);
router.put("/api/updateUserRoleByEmail/", updateUserRoleByEmail);
router.delete("/api/deleteUserByEmail/", deleteUserByEmail);

module.exports =router;