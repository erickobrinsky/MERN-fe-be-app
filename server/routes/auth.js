const express = require('express');
const router = express.Router()
const authController = require('../controllers/authController')
const {check} = require('express-validator')

//authentificate user
//api/auth
router.post('/', 
[

    check('email', 'add a valid email').isEmail(),
],
authController.authUser
)

module.exports = router