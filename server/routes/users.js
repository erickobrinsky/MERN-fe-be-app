const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController')
const {check} = require('express-validator')

//creat an user
//api/users
router.post('/', 
[
    check('name', 'name is mandatory').not().isEmpty(),
    check('email', 'add a valid email').isEmail(),
],
userController.createUser
)

module.exports = router