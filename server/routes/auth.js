const express = require('express');
const router = express.Router()
const authController = require('../controllers/authController')
const {check} = require('express-validator')
const auth = require('../middleware/auth')

//login
//api/auth
router.post('/', 
authController.authUser
)

//get user authentificated
router.get('/', 
    auth,
    authController.authentificatedUser
)

module.exports = router