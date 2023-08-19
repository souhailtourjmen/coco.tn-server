const express = require("express");
const router = express.Router();
const {
  signUp,
  login,
  refreshToken,
} = require("../controllers/user");
const {
  checkDuplicatedEmail,
  checkroleExisted,
  checkLogin,
  checkIsValidUser,
} = require("../middleware/user/index");
const { signInLimiter, limiter, verifyToken } = require("../middleware/auth");
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
      cardGris,
* @return {Object}
* @response token , message
*/
router.post("/signup/", limiter, signUp);

/* Post method login
 * @param email, password,
 * @return {Object}
 * @response token , role , profil
 */
router.post("/login/", signInLimiter, checkLogin, login);

router.get("/refrech/",signInLimiter, refreshToken);

module.exports = router;
