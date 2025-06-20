const express = require('express');
const passport = require('passport');
const router = express.Router();

const userController = require('../controller/userController');

router.post('/login', passport.authenticate('local'), userController.user_login);
router.post('/signup', userController.user_signup);
router.post('/logout', userController.user_logout);

module.exports = router;