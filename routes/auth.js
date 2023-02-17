const express = require("express");
const router = express.Router();
const { signUp, login } = require("../controllers/user/index");
const {
  checkDuplicatedEmail,
  checkRolesExisted,
  checkLogin,
  checkIsValidUser,
} = require("../middleware/user/index");

/* Post method signUp
* @param  cin,
     lastName,
      firstName,
      adresses,
      phone,
      gender,
      email,
      password,
      role,
      cartegris,
* @return {Object}
* @response token , message
*/
router.post("/signup/",checkIsValidUser,checkRolesExisted, signUp);

/* Post method login
 * @param email, password,
 * @return {Object}
 * @response token , roles , profil
 */
router.post("/login/",checkLogin, login);

module.exports = router;
