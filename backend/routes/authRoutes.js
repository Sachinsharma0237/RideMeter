const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/** General Authentication----Email/Password Authentication */
router.post('/register', authController.register);
router.post('/login', authController.login);


module.exports = router;