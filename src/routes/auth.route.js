const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const checkEmail = require('../middlewares/checkEmail');
const validateToken = require('../middlewares/validateToken');
const validateCsrf = require('../middlewares/validateCsrf');
const { signup: signupValidator, signin: signinValidator, forgotpassword: forgotPasswordValidator, resetpassword:resetPasswordValidator, updateuserinfo:updateUserInfoValidator} = require('../validators/auth');
const authController = require('../controllers/auth.controller');

//getcsrf should be first request
router.route('/getcsrf')
    .post(asyncHandler(authController.getcsrf));

router.route('/signup')
    .post(signupValidator, asyncHandler(checkEmail), asyncHandler(authController.signup));

router.route('/signin')
    .post(asyncHandler(validateCsrf), signinValidator, asyncHandler(authController.signin));

router.route('/forgotpassword')
    .post(forgotPasswordValidator, asyncHandler(authController.forgotpassword));

router.route('/resetpassword')
    .post(resetPasswordValidator, asyncHandler(validateToken), asyncHandler(authController.resetpassword));

router.route('/updateuserinfo')
    .post(updateUserInfoValidator, asyncHandler(validateToken), asyncHandler(authController.updateuserinfo));

router.route('/uploadmedia')
    .post(asyncHandler(validateToken), asyncHandler(authController.upload));

router.route('/getloggedinuserdata')
    .post(asyncHandler(validateToken), asyncHandler(authController.getloggedinuserdata));

    
module.exports = router;