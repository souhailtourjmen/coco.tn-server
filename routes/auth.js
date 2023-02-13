const express = require('express');
const router =express.Router();
const { signUp,login}= require('../controllers/user/index');

/* Post method signUp
* @param  cin,
      nom,
      prenom,
      addresses,
      tel,
      gender,
      email,
      password,
      role,
      cartegris,
* @return {Object}
* @response token , message
*/
router.post("/signup/", signUp);


/* Post method login
* @param email, password,
* @return {Object}
* @response token , roles , profil
*/
router.post("/login/", login);

module.exports =router;