const express = require('express');
const router =express.Router();
const {test ,createUser,getUserById}= require('../controllers/test_controllers');
router.get("/test/createUser/", createUser);
router.get("/test/getUserById/:id", getUserById);

module.exports =router;