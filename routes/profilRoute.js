const express = require('express');
const router =express.Router();
const {getAllProfils ,createProfil,getProfilByID}= require('../controllers/profilController');

router.post("/api/createProfil/", createProfil);
router.get("/api/getProfilByID/", getProfilByID);
router.get("/api/getAllProfils/", getAllProfils);


module.exports =router;