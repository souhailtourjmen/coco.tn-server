const express = require('express');
const router =express.Router();
const testCtrl= require('../controllers/test_controllers');
router.get("/", testCtrl);
module.exports =router;